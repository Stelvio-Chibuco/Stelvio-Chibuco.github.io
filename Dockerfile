# Servidor de desenvolvimento do portfólio (Vite)
FROM node:22-alpine

WORKDIR /app

# Instala as dependências exactamente como no package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

COPY . /app

EXPOSE 3000

# --host permite aceder a partir de fora do contentor (http://localhost:3000)
CMD ["sh", "-c", "node fetch.js && npx vite --host"]
