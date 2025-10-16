"use client"

import { useEffect } from "react"
import GameBoard from "@/components/game-board"
import GameControls from "@/components/game-controls"
import GameStats from "@/components/game-stats"
import GameOverModal from "@/components/game-over-modal"
import { useGameState } from "@/hooks/use-game-state"

export default function Home() {
  const {
    board,
    score,
    bestScore,
    gameOver,
    won,
    canMove,
    initializeGame,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    resetGame,
  } = useGameState()

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver && e.key !== "r" && e.key !== "R") return

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          moveUp()
          break
        case "ArrowDown":
          e.preventDefault()
          moveDown()
          break
        case "ArrowLeft":
          e.preventDefault()
          moveLeft()
          break
        case "ArrowRight":
          e.preventDefault()
          moveRight()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [moveUp, moveDown, moveLeft, moveRight, gameOver])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">2048</h1>
          <p className="text-slate-400">Combine tiles to reach 2048</p>
        </div>

        <GameStats score={score} bestScore={bestScore} />

        <GameBoard board={board} />

        <GameControls
          onUp={moveUp}
          onDown={moveDown}
          onLeft={moveLeft}
          onRight={moveRight}
          onReset={resetGame}
          disabled={gameOver && !won}
        />

        {gameOver && <GameOverModal won={won} score={score} onReset={resetGame} />}
      </div>
    </main>
  )
}
