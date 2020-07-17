import Score from '../components/Score'
import Title from '../components/Title'
import Pause from '../components/Pause'
import GameOver from '../components/GameOver'
import playerImage from '../../assets/sprites/ship_default5.png'

let score = 0
let firstStart = true

export default class MainScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MainScene'
    })
  }
  
  preload () {
    if (firstStart) {
      firstStart = false
      this.titleMenu = this.add.reactDom(Title, { 
        hide: true,
        onStartClick: () => {
          console.log('main scene')
          this.titleMenu.setState({ hide: true })
        }
      })

      this.pauseMenu = this.add.reactDom(Pause, {
        hide: true,
        onResumeClick: () => {
          this.pauseMenu.setState({ hide: true })
          this.scene.resume()
        },
        onRestartClick: () => {
          this.pauseMenu.setState({ hide: true })
          this.scene.start('MainScene')
        }
      })

      this.gameOverMenu = this.add.reactDom(GameOver, {
        hide: true,
        onRestartClick: () => {
          this.gameOverMenu.setState({ hide: true })
          this.scene.start('MainScene')
        }
      })

      this.load.image('player', playerImage)
    }

  }

  create () {
    this.input.keyboard.on('keydown-ESC', () => {
      console.log('escape');
      this.pauseMenu.setState({ hide: false })
    })

    this.player = this.physics.add.sprite(600, 300, 'player')
    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)
    this.player.setFrictionX(4)
    this.player.setScale(5)
    this.keyboard = this.input.keyboard.addKeys('W, A, S, D')


  }

  update (time, delta) {
    const maxVelocity = 100 
    if(!this.velocityX) this.velocityX = 0
    console.log(this.velocityX);
    if (this.keyboard.D.isDown === true) {
      if(maxVelocity > this.velocityX) {
        this.velocityX += 10
      }
    }
    // if(this.keyboard.D.isUp === true) {
    //   this.
    // }
    if (this.keyboard.A.isDown === true) {
      this.velocityX -= 10
    }
    if (this.keyboard.W.isDown === true) {
      this.player.setVelocityY(-64)
    }
    if (this.keyboard.S.isDown === true) {
      this.player.setVelocityY(64)
    }
    this.player.setVelocityX(this.velocityX)

  }

}