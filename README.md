# React App with Docker

This is a simple TypeScript-based React app which is built and served using Docker and Nginx.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed [Node.js](https://nodejs.org/) (version 16 or newer)
* You have installed [Docker](https://www.docker.com/)
* You have a basic understanding of JavaScript/TypeScript and React

## Installing

1. Clone this repository:

    ```bash
    git clone https://github.com/your-github-username/react-docker-app.git
    cd react-docker-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Building

To build the React app locally, you can use:

```bash
npm run build
```

This will bundle the application using Webpack and output to the `dist` directory.

To build the Docker image:

```bash
docker build -t react-docker-app .
```

This will create a Docker image named `react-docker-app`.

## Running

After building the Docker image, you can run the app with:

```bash
docker run -p 8080:80 react-docker-app
```

You should now be able to see the application running at `http://localhost:8080` in your web browser.

