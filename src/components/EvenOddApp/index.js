import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {value: 0}

  rnd = (min, max) => {
    const min1 = Math.ceil(min)
    const max1 = Math.floor(max)
    return Math.floor(Math.random() * (max1 - min1) + min)
  }

  update = () => {
    this.setState(prevState => ({
      value: prevState.value + this.rnd(1, 100),
    }))
  }

  render() {
    const {value} = this.state

    return (
      <div className="bg-container">
        <div className="box">
          <h1>Count {value}</h1>
          <p>Count is {value % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button type="button" onClick={this.update}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default Counter
