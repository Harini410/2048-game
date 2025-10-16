"use client"

interface GameStatsProps {
  score: number
  bestScore: number
}

export default function GameStats({ score, bestScore }: GameStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-slate-700 rounded-lg p-4 text-center">
        <p className="text-slate-400 text-sm mb-1">Score</p>
        <p className="text-3xl font-bold text-white">{score}</p>
      </div>
      <div className="bg-slate-700 rounded-lg p-4 text-center">
        <p className="text-slate-400 text-sm mb-1">Best</p>
        <p className="text-3xl font-bold text-emerald-400">{bestScore}</p>
      </div>
    </div>
  )
}
