"use client";

import { Box } from '@hanzo/ui'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bot, Send, XCircle } from "lucide-react";
import { Button , toast} from "@hanzo/ui";
import { Drawer, DrawerContent } from '@hanzo/ui';
import { cn } from "@/lib/utils";
type MessageRole = "user" | "assistant";

interface Message {
  role: MessageRole;
  content: string;
}

export default function NotFound() {
  const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Track 404 via analytics if available
    if (typeof window !== "undefined" && (window as any).ha) {
      (window as any).ha.capture("404_page_view", { path: pathname });
    }
  }, [pathname]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage("");

    // Simulate AI response - Replace with actual AI integration
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `I noticed you're trying to access ${pathname}. This page doesn't exist, but I can help you find what you're looking for! What were you trying to find?`
      };
      setMessages([...newMessages, aiMessage]);
    }, 1000);

    // sonner-shaped: the message is the argument, not a `title` field.
      toast('Message sent!', { description: 'The AI assistant will respond shortly.' })
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Box className="text-center">
        <Box tag="h1" className="text-4xl font-bold mb-4">404</Box>
        <Box tag="p" className="text-xl mb-4 text-muted-foreground">Oops! Page not found</Box>
        <Box tag="a" href="/" className="underline text-foreground hover:text-muted-foreground">
          Return to Home
        </Box>
      </Box>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        {/* The sheet is controlled here, so the button opens it directly —
            one source of truth for `open`, and no wrapper around a button. */}
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg animate-bounce bg-primary hover:bg-primary/90 text-primary-foreground"
          size="icon"
        >
          <Bot className="h-6 w-6" />
        </Button>
        <DrawerContent className="h-[500px] p-4 bg-background border-border">
          <Box className="flex flex-col h-full">
            <Box className="flex items-center justify-between mb-4">
              <Box className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-foreground" />
                <Box tag="h2" className="text-lg font-semibold">AI Assistant</Box>
              </Box>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <XCircle className="h-5 w-5" />
              </Button>
            </Box>

            <Box className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-foreground/10 text-muted-foreground"
                  )}
                >
                  {msg.content}
                </Box>
              ))}
            </Box>

            <Box className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 bg-foreground/5 border-border text-foreground placeholder-muted-foreground focus:ring-ring"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
