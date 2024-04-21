# 2-stage Dockerfile for Vite/React/JS app
# 1st stage => build app
# 2nd stage => serve app with nginx

# ----- Stage 1: Build app -----
FROM node:lts-alpine AS build

WORKDIR /app

RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml vite.config.js ./
RUN pnpm install --frozen-lockfile

COPY src src
COPY index.html ./

RUN pnpm build

# ----- Stage 2: Serve app with nginx -----
FROM nginx:alpine

# Copy custom nginx config with /api proxy
# forwarding to backend service
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]