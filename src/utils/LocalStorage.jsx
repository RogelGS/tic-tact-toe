export const saveGame = (board, turn) => {
  window.localStorage.setItem('board', JSON.stringify(board))

  window.localStorage.setItem('turn', turn)
}

export const loadGame = () => {
  const board = window.localStorage.getItem('board')
  return board ? JSON.parse(board) : null
}

export const loadTurn = () => {
  const turn = window.localStorage.getItem('turn')
  return turn ? turn : null
}

export const removeGame = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('result')
}

export const saveResult = (result) => {
  window.localStorage.setItem('result', JSON.stringify(result))
}

export const loadResult = () => {
  const result = window.localStorage.getItem('result')
  return result ? JSON.parse(result) : null
}