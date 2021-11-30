import Phaser from 'phaser'
import christianImg from '../assets/ChristianGB.png'
import treeImg from '../assets/TreePresents.png'
import rasmusImg from '../assets/RasmusII.png'
import theaImg from '../assets/Thea.png'
// import bgImg from '../assets/background, big tiles.png'


export default class SceneTwo extends Phaser.Scene {

      constructor() {
         super('scene-two')
      }

      preload() {
         this.load.image('bg', '../assets/backgroundBig.png');
         this.load.spritesheet('christian-ani', christianImg,  {frameWidth: 110, frameHeight: 150})
         this.load.spritesheet('tree-ani', treeImg, {frameWidth: 208, frameHeight: 364})
         this.load.spritesheet('rasmus-ani', rasmusImg, {frameWidth: 110, frameHeight: 150})
         this.load.spritesheet('thea-ani', theaImg, {frameWidth: 78, frameHeight: 134})
      }

      create() {
         this.add.image(100, 100, 'bg')
         this.christianImg = this.add.sprite(100, 300, 'christian-ani')
         this.treeImg = this.add.sprite(600, 500, 'tree-ani')
         this.rasmusImg = this.add.sprite(800, 450, 'rasmus-ani')
         this.theaImg = this.add.sprite(380, 650, 'thea-ani')
         
         this.anims.create({
            key: 'christian-ani',
            frames: this.anims.generateFrameNumbers('christian-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         });

         this.anims.create({
            key: 'tree-ani',
            frames: this.anims.generateFrameNumbers('tree-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })

         this.anims.create({
            key: 'rasmus-ani',
            frames: this.anims.generateFrameNumbers('rasmus-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })

         this.anims.create({
            key: 'thea-ani',
            frames: this.anims.generateFrameNumbers('thea-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })
         
         this.anims.create({
            key: 'chris-ny',
            frameRate: 2,
            repeat: -1
         })
         
         
         
         

         this.christianImg.play('christian-ani')
         this.treeImg.play('tree-ani')
         this.rasmusImg.play('rasmus-ani')
         this.theaImg.play('thea-ani')

         this.christianNy.play('chris-ny')
      }
      




}