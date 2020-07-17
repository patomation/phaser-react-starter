import Score from '../components/Score'


let score = 0

export default class MainScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'MainScene'
    })
  }

  create () {
    this.scoreText = this.add.reactDom(Score, { score })

    this.input.keyboard.on('keyup-A', () => {
      score += 10
      this.scoreText.setState({ score })
    })
  }

}