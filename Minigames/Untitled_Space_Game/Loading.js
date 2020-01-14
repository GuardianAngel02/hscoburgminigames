class Loading extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {

    this.add.text(20, 20, "Loading Game...");
    console.log("loading assets");

    this.load.image('space', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/outerspace.png');
    this.load.image('sky', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/sky.png');
    this.load.image('grass', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/Grass.png');
    this.load.image('sea', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/sea.png');

    this.load.image('clamps', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/clamps.png');
    this.load.image('clamps_broken', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/clamps_broken.png');


    this.load.spritesheet('ship', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/spaceshipsprite.png',{
      frameWidth: 58,
      frameHeight: 120
    });

    this.load.spritesheet('radar', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/radarsprite.png',{
      frameWidth: 38,
      frameHeight: 30
    });


    this.load.image('ship_idle', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/spaceshipidle.png');
    this.load.image('plane', '/hscoburgminigames/Minigames/Untitled_Space_Game/images/plane.png');


    this.load.audio('click', ['/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/click.ogg', '/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/click.mp3']);
    this.load.audio('boom', ['/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/bomb_explosion.ogg', '/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/bomb_explosion.mp3']);

    this.load.audio('music', ['/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/8bit-OnTheOffensiveV2.ogg', '/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/8bit-OnTheOffensiveV2.mp3']);

    this.load.audio('ambient', ['/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/ambient.ogg', '/hscoburgminigames/Minigames/Untitled_Space_Game/sounds/ambient.mp3']);


  }

  create() {
    console.log("loading complete. Switching scene.");
    this.scene.start("ClickScene");

  }


}
