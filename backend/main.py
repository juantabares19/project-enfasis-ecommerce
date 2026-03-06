from fastapi import FastAPI

# ESTA ES LA LÍNEA QUE TE FALTA O TIENE OTRO NOMBRE
app = FastAPI() 

@app.get("/")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    import uvicorn
    # Aquí "main:app" busca el archivo "main" y la variable "app"
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)