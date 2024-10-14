import { useState } from "react"
import { TURNS } from "./utils/Enum"
import { Winner } from './components/Winner'
import { Turn } from "./components/Turn"
import { Board } from "./components/Board"
import { checkEndGame, checkWinner } from './utils/Logic'
import { saveGame, loadGame, loadTurn, removeGame, saveResult, loadResult } from './utils/LocalStorage'
import { ResetGame } from "./components/ResetGame"
import confetti from "canvas-confetti"

function App() {

  const [board, setBoard] = useState(() => {
    const savedGame = loadGame()
    return savedGame ? savedGame : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const savedTurn = loadTurn()
    return savedTurn ? savedTurn : TURNS.X
  })
  
  const [winner, setWinner] = useState(() => {
    const savedResult = loadResult()
    
    return savedResult
  })

  const updateBoard = ({ index }) => {
    const newBoard = [...board]

    if (newBoard[index] || winner) return;

    newBoard[index] = turn
    setBoard(newBoard)

    const nextTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(nextTurn)

    saveGame(newBoard, nextTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      saveResult(newWinner)
    }

    const isEndGame = checkEndGame(newBoard)
    if (isEndGame) {
      setWinner(false)
      saveResult(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    removeGame()
  }

  return (
    <>
      <main className="board">
        <h1>tic tac toe</h1>

        <ResetGame resetGame={resetGame}>Reset del juego</ResetGame>
  
        <Board board={board} updateBoard={updateBoard}></Board>

        <Turn turn={turn}></Turn>

        <Winner resetGame={resetGame} winner={winner}></Winner>
      </main>
    </>
  )
}

export default App
