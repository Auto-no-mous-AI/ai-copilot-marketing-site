FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
COPY packages ./packages

RUN corepack enable && pnpm install --frozen-lockfile
RUN pnpm --dir apps/marketing-web build

FROM nginx:1.27-alpine
COPY --from=builder /app/apps/marketing-web/dist/marketing-web/browser /usr/share/nginx/html
COPY apps/marketing-web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
