"use client";

import { Box, css } from '@hanzo/ui'
import { M } from '@/components/motion'
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  Globe,
  Lock,
  Shield,
  Terminal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const baseUrls = [
  {
    service: "Cloud API",
    url: "https://api.zoo.network",
    description: "Core platform — compute, storage, inference, billing, and project management.",
  },
  {
    service: "LLM Gateway",
    url: "https://llm.zoo.ngo",
    description: "OpenAI-compatible proxy for 100+ LLM providers with unified auth and billing.",
  },
  {
    service: "IAM",
    url: "https://zoo.id",
    description: "Identity and access management — OAuth 2.0, OIDC, SSO, JWT.",
  },
  {
    service: "KMS",
    url: "https://kms.zoo.ngo",
    description: "Secrets, encryption keys, certificates, and org-scoped credential storage.",
  },
];

const authMethods = [
  {
    method: "Bearer Token",
    description: "Pass your API key in the Authorization header. Recommended for most use cases.",
    example: `curl https://llm.zoo.ngo/v1/chat/completions \\
  -H "Authorization: Bearer $ZOO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "zen5",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`,
  },
  {
    method: "OAuth 2.0 Client Credentials",
    description: "For server-to-server integation. Exchange client ID and secret for an access token.",
    example: `curl -X POST https://zoo.id/oauth/token \\
  -d "grant_type=client_credentials" \\
  -d "client_id=$CLIENT_ID" \\
  -d "client_secret=$CLIENT_SECRET"`,
  },
];

interface Endpoint {
  method: string;
  path: string;
  description: string;
  example: string;
}

const endpoints: { category: string; items: Endpoint[] }[] = [
  {
    category: "Chat Completions",
    items: [
      {
        method: "POST",
        path: "/v1/chat/completions",
        description: "Create a chat completion. Supports streaming, function calling, and tool use.",
        example: `{
  "model": "zen5",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain quantum computing."}
  ],
  "temperature": 0.7,
  "max_tokens": 1024,
  "stream": false
}`,
      },
    ],
  },
  {
    category: "Models",
    items: [
      {
        method: "GET",
        path: "/v1/models",
        description: "List all available models including Zen models and third-party providers.",
        example: `// Response
{
  "data": [
    {"id": "zen5", "object": "model", "owned_by": "hanzo"},
    {"id": "zen5-max", "object": "model", "owned_by": "hanzo"},
    {"id": "zen5-coder", "object": "model", "owned_by": "hanzo"}
  ]
}`,
      },
      {
        method: "GET",
        path: "/v1/models/{model_id}",
        description: "Retrieve details for a specific model.",
        example: `// GET /v1/models/zen5
{
  "id": "zen5",
  "object": "model",
  "owned_by": "hanzo",
  "permission": []
}`,
      },
    ],
  },
  {
    category: "Embeddings",
    items: [
      {
        method: "POST",
        path: "/v1/embeddings",
        description: "Create embedding vectors from input text. 3072 dimensions with zen-embedding.",
        example: `{
  "model": "zen-embedding",
  "input": "The quick brown fox jumps over the lazy dog."
}`,
      },
    ],
  },
  {
    category: "Completions (Legacy)",
    items: [
      {
        method: "POST",
        path: "/v1/completions",
        description: "Create a text completion. Legacy endpoint — prefer chat completions for new projects.",
        example: `{
  "model": "zen5",
  "prompt": "Once upon a time",
  "max_tokens": 256,
  "temperature": 0.7
}`,
      },
    ],
  },
];

const rateLimits = [
  { tier: "Free", rpm: "60", tpm: "100K", rpd: "1,000" },
  { tier: "Starter", rpm: "500", tpm: "1M", rpd: "10,000" },
  { tier: "Pro", rpm: "5,000", tpm: "10M", rpd: "100,000" },
  { tier: "Enterprise", rpm: "Custom", tpm: "Custom", rpd: "Custom" },
];

const errorCodes = [
  { code: "400", name: "Bad Request", description: "Invalid request body or parameters." },
  { code: "401", name: "Unauthorized", description: "Missing or invalid API key." },
  { code: "403", name: "Forbidden", description: "API key lacks required permissions." },
  { code: "404", name: "Not Found", description: "Requested resource does not exist." },
  { code: "429", name: "Rate Limited", description: "Too many requests. Check rate limit headers." },
  { code: "500", name: "Internal Error", description: "Server error. Retry with exponential backoff." },
  { code: "503", name: "Service Unavailable", description: "Service temporarily unavailable. Retry shortly." },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Box tag="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={cn(
        "p-1.5 rounded transition-colors",
        "hover:bg-foreground/10 text-muted-foreground hover:text-foreground"
      )}
      title="Copy"
    >
      {copied ? <Check style={css('w-3.5 h-3.5')} /> : <Copy style={css('w-3.5 h-3.5')} />}
    </Box>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <Box tag="span"
      className={cn(
        "text-[11px] font-mono font-bold px-2 py-0.5 rounded",
        "bg-foreground/10 text-foreground"
      )}
    >
      {method}
    </Box>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <Box className={cn("rounded-lg border overflow-hidden", "border-border")}>
      {label && (
        <Box className="flex items-center justify-between px-4 py-2 border-b border-border bg-foreground/[0.02]">
          <Box tag="span" className="text-xs font-mono text-muted-foreground">{label}</Box>
          <CopyButton text={code} />
        </Box>
      )}
      <Box tag="pre" className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-muted/50">
        <code>{code}</code>
      </Box>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PageClient() {
  return (
    <Box tag="main" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-5xl mx-auto">
        {/* Breadcrumb + Hero */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link
            href="/docs"
          >
            <Box tag="span" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft style={css('w-3.5 h-3.5')} /> Back to Docs
            </Box>
          </Link>
          <Box tag="h1" className="text-5xl sm:text-6xl font-bold mb-6">API Reference</Box>
          <Box tag="p" className={cn("text-xl max-w-3xl", "text-muted-foreground")}>
            Complete REST API reference for Zoo Cloud, LLM Gateway, IAM, and
            KMS. All LLM endpoints are OpenAI-compatible — switch your base URL
            and use your existing code.
          </Box>
        </M>

        {/* OpenAI Compatibility Note */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={cn(
            "p-6 rounded-lg border mb-16",
            "border-border bg-foreground/[0.02]"
          )}
        >
          <Box tag="h3" className="font-semibold mb-2">OpenAI Compatible</Box>
          <Box tag="p" className="text-sm text-muted-foreground mb-3">
            The LLM Gateway implements the OpenAI API specification. If you already use the OpenAI
            SDK, point it at Zoo with zero code changes:
          </Box>
          <CodeBlock
            code={`from openai import OpenAI

client = OpenAI(
    base_url="https://llm.zoo.ngo/v1",
    api_key="your-hanzo-api-key",
)

# All OpenAI SDK methods work as-is`}
            label="Drop-in replacement"
          />
        </M>

        {/* Base URLs */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Base URLs</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Each service has a dedicated base URL.
          </Box>
          <Box className="space-y-3">
            {baseUrls.map((item) => (
              <Box
                key={item.service}
                className={cn(
                  "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border",
                  "border-border"
                )}
              >
                <Box className="flex items-center gap-3 min-w-[180px]">
                  <Globe style={css('w-4 h-4 text-muted-foreground shrink-0')} />
                  <Box tag="span" className="font-semibold text-sm">{item.service}</Box>
                </Box>
                <Box tag="code" className="text-sm font-mono text-muted-foreground">{item.url}</Box>
                <Box tag="p" className="text-xs text-muted-foreground sm:ml-auto max-w-md text-right hidden lg:block">
                  {item.description}
                </Box>
              </Box>
            ))}
          </Box>
        </M>

        {/* Authentication */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Authentication</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Two authentication methods are supported.
          </Box>
          <Box className="space-y-6">
            {authMethods.map((auth) => (
              <div key={auth.method}>
                <Box className="flex items-center gap-2 mb-2">
                  <Lock style={css('w-4 h-4 text-muted-foreground')} />
                  <Box tag="h3" className="text-lg font-semibold">{auth.method}</Box>
                </Box>
                <Box tag="p" className="text-sm text-muted-foreground mb-4">{auth.description}</Box>
                <CodeBlock code={auth.example} label={auth.method} />
              </div>
            ))}
          </Box>
        </M>

        {/* Endpoints */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Core Endpoints</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Primary endpoints on the LLM Gateway (<Box tag="code" className="font-mono text-sm">llm.zoo.ngo</Box>).
          </Box>
          <Box className="space-y-10">
            {endpoints.map((section) => (
              <div key={section.category}>
                <Box tag="h3" className="text-xl font-semibold mb-4">{section.category}</Box>
                <Box className="space-y-6">
                  {section.items.map((endpoint) => (
                    <Box
                      key={endpoint.path}
                      className={cn(
                        "rounded-lg border overflow-hidden",
                        "border-border"
                      )}
                    >
                      <Box className="flex items-center gap-3 px-4 py-3 border-b border-border bg-foreground/[0.02]">
                        <MethodBadge method={endpoint.method} />
                        <Box tag="code" className="text-sm font-mono">{endpoint.path}</Box>
                      </Box>
                      <Box className="p-4">
                        <Box tag="p" className="text-sm text-muted-foreground mb-4">
                          {endpoint.description}
                        </Box>
                        <Box tag="pre" className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-muted/50 rounded-lg">
                          <code>{endpoint.example}</code>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </div>
            ))}
          </Box>
        </M>

        {/* Rate Limits */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Rate Limits</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Limits vary by plan. Check response headers for current usage.
          </Box>
          <Box className={cn("rounded-lg border overflow-hidden", "border-border")}>
            <Box tag="table" className="w-full text-sm">
              <thead>
                <Box tag="tr" className="border-b border-border bg-foreground/[0.02]">
                  <Box tag="th" className="text-left px-4 py-3 font-semibold">Tier</Box>
                  <Box tag="th" className="text-left px-4 py-3 font-semibold">Requests / min</Box>
                  <Box tag="th" className="text-left px-4 py-3 font-semibold">Tokens / min</Box>
                  <Box tag="th" className="text-left px-4 py-3 font-semibold">Requests / day</Box>
                </Box>
              </thead>
              <tbody>
                {rateLimits.map((limit) => (
                  <Box tag="tr" key={limit.tier} className="border-b border-border last:border-b-0">
                    <Box tag="td" className="px-4 py-3 font-medium">{limit.tier}</Box>
                    <Box tag="td" className="px-4 py-3 font-mono text-muted-foreground">{limit.rpm}</Box>
                    <Box tag="td" className="px-4 py-3 font-mono text-muted-foreground">{limit.tpm}</Box>
                    <Box tag="td" className="px-4 py-3 font-mono text-muted-foreground">{limit.rpd}</Box>
                  </Box>
                ))}
              </tbody>
            </Box>
          </Box>
          <Box className="mt-4">
            <Box tag="p" className="text-xs text-muted-foreground">
              Rate limit headers:{" "}
              <Box tag="code" className="font-mono">x-ratelimit-limit-requests</Box>,{" "}
              <Box tag="code" className="font-mono">x-ratelimit-remaining-requests</Box>,{" "}
              <Box tag="code" className="font-mono">x-ratelimit-reset-requests</Box>
            </Box>
          </Box>
        </M>

        {/* Error Codes */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Box tag="h2" className="text-3xl font-bold mb-2">Error Codes</Box>
          <Box tag="p" className={cn("text-lg mb-8", "text-muted-foreground")}>
            Standard HTTP status codes with JSON error bodies.
          </Box>
          <Box className={cn("rounded-lg border overflow-hidden", "border-border")}>
            <Box tag="table" className="w-full text-sm">
              <thead>
                <Box tag="tr" className="border-b border-border bg-foreground/[0.02]">
                  <Box tag="th" className="text-left px-4 py-3 font-semibold w-20">Code</Box>
                  <Box tag="th" className="text-left px-4 py-3 font-semibold w-40">Name</Box>
                  <Box tag="th" className="text-left px-4 py-3 font-semibold">Description</Box>
                </Box>
              </thead>
              <tbody>
                {errorCodes.map((err) => (
                  <Box tag="tr" key={err.code} className="border-b border-border last:border-b-0">
                    <Box tag="td" className="px-4 py-3 font-mono font-medium">{err.code}</Box>
                    <Box tag="td" className="px-4 py-3 font-medium">{err.name}</Box>
                    <Box tag="td" className="px-4 py-3 text-muted-foreground">{err.description}</Box>
                  </Box>
                ))}
              </tbody>
            </Box>
          </Box>
          <Box className="mt-4">
            <CodeBlock
              code={`// Error response format
{
  "error": {
    "message": "Invalid API key provided.",
    "type": "authentication_error",
    "code": "invalid_api_key"
  }
}`}
              label="Error response body"
            />
          </Box>
        </M>

        {/* CTA */}
        <M
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={cn(
            "p-8 md:p-12 rounded-lg border text-center",
            "border-border bg-foreground/[0.02]"
          )}
        >
          <Box tag="h2" className="text-2xl font-bold mb-4">Prefer a client library?</Box>
          <Box tag="p" className={cn("text-lg mb-6 max-w-2xl mx-auto", "text-muted-foreground")}>
            Our SDKs handle authentication, retries, streaming, and typed responses out of the box.
          </Box>
          <Link href="/docs/sdk">
            <Button variant="outline" className="gap-2">
              View SDKs <ArrowRight style={css('w-4 h-4')} />
            </Button>
          </Link>
        </M>
      </Box>
    </Box>
  );
}
