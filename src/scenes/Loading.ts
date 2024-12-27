import { Scene } from 'phaser'

export class Loading extends Scene {
	poles = ['minus', 'plus']
	sprites = ['ball']
	constructor() {
		super('Loading')
	}

	preload() {
		this.load.setBaseURL('/assets/')
		this.poles.forEach((pole) => {
			this.load.aseprite(pole, `sprites/poles/${pole}.png`, `sprites/poles/${pole}.json`)
		})
		this.sprites.forEach((sprite) => {
			this.load.aseprite(sprite, `sprites/${sprite}.png`, `sprites/${sprite}.json`)
		})
	}

	create() {
		this.poles.forEach((pole) => {
			this.anims.createFromAseprite(pole)
		})
		this.sprites.forEach((sprite) => {
			this.anims.createFromAseprite(sprite)
		})
		this.scene.start('Game')
	}
}
