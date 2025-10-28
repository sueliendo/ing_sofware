# Modern Node.js Portfolio Landing Page

This project is a clean, modern, and responsive portfolio landing page built with Node.js and Express. It is designed to be easily containerized with Docker for simple deployment.

## Features

-   **Modern Design**: A clean and elegant single-page layout.
-   **Responsive**: Looks great on all devices, from mobile phones to desktops.
-   **Node.js/Express Backend**: A lightweight server to serve the static assets.
-   **Dockerized**: Comes with a `Dockerfile` for easy containerization and deployment.
-   **Optimized**: Uses a multi-stage Docker build for a small and secure production image.

## Project Structure

```
/portfolio-landing-page
|-- public/            # All front-end assets (HTML, CSS, JS)
|   |-- css/style.css
|   |-- js/script.js
|   `-- index.html
|-- .dockerignore      # Specifies files to ignore in Docker build
|-- Dockerfile         # Instructions for building the Docker image
|-- package.json       # Project metadata and dependencies
|-- README.md          # This file
`-- server.js          # The Express server
```

---

## Technical Process & Commands

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [Docker](https://www.docker.com/get-started)

### 1. Local Development Setup

Follow these steps to run the application on your local machine.

**Step 1: Clone the repository**
```bash
git clone <your-repository-url>
cd portfolio-landing-page
```

**Step 2: Install dependencies**
This command reads the `package.json` file and installs the required `express` package.
```bash
npm install
```

**Step 3: Run the application**
This command executes the `start` script defined in `package.json`, which runs the Node.js server.
```bash
npm start
```

Your portfolio will be available at **http://localhost:3000**.

---

### 2. Running with Docker

Using Docker allows you to run the application in a container, ensuring a consistent environment.

**Step 1: Build the Docker image**
This command reads the `Dockerfile` and builds a Docker image named `portfolio-app`. The `-t` flag is for "tagging" the image with a name.
```bash
docker build -t portfolio-app .
```

**Step 2: Run the Docker container**
This command runs a container from the `portfolio-app` image.
-   `-d`: Runs the container in detached mode (in the background).
-   `-p 8080:3000`: Maps port 8080 on your host machine to port 3000 inside the container.
-   `--name my-portfolio`: Assigns a memorable name to the container.

```bash
docker run -d -p 8080:3000 --name my-portfolio portfolio-app
```

Your portfolio is now running in a Docker container and is accessible at **http://localhost:8080**.

### Docker Commands Cheatsheet

-   **List running containers:**
    ```bash
    docker ps
    ```
-   **Stop the container:**
    ```bash
    docker stop my-portfolio
    ```
-   **Start the container again:**
    ```bash
    docker start my-portfolio
    ```
-   **View container logs:**
    ```bash
    docker logs my-portfolio
    ```
-   **Remove the container (must be stopped first):**
    ```bash
    docker rm my-portfolio
    ```
-   **Remove the Docker image:**
    ```bash
    docker rmi portfolio-app
    ```
