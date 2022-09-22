import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    console.log('triggred')
    this.setState(prevState => {
      const obj =
        prevState.speed < 200
          ? {speed: prevState.speed + 10}
          : {speed: prevState.speed}
      return obj
    })
  }

  brake = () => {
    this.setState(prevState => {
      const obj =
        prevState.speed > 0
          ? {speed: prevState.speed - 10}
          : {speed: prevState.speed}

      return obj
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="speed-detail">Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="btn accelerate"
              onClick={this.accelerate}
              type="button"
            >
              Accelerate
            </button>
            <button className="btn brake" onClick={this.brake} type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
