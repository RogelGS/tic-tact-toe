import { WINNER_COMBOS } from './Enum'

export const checkWinner = (boardToCheck) => {
    
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    const isWin = boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]

    if (isWin) return boardToCheck[a]
  }

  return null
}

export const checkEndGame = (currentBoard) => {
  return currentBoard.every(square => square !== null)
}