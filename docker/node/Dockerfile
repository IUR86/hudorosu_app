# /docker/node/Dockerfile
FROM node:20-slim

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g ts-node-dev

EXPOSE 3000 5173