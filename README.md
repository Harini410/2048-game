# 🎮 2048 Game – Full Stack Developer Assignment

A fully functional implementation of the popular **2048 Game**, built with **Next.js**, **React**, and **TypeScript**.  
Developed as part of the **Full Stack Software Developer Assignment** for **Exponent Energy**.

---

## 🧩 Objective
The goal of the game is simple: **combine tiles with the same number to reach 2048!**  
Each move slides all tiles in one direction (up, down, left, or right). When two tiles with the same number collide, they merge into one with their sum.

---

## 🚀 Live Demo
👉 **Play the Game:** [https://v0-2048-game-implementation.vercel.app/](https://v0-2048-game-implementation.vercel.app/)  
👉 **GitHub Repository:** [https://github.com/Harini410/2048-game](https://github.com/Harini410/2048-game)

---

## 🖥️ Features
-  **4x4 grid** with random tile generation  
-  **Functional game logic** for moves, merges, and random tile placement  
-  **Dynamic score tracking** and high score display  
-  **Keyboard & on-screen controls**  
-  **Game Over & Restart options**  
-  **Responsive GUI** for smooth user experience  
-  **Modular & reusable components** (React + TypeScript)  
-  **Clean, readable, and maintainable code**

---

## 🧠 Tech Stack
| Layer | Technology Used |
|--------|----------------|
| **Frontend** | Next.js (React + TypeScript) |
| **Styling** | Tailwind CSS |
| **State Management** | React Hooks |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## ⚙️ Local Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Steps
```bash
# Clone the repository
git clone https://github.com/Harini410/2048-game.git

# Navigate into the folder
cd 2048-game

# Install dependencies
npm install

# Run the app
npm run dev
```

Now, open your browser and visit **http://localhost:3000** 🎯

---

## 🕹️ Gameplay Instructions
1. Use **Arrow Keys** or on-screen buttons to move tiles.  
2. Tiles with the same number merge into one when they collide.  
3. After every move, a new tile (2 or 4) appears in a random empty cell.  
4. The **score** increases with every successful merge.  
5. The **game ends** when no moves are left or the player reaches 2048.  
6. Click **Restart** to play again.

---

## 🧩 Functional Design & Logic
- The **core logic** (merging, movement, and tile spawning) resides in `/lib/game-logic.ts`.  
- **State management** is handled via a custom React hook `use-game-state.ts`.  
- GUI updates dynamically using React’s state and effect hooks.  
- The application follows **functional programming principles** with immutable state updates.  
- The modular architecture ensures code reusability and separation of concerns.

---

## 📦 Folder Structure
```
2048-game/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── game-board.tsx
│   ├── game-controls.tsx
│   ├── game-over-modal.tsx
│   ├── game-stats.tsx
│   └── tile.tsx
├── hooks/
│   └── use-game-state.ts
├── lib/
│   ├── game-logic.ts
│   └── utils.ts
├── public/
├── styles/
│   └── globals.css
└── package.json
```

---

## 🧾 Assignment Requirements Checklist
✅ Default board size 4x4  
✅ Functional merge & move logic  
✅ GUI with live updates  
✅ Dynamic scoring  
✅ Restart feature  
✅ Configurable board size (extendable)  
✅ Modular, readable, and maintainable code  
✅ Public GitHub repository  
✅ Deployed live app link  

---

## 🧑‍💻 Author
**Harini L**  
M.Tech in CSE | Software Developer  
📧 [lakshmananharini@gmail.com](mailto:lakshmananharini@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/harini-lakshmanan-04)

---


