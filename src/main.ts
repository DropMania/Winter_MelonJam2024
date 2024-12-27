import { Game as MainGame } from './scenes/Game'
import { AUTO, Game, Scale, Types } from 'phaser'
import { Loading } from './scenes/Loading'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
	type: AUTO,
	width: 128,
	height: 128,
	parent: 'game-container',
	backgroundColor: '#000',
	pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0, x: 0 },

			debug: true,
		},
		/* matter: {
			gravity: { y: 0, x: 0 },
			debug: true,

		}, */
	},
	scale: {
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	scene: [Loading, MainGame],
}

export default new Game(config)
