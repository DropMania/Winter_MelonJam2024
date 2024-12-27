import { Scene } from 'phaser'

const FOCRE = 0.5
export class Game extends Scene {
	minusPole: Phaser.GameObjects.Sprite
	plusPole: Phaser.GameObjects.Sprite
	keys: Phaser.Types.Input.Keyboard.CursorKeys
	ball: Phaser.Physics.Matter.Sprite
	level: number
	map: Phaser.Tilemaps.Tilemap
	constructor(data: { level: number }) {
		super('Game')
	}
	init(data: { level: number }) {
		this.level = data.level
	}
	preload() {}

	create() {
		this.map = this.make.tilemap({ key: 'Level_' + this.level })
		this.map.addTilesetImage('tileset', 'tiles')
		this.map.createLayer('Ground', 'tileset', 0, 0)
		let objectLayer = this.map.getObjectLayer('Objects')
		this.ball = this.matter.add.sprite(0, 0, 'ball', 0, {
			shape: {
				type: 'circle',
				radius: 8,
			},
		})
		objectLayer.objects.forEach((object) => {
			if (object.name === 'Spawn') {
				this.ball.x = object.x
				this.ball.y = object.y
			}
		})
		this.keys = this.input.keyboard.createCursorKeys()
		this.matter.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

		this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

		this.minusPole = this.add.sprite(0, 0, 'minus').setOrigin(0, 0).setZ(10)
		this.plusPole = this.add.sprite(120, 0, 'plus').setOrigin(0, 0).setZ(10)
	}
	update(time: number, delta: number): void {
		if (this.keys.left.isDown) {
			this.minusPole.play('minus_on', true)
			this.ball.setVelocityX(-FOCRE)
		} else {
			this.minusPole.play('minus_idle')
		}
		if (this.keys.right.isDown) {
			this.plusPole.play('plus_on', true)
			this.ball.setVelocityX(FOCRE)
		} else {
			this.plusPole.play('plus_idle')
		}
	}
}
