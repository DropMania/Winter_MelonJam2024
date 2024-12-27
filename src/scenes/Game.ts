import { Scene } from 'phaser'

const FOCRE = 100
export class Game extends Scene {
	minusPole: Phaser.GameObjects.Sprite
	plusPole: Phaser.GameObjects.Sprite
	keys: Phaser.Types.Input.Keyboard.CursorKeys
	ball: Phaser.Physics.Arcade.Sprite
	constructor() {
		super('Game')
	}

	preload() {}

	create() {
		this.ball = this.physics.add.sprite(64, 100, 'ball')
		this.minusPole = this.add.sprite(0, 0, 'minus').setOrigin(0, 0)
		this.plusPole = this.add.sprite(120, 0, 'plus').setOrigin(0, 0)
		this.keys = this.input.keyboard.createCursorKeys()
		this.physics.world.setBounds(0, 0, 128, 128)
		this.ball.setCollideWorldBounds(true)
		//this.physics.accelerateToObject(this.ball, this.minusPole, 60)
	}
	update(time: number, delta: number): void {
		if (this.keys.left.isDown) {
			this.minusPole.play('minus_on', true)
			this.ball.setAccelerationX(-FOCRE)
		} else {
			this.minusPole.play('minus_idle')
		}
		if (this.keys.right.isDown) {
			this.plusPole.play('plus_on', true)
			this.ball.setAccelerationX(FOCRE)
		} else {
			this.plusPole.play('plus_idle')
		}
	}
}
