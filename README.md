## Overview &nbsp; 🔎

**Tâche-Time** is a full-stack scheduling and productivity application designed specifically for students. Its primary purpose is to help users manage their time by allowing them to:

- Define weekly availability
- Create and schedule tasks
- Visualize tasks on an interactive calendar

<br>

## Tech Stack & Requirements &nbsp; 🧰

### Stack 📚

_Frontend_

- React
- TypeScript
- Vite
- MUI (MaterialUI)

_Backend_

- Node.js (Express.js)
- JavaScript

_Testing_

- Jest

### Requirements &nbsp; 📝

- **Git**
- **Unix-based shell** - Linux, MacOS, or WSL for Windows
- **Docker Desktop** - Installed and running

> **💡 Note:** If you wish to run the application locally and not via the container, you will also need **Node.js** and **npm** installed on your machine.

<br>

## Setup & Run &nbsp; 🚀

Clone the repository:

```bash
git clone https://github.com/dev-pigeon/tache-time.git
```

### With Docker

```bash
docker-compose up --build
```

Click [here](http://localhost:80/) or open your browser of choice and navigate to `http://localhost:80/`

### Without Docker

Give permissions to the setup script:

```bash
chmod +x setup.sh
```

From the root directory, run:

```bash
./setup.sh # Installs all dependencies
npm start # Starts both the frontend and backend servers
```

Click [here](http://localhost:5173/) or open your browser of choice and navigate to `http://localhost:5173/`

> ⚠️ **Caution** To run the application without a container, you must have **Node.js** and **npm** installed on your machine.

<br>

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for details.
