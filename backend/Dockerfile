FROM node:lts-alpine

WORKDIR /app

RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY src src
COPY migrations migrations
COPY database.json ./

CMD ["pnpm", "migrate-start"]