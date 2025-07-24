# ─── STAGE 1: build frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend .
RUN npm run build

# ─── STAGE 2: build backend
FROM node:18-alpine AS backend-builder
WORKDIR /backend
COPY backend/package*.json ./
RUN npm ci
COPY backend .
RUN npm run env

# ─── STAGE 3: imagen final con Nginx + Node
FROM nginx:alpine
LABEL maintainer="Fran"

# Copia la UI compilada a Nginx
COPY --from=frontend-builder /frontend/.next /usr/share/nginx/html
COPY --from=frontend-builder /frontend/public /usr/share/nginx/html

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia la API compilada
COPY --from=backend-builder /backend/dist /app/backend/dist
COPY --from=backend-builder /backend/node_modules /app/backend/node_modules

# Exponer el puerto 80
EXPOSE 80

# Al iniciar, arranca Nginx y luego la API
CMD ["sh", "-c", "nginx && node /app/backend/dist/main.js"]
