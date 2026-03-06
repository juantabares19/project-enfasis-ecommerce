FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Metadata para GHCR
LABEL org.opencontainers.image.source="https://github.com/juantabares19/project-enfasis-ecommerce"

# Para desarrollo en Docker local
ENV WATCHPACK_POLLING=true

# Comando para iniciar React
CMD ["npm", "start"]