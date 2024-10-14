export const Square = ({ children, isSelected, updateBoard, index }) => {
  const turn = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard({ index })
  }

  return (
    <div onClick={handleClick} className={turn}>
      {children}
    </div>
  )
}

