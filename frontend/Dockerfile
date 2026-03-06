FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
# Instalamos dependencias limpias
RUN npm install

COPY . .

EXPOSE 3000

# La variable WATCHPACK_POLLING ayuda a que Docker detecte cambios y no se cierre
ENV WATCHPACK_POLLING=true

# Forzamos el host y el puerto para evitar que Vite elija uno aleatorio
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]