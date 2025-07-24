# backend/Dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app

# Copiamos package.json y package-lock.json (no yarn.lock)
COPY package*.json ./

# Instalamos con npm CI para entornos de producción
RUN npm ci --only=production

# Copiamos el resto del código
COPY . .

# Si tu proyecto está en TypeScript, transpílalo:
# RUN npm run build

EXPOSE 3001

# Ajusta el comando de arranque según tu stack:
CMD ["npm", "run", "dev"]
