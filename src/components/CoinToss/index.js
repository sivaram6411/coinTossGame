// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isCond: 0}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({isCond: tossResult})

    if (tossResult === 0) {
      this.setState(prevHeads => ({heads: prevHeads.heads + 1}))
    } else {
      this.setState(prevTails => ({tails: prevTails.tails + 1}))
    }
  }

  render() {
    const {heads, tails, isCond} = this.state
    const HeadsOrTails =
      isCond === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="content">Heads (or) Tails</p>
          <img src={HeadsOrTails} alt="toss result" className="toss-image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{heads + tails}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
