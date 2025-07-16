## 📘 Introduction

**Tâche-Time** is a full-stack scheduling and productivity application designed specifically for students. Its primary purpose is to help users manage their time by allowing them to:

- Define weekly availability
- Create and schedule tasks
- Visualize tasks on an interactive calendar

<br>

## 🧰 Tech Stack

**Frontend**

- React
- TypeScript
- Vite
- MUI (MaterialUI)

**Backend**

- Node.js (Express.js)
- JavaScript

**Testing**

- Jest

<br>

## ✅ Prerequisites

- Node.js
- npm
- Git
- A Unix-like shell (macOS, Linux, or WSL for Windows users)

<br>

## ⛮ Local Setup Instructions

Follow these steps to run Tâche-Time locally:

> 💡 **Note:** These steps require a Unix-like environment. On Windows, use WSL or Git Bash for compatibility.

1. Clone the repository.
2. Run `chmod +x setup.sh` to make the setup script executable.
3. From the root directory, run:
   ```bash
   ./setup.sh # Installs all dependencies
   ./start.sh # Starts both the frontend and backend servers
   ```
4. In your browser, navigate to `http://localhost:5173/`.

⚠️ **Caution:** For steps 2&3 to function properly, the shell script must have executable permissions on your local machine. To allow these scripts to execute, please run the command: <br> `chmod +x file_name`.

<br>

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for details.
