"use client"

interface GameControlsProps {
  onUp: () => void
  onDown: () => void
  onLeft: () => void
  onRight: () => void
  onReset: () => void
  disabled?: boolean
}

export default function GameControls({ onUp, onDown, onLeft, onRight, onReset, disabled = false }: GameControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onUp}
          disabled={disabled}
          className="p-3 bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors text-xl font-bold"
          aria-label="Move up"
        >
          ↑
        </button>
        <div className="flex gap-2">
          <button
            onClick={onLeft}
            disabled={disabled}
            className="p-3 bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors text-xl font-bold"
            aria-label="Move left"
          >
            ←
          </button>
          <button
            onClick={onDown}
            disabled={disabled}
            className="p-3 bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors text-xl font-bold"
            aria-label="Move down"
          >
            ↓
          </button>
          <button
            onClick={onRight}
            disabled={disabled}
            className="p-3 bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors text-xl font-bold"
            aria-label="Move right"
          >
            →
          </button>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
      >
        New Game
      </button>

      <p className="text-center text-slate-400 text-sm">Use arrow keys or buttons to move</p>
    </div>
  )
}
