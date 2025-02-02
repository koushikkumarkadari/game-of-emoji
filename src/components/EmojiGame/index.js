/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {
    displayEmojis: [],
    isGameOver: false,
    selectedImages: [],
    point: 0,
    topScore: 0,
  }

  componentDidMount() {
    this.shuffledEmojisList()
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    this.setState({displayEmojis: emojisList.sort(() => Math.random() - 0.5)})
  }

  check = () => {
    const {point, topScore} = this.state
    if (point > topScore) {
      this.setState({topScore: point})
    }
    if (point === 12) {
      this.setState({isGameOver: true})
    }
  }

  addSelectedImages = id => {
    const {selectedImages, displayEmojis} = this.state

    // Check if the image is already selected
    const isPresent = selectedImages.some(each => each.id === id)

    if (!isPresent) {
      // Find the image to add
      const selectedImage = displayEmojis.find(each => each.id === id)

      if (selectedImage) {
        this.setState(
          prevState => ({
            selectedImages: [...prevState.selectedImages, selectedImage],
            point: prevState.point + 1,
          }),
          this.check, // Callback function (if needed)
        )
      }
    } else {
      this.setState({isGameOver: true})
    }
  }

  onPlayAgain = () => {
    this.setState({isGameOver: false, point: 0, selectedImages: []})
  }

  render() {
    const {displayEmojis, isGameOver, point, topScore} = this.state
    return (
      <div>
        <NavBar isGameOver={isGameOver} topScore={topScore} point={point} />
        <hr className="hr" />
        {!isGameOver && (
          <ul className="emoji-game-interface">
            {displayEmojis.map(each => (
              <EmojiCard
                addSelectedImages={this.addSelectedImages}
                shuffledEmojisList={this.shuffledEmojisList}
                key={each.id}
                each={each}
              />
            ))}
          </ul>
        )}
        {isGameOver && (
          <WinOrLoseCard onPlayAgain={this.onPlayAgain} point={point} />
        )}
      </div>
    )
  }
}

export default EmojiGame
