# Multi-stage: build Next.js static export, then ship on hanzoai/spa.
# See https://github.com/hanzoai/spa/blob/main/RECIPE.md
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM ghcr.io/hanzoai/spa:1.2.0
COPY --from=build /app/out /public
