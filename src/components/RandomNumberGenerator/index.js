// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  generateBtn = () => {
    const randomVal = Math.ceil(Math.random() * 100)
    this.setState({count: randomVal})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="buttonEl" onClick={this.generateBtn}>
            Generate
          </button>
          <p className="countEl">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
