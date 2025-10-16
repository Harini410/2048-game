// Core game logic following functional programming principles

export function initializeBoard(size: number): (number | null)[][] {
  const board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null))

  // Add two initial tiles
  const boardWithTile1 = addNewTile(board)
  return addNewTile(boardWithTile1)
}

export function addNewTile(board: (number | null)[][]): (number | null)[][] {
  const emptyPositions = getEmptyPositions(board)

  if (emptyPositions.length === 0) {
    return board
  }

  const randomIndex = Math.floor(Math.random() * emptyPositions.length)
  const [row, col] = emptyPositions[randomIndex]
  const newValue = Math.random() < 0.9 ? 2 : 4

  return board.map((r, i) => r.map((cell, j) => (i === row && j === col ? newValue : cell)))
}

export function getEmptyPositions(board: (number | null)[][]): [number, number][] {
  const positions: [number, number][] = []

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === null) {
        positions.push([i, j])
      }
    })
  })

  return positions
}

export function moveBoard(
  board: (number | null)[][],
  direction: "up" | "down" | "left" | "right",
): { newBoard: (number | null)[][]; scoreGain: number } {
  const newBoard = board.map((row) => [...row])
  let scoreGain = 0

  if (direction === "left") {
    newBoard.forEach((row, i) => {
      const { newRow, score } = compressAndMerge(row)
      newBoard[i] = newRow
      scoreGain += score
    })
  } else if (direction === "right") {
    newBoard.forEach((row, i) => {
      const { newRow, score } = compressAndMerge(row.reverse())
      newBoard[i] = newRow.reverse()
      scoreGain += score
    })
  } else if (direction === "up") {
    for (let col = 0; col < newBoard[0].length; col++) {
      const column = newBoard.map((row) => row[col])
      const { newRow, score } = compressAndMerge(column)
      newRow.forEach((val, row) => {
        newBoard[row][col] = val
      })
      scoreGain += score
    }
  } else if (direction === "down") {
    for (let col = 0; col < newBoard[0].length; col++) {
      const column = newBoard.map((row) => row[col]).reverse()
      const { newRow, score } = compressAndMerge(column)
      newRow.reverse().forEach((val, row) => {
        newBoard[newBoard.length - 1 - row][col] = val
      })
      scoreGain += score
    }
  }

  return { newBoard, scoreGain }
}

export function compressAndMerge(line: (number | null)[]): { newRow: (number | null)[]; score: number } {
  // Remove nulls
  const compressed = line.filter((val) => val !== null) as number[]

  // Merge adjacent equal values
  let score = 0
  const merged: number[] = []

  for (let i = 0; i < compressed.length; i++) {
    if (i + 1 < compressed.length && compressed[i] === compressed[i + 1]) {
      const mergedValue = compressed[i] * 2
      merged.push(mergedValue)
      score += mergedValue
      i++ // Skip next element as it's merged
    } else {
      merged.push(compressed[i])
    }
  }

  // Pad with nulls to original length
  const result = [...merged, ...Array(line.length - merged.length).fill(null)]

  return { newRow: result, score }
}

export function canMoveInDirection(board: (number | null)[][], direction: "up" | "down" | "left" | "right"): boolean {
  const { newBoard } = moveBoard(board, direction)
  return !boardsEqual(board, newBoard)
}

export function boardsEqual(board1: (number | null)[][], board2: (number | null)[][]): boolean {
  return board1.every((row, i) => row.every((cell, j) => cell === board2[i][j]))
}

export function isBoardFull(board: (number | null)[][]): boolean {
  return board.every((row) => row.every((cell) => cell !== null))
}

export function hasWon(board: (number | null)[][]): boolean {
  return board.some((row) => row.some((cell) => cell === 2048))
}
