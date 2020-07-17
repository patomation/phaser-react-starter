import React, { Component } from 'react'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      message: 'Hello World'
    }
  }
  
  render () {
    const handleClick = () => {
      this.setState({ message: 'New Message'})
    }

    return (
      <div>
        { this.state.message }
        <button onClick={handleClick}>Click Me</button>
      </div>
    )
  }
}