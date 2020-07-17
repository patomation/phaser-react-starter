import React, { useState } from 'react'
import ReactDom from 'react-dom'
import phaserReact from 'phaser3-react'
import 'phaser'
import MainScene from './scenes/MainScene'

function App () {
  const [message, setMessage] = useState('Hello World')

  function handleClick () {
    setMessage('Good Job!!!')
  }

  return (
    <div>
      {{ message }}
      test
      <button onClick={handleClick}>
        Click Here for Validation
        </button>
    </div>
  )
}


const config = {
  parent: 'react',
  dom: { createContainer: true },
  plugins: {
    global: [
      {
        key: 'phaser-react',
        plugin: phaserReact,
        start: true
      }
    ]
  },
  scene: [
    MainScene
  ]
}

const game = new Phaser.Game(config)
// ReactDom.render(
//   <App/>,
//   document.getElementById('react')
// )