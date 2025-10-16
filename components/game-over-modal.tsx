"use client"

interface GameOverModalProps {
  won: boolean
  score: number
  onReset: () => void
}

export default function GameOverModal({ won, score, onReset }: GameOverModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg p-8 text-center max-w-sm w-full shadow-2xl">
        <h2 className={`text-4xl font-bold mb-4 ${won ? "text-emerald-400" : "text-red-400"}`}>
          {won ? "You Won!" : "Game Over"}
        </h2>
        <p className="text-slate-300 mb-2">Final Score</p>
        <p className="text-5xl font-bold text-white mb-8">{score}</p>
        <button
          onClick={onReset}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
