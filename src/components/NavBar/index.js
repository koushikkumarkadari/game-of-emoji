import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {point, topScore, isGameOver} = this.props
    return (
      <div className="navbar-container">
        <div className="emoji-logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h2 className="navbar-heading">Emoji Game</h2>
        </div>
        {!isGameOver && (
          <div className="score-container">
            <p className="score">{`Score: ${point}`}</p>
            <p className="score">{`Top Score: ${topScore}`}</p>
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
