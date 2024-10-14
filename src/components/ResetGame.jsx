export const ResetGame = ({ resetGame, children }) => {
  return (
    <button onClick={resetGame}>{ children}</button>
  )
}