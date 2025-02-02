import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {each, shuffledEmojisList, addSelectedImages} = this.props
    const {emojiUrl, emojiName} = each
    const onSelect = () => {
      const {id} = each
      shuffledEmojisList()
      addSelectedImages(id)
    }

    return (
      <li className="emoji-card">
        <button className="emoji-button" type="button" onClick={onSelect}>
          <img className="emoji-image" src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
