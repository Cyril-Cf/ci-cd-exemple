FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["node", "dist/main"]
EXPOSE 3000