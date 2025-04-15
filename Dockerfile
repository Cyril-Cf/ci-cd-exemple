FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist
RUN echo "Fichiers dans /app/dist :" && ls -l /app/dist
EXPOSE 3000

ENTRYPOINT ["node", "dist/main"]