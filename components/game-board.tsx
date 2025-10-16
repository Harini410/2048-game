"use client"

import Tile from "./tile"

interface GameBoardProps {
  board: (number | null)[][]
}

export default function GameBoard({ board }: GameBoardProps) {
  return (
    <div className="bg-slate-700 rounded-lg p-4 mb-6 shadow-2xl">
      <div className="grid grid-cols-4 gap-3">
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <Tile key={`${rowIndex}-${colIndex}`} value={value} position={`${rowIndex}-${colIndex}`} />
          )),
        )}
      </div>
    </div>
  )
}
