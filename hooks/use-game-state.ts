"use client"

import { useState, useCallback } from "react"
import { initializeBoard, addNewTile, canMoveInDirection, moveBoard, isBoardFull, hasWon } from "@/lib/game-logic"

export function useGameState() {
  const [board, setBoard] = useState<(number | null)[][]>([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)

  const initializeGame = useCallback(() => {
    const newBoard = initializeBoard(4)
    setBoard(newBoard)
    setScore(0)
    setGameOver(false)
    setWon(false)
  }, [])

  const resetGame = useCallback(() => {
    initializeGame()
  }, [initializeGame])

  const canMove = useCallback((currentBoard: (number | null)[][]): boolean => {
    return (
      canMoveInDirection(currentBoard, "up") ||
      canMoveInDirection(currentBoard, "down") ||
      canMoveInDirection(currentBoard, "left") ||
      canMoveInDirection(currentBoard, "right")
    )
  }, [])

  const performMove = useCallback(
    (direction: "up" | "down" | "left" | "right") => {
      if (gameOver || won) return

      setBoard((currentBoard) => {
        if (!canMoveInDirection(currentBoard, direction)) {
          return currentBoard
        }

        const { newBoard, scoreGain } = moveBoard(currentBoard, direction)
        const boardWithNewTile = addNewTile(newBoard)

        setScore((prev) => {
          const newScore = prev + scoreGain
          setBestScore((best) => Math.max(best, newScore))
          return newScore
        })

        // Check for win condition
        if (hasWon(boardWithNewTile)) {
          setWon(true)
        }

        // Check for game over
        if (isBoardFull(boardWithNewTile) && !canMove(boardWithNewTile)) {
          setGameOver(true)
        }

        return boardWithNewTile
      })
    },
    [gameOver, won, canMove],
  )

  return {
    board,
    score,
    bestScore,
    gameOver,
    won,
    canMove,
    initializeGame,
    moveUp: () => performMove("up"),
    moveDown: () => performMove("down"),
    moveLeft: () => performMove("left"),
    moveRight: () => performMove("right"),
    resetGame,
  }
}
