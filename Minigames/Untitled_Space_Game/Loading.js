class Loading extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {

    this.add.text(20, 20, "Loading Game...");
    console.log("loading assets");

    this.load.image('space', 'Minigames/Untitled_Space_Game/images/outerspace.png');
    this.load.image('sky', 'Minigames/Untitled_Space_Game/images/sky.png');
    this.load.image('grass', 'Minigames/Untitled_Space_Game/images/Grass.png');
    this.load.image('sea', 'Minigames/Untitled_Space_Game/images/sea.png');

    this.load.image('clamps', 'Minigames/Untitled_Space_Game/images/clamps.png');
    this.load.image('clamps_broken', 'Minigames/Untitled_Space_Game/images/clamps_broken.png');


    this.load.spritesheet('ship', 'Minigames/Untitled_Space_Game/images/spaceshipsprite.png',{
      frameWidth: 58,
      frameHeight: 120
    });

    this.load.spritesheet('radar', 'Minigames/Untitled_Space_Game/images/radarsprite.png',{
      frameWidth: 38,
      frameHeight: 30
    });


    this.load.image('ship_idle', 'Minigames/Untitled_Space_Game/images/spaceshipidle.png');
    this.load.image('plane', 'Minigames/Untitled_Space_Game/images/plane.png');


    this.load.audio('click', ['/Minigames/Untitled_Space_Game/sounds/click.ogg', '/Minigames/Untitled_Space_Game/sounds/click.mp3']);
    this.load.audio('boom', ['/Minigames/Untitled_Space_Game/sounds/bomb_explosion.ogg', '/Minigames/Untitled_Space_Game/sounds/bomb_explosion.mp3']);

    this.load.audio('music', ['/Minigames/Untitled_Space_Game/sounds/8bit-OnTheOffensiveV2.ogg', '/Minigames/Untitled_Space_Game/sounds/8bit-OnTheOffensiveV2.mp3']);

    this.load.audio('ambient', ['/Minigames/Untitled_Space_Game/sounds/ambient.ogg', '/Minigames/Untitled_Space_Game/sounds/ambient.mp3']);


  }

  create() {
    console.log("loading complete. Switching scene.");
    this.scene.start("ClickScene");

  }


}
