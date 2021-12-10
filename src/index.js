import Phaser from 'phaser'
import GreetScene from './scenes/GreetScene'
import SceneTwo from './scenes/SceneTwo';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1200,
    height: 800,
    scene:  [GreetScene, SceneTwo],
    pixelArt: true,
};

const game = new Phaser.Game(config);

