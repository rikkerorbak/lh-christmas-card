import Phaser from 'phaser'
import GreetScene from './scenes/GreetScene'
import SceneTwo from './scenes/SceneTwo';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1200,
    height: 800,
    scene:  [GreetScene, SceneTwo]
};

// export default new Phaser.Game(config);
// const game = new Phaser.Game(config);
const game = new Phaser.Game(config);

