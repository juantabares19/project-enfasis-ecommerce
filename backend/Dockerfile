FROM python:3.9-buster

WORKDIR /app

# Copiamos primero los requerimientos para aprovechar la caché de Docker
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Metadata para conectar el contenedor con tu repo de GitHub
LABEL org.opencontainers.image.source="https://github.com/juantabares19/project-enfasis-ecommerce"

EXPOSE 8000

# El comando usando uvicorn es obligatorio para producción/Render
# ${PORT:-8000} permite que Render asigne su propio puerto dinámico
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]