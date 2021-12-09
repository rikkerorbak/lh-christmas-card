import Phaser from 'phaser'
import legoBtn from '../assets/LegoBtnSprite.png'

export default class GreetScene extends Phaser.Scene {

   constructor() {
      super('greet-scene');
   }

   preload() {
      // this.load.spritesheet('btnAni', btnSprite, {frameWidth: 54*3, frameHeight: 30*3})
      this.load.spritesheet('legoBtn-anim', legoBtn, {frameWidth: 216, frameHeight: 132});
      // this.load.bitmapFont('dogicapixel', 'src/assets/fonts/dogicapixel.ttf'); //bruges ikke endnu
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');  //on hold
      this.load.bitmapFont('gbfont', 'src/assets/fonts/gbfont.png', 'src/assets/fonts/gbfont.xml');
   }

   create() {


      this.label = this.add.bitmapText(200, 150, 'gbfont', '')
      this.typewriteText('The following message is\nbrought to you by')
      this.btn = this.add.sprite(600, 450, 'legoBtn-anim')
      
      this.anims.create( {
         key: "legoBtn-anim",
         frames: this.anims.generateFrameNumbers('legoBtn-anim', {start: 0, end: 3}),
         frameRate: 15,
         repeat: 0
      });
      
      this.btn.setInteractive()
      this.btn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
         this.btn.play('legoBtn-anim')
         this.btn.on('animationcomplete', () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0)
         })
      })

      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
         this.scene.start('scene-two')
      })


   }


   update() { }

   typewriteText(text) {
      this.label.setText(text);

      const bounds = this.label.getTextBounds(false);

      this.label.setText('');

      const length = text.length
      let i = 0
      this.time.addEvent({
         callback: () => {
            this.label.text += text[i]
            ++i
         },
         repeat: length -1,
         delay: 100
      });
   }
}
