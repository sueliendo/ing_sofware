Este proyecto es una mini app de juego tictactoe desarrollada con JS para probar docker


## Project Structure

/portfolio-landing-page
|-- public/            # Frontend assets (HTML, CSS, JS)
|   |-- css/style.css
|   |-- js/script.js
|   `-- index.html
|-- .dockerignore     
|-- Dockerfile         # Instrucciones de building para el Docker container
|-- package.json      
|-- README.md          
`-- server.js          # Express server
```

---

## Comandos y proceso tecnico

### Prerequisitos

-   [Node.js](https://nodejs.org/)
-   [Docker](https://www.docker.com/get-started)

### 1. Configuración de desarrollo local

Pasos para ejecutar la aplicación localmente:

**Step 1: Clonar el repositorio**
```bash
git clone https://github.com/sueliendo/ing_sofware.git
cd ing_sofware
```

**2: Instalar dependencias**
Este comando lee el archivo`package.json` e instala el paquete `express` necesario.
```bash
npm install
```

**Step 3: Correr la aplicacion**
Este comando ejecuta el sript `start` definido en `package.json`, que corre node.js 
```bash
npm start
```

La app estara disponible en el puerto 3000 por defecto **http://localhost:3000**.

---

### 2.  Correr con Docker

El uso de Docker permite ejecutar la aplicación en un contenedor, garantizando un entorno consistente.

**Step 1: Construir la imagen de docker / Build **
This command reads the `Dockerfile` and builds a Docker image named `mini-app`. La bandera `-t` sirve para "etiquetar" la imagen con un nombre.
```bash
docker build -t entrega-app .
```

**3. Correr el container de docker**
Este comando corre el container de la imagen `entrega-app`.
-   `-d`: Ejecuta el contenedor en modo separado (en segundo plano).
-   `-p 8080:3000`: Asigna el puerto 8080 de su máquina host al puerto 3000 dentro del contenedor.
-   `--name mini-app`: Asigna un nombre al contenedor.

```bash
docker run -d -p 8080:3000 --name mini-app entrega-app
```

La app ahora se ejecuta en un contenedor Docker y es accesible en **http://localhost:8080**.

### Lista de comandos Docker 

-   **Listar containers corriendo:**
    ```bash
    docker ps
    ```
-   **Detener container:**
    ```bash
    docker stop mini-app
    ```
-   **Reiniciar el container nuevamente :**
    ```bash
    docker start mini-app
    ```
-   **Ver logs del container:**
    ```bash
    docker logs mini-app
    ```
-   **Remover el container:**
    ```bash
    docker rm mini-app
    ```
-   **Remover la imagen de Docker:**
    ```bash
    docker rmi mini-app
    ```
