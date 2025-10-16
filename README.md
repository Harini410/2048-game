# 2048 Game

A modern implementation of the classic 2048 puzzle game built with Next.js, React, and Tailwind CSS.

## Features

- **Classic 2048 Gameplay**: Combine tiles to reach 2048
- **Smooth Animations**: Tiles animate smoothly when moving and merging
- **Score Tracking**: Keep track of your current score and best score
- **Keyboard Controls**: Use arrow keys to move tiles
- **Touch-Friendly**: Button controls for mobile devices
- **Game State Management**: Automatic game over detection and win condition
- **Responsive Design**: Works seamlessly on desktop and mobile

## How to Play

1. Use arrow keys or on-screen buttons to move tiles
2. When two tiles with the same number touch, they merge into one
3. Each merge adds the value of the new tile to your score
4. Try to reach the 2048 tile to win
5. The game ends when no more moves are possible

## Controls

- **Arrow Keys**: Move tiles up, down, left, or right
- **Button Controls**: Click directional buttons for mouse/touch input
- **New Game**: Click the "New Game" button to restart

## Tile Colors

- **2-4**: Light amber tones
- **8-32**: Orange tones
- **64-256**: Red and yellow tones
- **512-1024**: Yellow and purple tones
- **2048**: Emerald (winning tile)

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (useState, useCallback)
- **Game Logic**: Pure functional programming approach

## Game Logic

The game implements core 2048 mechanics:
- Board initialization with two random tiles
- Tile movement and compression
- Tile merging with score calculation
- New tile generation after each move
- Win condition (reaching 2048)
- Game over detection (no valid moves)

## Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
\`\`\`

## Deployment

This game is ready to deploy on Vercel:

\`\`\`bash
# Push to GitHub
git push origin main

# Deploy on Vercel
vercel
\`\`\`

## License

MIT License - Feel free to use this project for personal or commercial purposes.
