import './index.css'

const CharacterItem = props => {
  const {characterDetails} = props
  const {text} = characterDetails

  return (
    <li>
      <p className="add-text">
        {text}
        <span>: {text.length}</span>
      </p>
    </li>
  )
}

export default CharacterItem
