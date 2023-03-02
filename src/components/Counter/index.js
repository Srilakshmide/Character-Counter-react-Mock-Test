import {Component} from 'react'
import {v4} from 'uuid'

import CharacterItem from '../CharacterItem'
import './index.css'

class Counter extends Component {
  state = {inputText: '', inputList: []}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onAddInput = event => {
    event.preventDefault()

    const {inputText} = this.state

    const newItem = {id: v4(), text: inputText}
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newItem],
      inputText: '',
    }))
  }

  render() {
    const {inputText, inputList} = this.state
    const listLength = inputList.length === 0

    return (
      <div className="app-container">
        <div className="count-container">
          <div className="heading-container">
            <h1 className="counter-heading">
              Count the characters like a <br />
              Boss...
            </h1>
          </div>
          {listLength ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul className="char-adding-container">
              {inputList.map(eachItem => (
                <CharacterItem
                  key={eachItem.id}
                  characterDetails={eachItem}
                  newList={eachItem.inputList}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="char-container">
          <h1 className="heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddInput}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInputText}
              value={inputText}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Counter

//   renderTextList = () => {
//     const {inputTextList} = this.state

//     return inputTextList.map(eachText => (
//       <CharacterItem key={eachText.id} textDetails={eachText} />
//     ))
//   }
