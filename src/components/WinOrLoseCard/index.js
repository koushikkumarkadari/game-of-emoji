import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {point, onPlayAgain} = this.props
    return (
      <div className="win-or-lose-card-container">
        <div className="win-or-lose-card">
          <div className="win-or-lose-paragraph">
            {point === 12 ? (
              <div>
                <h1 className="win-status">You Won</h1>
                <p className="best-score-status">Best Score</p>
              </div>
            ) : (
              <div>
                <h1 className="win-status">You Lose</h1>
                <p className="best-score-status">Score</p>
              </div>
            )}
            <p className="point">{`${point}/12`}</p>
            <button
              className="play-again-button"
              type="button"
              onClick={onPlayAgain}
            >
              play again
            </button>
          </div>
          <img
            className="win-or-lose-img"
            src={
              point === 12
                ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
            }
            alt="win or lose"
          />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
