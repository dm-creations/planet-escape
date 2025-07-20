import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        // this.load.image('logo', 'assets/phaser3-logo.png');
        // this.load.image('libs', 'assets/libs.png');
        // this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        // this.load.glsl('stars', 'assets/starfields.glsl.js');
        // preload tilesprites for background, middleground, foreground
        this.load.image('background', 'assets/oak_woods/background/background_layer_1.png')
        this.load.image('middleground', 'assets/oak_woods/background/background_layer_2.png')
        this.load.image('foreground', 'assets/oak_woods/background/background_layer_3.png')
    }

    create ()
    {
        let background = this.add.tileSprite(0, 0, 800, 600, 'background').setOrigin(0, 0).setScrollFactor(0)
        let middleground = this.add.tileSprite(0, 0, 800, 600, 'middleground').setOrigin(0, 0).setScrollFactor(0)
        // let foreground = this.add.tileSprite(0, 0, 800, 600, 'foreground').setOrigin(0, 0)

        // the background tileSprite is 320x180, but it needs to be 800x600
        // so we need to scale it up by 2.5x
        background.setScale(2.5)
        middleground.setScale(2.5)
        // foreground.setScale(2.5)


        // automatically scroll the background to the right
        this.tweens.add({
            targets: background,
            x: -800,
            duration: 10000,
            ease: 'Linear',
            repeat: -1
        })

        // the background is not repeating because 


        // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        // this.add.image(400, 300, 'libs');

        // const logo = this.add.image(400, 70, 'logo');

        // this.tweens.add({
        //     targets: logo,
        //     y: 350,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     repeat: -1
        // })
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    parent: 'game',
    width: 800,
    height: 450,
    scene: Demo
};

const game = new Phaser.Game(config);
