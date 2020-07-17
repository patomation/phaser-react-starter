import React, { useState } from 'react'
import ReactDom from 'react-dom'
import phaserReact from 'phaser3-react'
import 'phaser'
import MainScene from './scenes/MainScene'

// if (module && module.hot) {
//   module.hot.accept()
// }
const game = new Phaser.Game({
  parent: 'root',
  dom: { createContainer: true },
  backgroundColor: '#111',
  plugins: {
    global: [
      {
        key: 'phaser-react',
        plugin: phaserReact,
        start: true
      }
    ]
  },
  // width: 800,
  // height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser',
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 50 },
      debug: true
    }
  },
  scene: [
    MainScene
  ],
  pixelArt: true
})
