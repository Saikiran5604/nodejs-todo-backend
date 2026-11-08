FROM node:22-alpine

WORKDIR /app

COPY chapter_3/package*.json ./

RUN npm ci --omit=dev

COPY chapter_3/ ./

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "src/server.js"]
