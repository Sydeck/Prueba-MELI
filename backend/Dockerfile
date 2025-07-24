# Etapa de construcción
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos package.json y lock
COPY package*.json ./
RUN npm ci

# Copiamos el código y compilamos
COPY . .

EXPOSE 3001
CMD ["npm", "run", "dev"]
