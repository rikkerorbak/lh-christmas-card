import Phaser from 'phaser'
import legoBtn from '../assets/LegoBtnSprite.png'

export default class GreetScene extends Phaser.Scene {

   constructor() {
      super('greet-scene');
   }

   preload() {
      // this.load.spritesheet('btnAni', btnSprite, {frameWidth: 54*3, frameHeight: 30*3})
      this.load.spritesheet('legoBtn-anim', legoBtn, {frameWidth: 216, frameHeight: 132})
      this.load.bitmapFont('dogicapixel', '.../assets/fonts/dogicapixel.ttf') //bruges ikke endnu
   }

   create() {
      this.label = this.add.text(200, 150, '',)
      this.typewriteText('The following message is of utmost importance.\nClick the brick below when you feel ready to read it.')
      // this.btn = this.add.sprite(400, 300, 'btnAni')
      this.btn = this.add.sprite(400, 300, 'legoBtn-anim')
      
      this.anims.create( {
         // key: "btn-ani",
         key: "legoBtn-anim",
         // frames: this.anims.generateFrameNumbers('btnAni', {start: 0, end: 3}),
         frames: this.anims.generateFrameNumbers('legoBtn-anim', {start: 0, end: 3}),
         frameRate: 15,
         repeat: 0
      });
      
      this.btn.setInteractive()
      this.btn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
         // this.btn.play('btn-ani')
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
      const length = text.length
      let i = 0
      this.time.addEvent({
         callback: () => {
            this.label.text += text[i]
            ++i
         },
         repeat: length -1,
         delay: 100
      })
   }
}
