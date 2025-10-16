"use client"

interface TileProps {
  value: number | null
  position: string
}

const getTileColor = (value: number | null): string => {
  if (!value) return "bg-slate-600"

  const colors: { [key: number]: string } = {
    2: "bg-amber-100 text-slate-900",
    4: "bg-amber-200 text-slate-900",
    8: "bg-orange-300 text-white",
    16: "bg-orange-400 text-white",
    32: "bg-orange-500 text-white",
    64: "bg-red-500 text-white",
    128: "bg-yellow-400 text-slate-900 text-sm",
    256: "bg-yellow-500 text-slate-900 text-sm",
    512: "bg-yellow-600 text-white text-sm",
    1024: "bg-purple-600 text-white text-xs",
    2048: "bg-emerald-500 text-white text-xs font-bold",
  }

  return colors[value] || "bg-purple-700 text-white text-xs"
}

export default function Tile({ value, position }: TileProps) {
  return (
    <div
      className={`
        aspect-square rounded-lg font-bold text-2xl
        flex items-center justify-center transition-all duration-150
        ${getTileColor(value)}
        ${value ? "shadow-lg" : "shadow-sm"}
        ${value ? "animate-in zoom-in-50 duration-150" : ""}
      `}
    >
      {value}
    </div>
  )
}
