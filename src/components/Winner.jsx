import { Square } from './Square'
import { ResetGame } from './ResetGame';

export const Winner = ({ winner, resetGame }) => {

  if (winner === null) return null;

  const resultText = winner ? 'Gano: ' : 'Empate'
  const result = winner ? <Square>{winner}</Square> : null

  return (
    <section className="winner">
      <div className="text">
        <h2>{resultText}</h2>

        <header className="win">
          {result}
        </header>

        <footer>
          <ResetGame resetGame={resetGame}>Empezar de nuevo</ResetGame>
        </footer>
      </div>
    </section>
  )
}