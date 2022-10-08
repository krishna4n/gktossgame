import {Component} from 'react'
import './index.css'

class Toss extends Component {
  state = {heads: 0, tails: 0}

  coinUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

  onToss = () => {
    const toss = Math.floor(Math.random() * 2)

    if (toss === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.coinUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.coinUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
  }

  render() {
    const {heads, tails} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={this.coinUrl} alt="toss result" className="toss-coin" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="result">
            <p className="result-desc">Total: {heads + tails}</p>
            <p className="result-desc">Heads: {heads}</p>
            <p className="result-desc">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Toss
