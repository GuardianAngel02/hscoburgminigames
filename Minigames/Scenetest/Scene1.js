class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {

    this.add.text(20, 20, "Loading Game...");
    console.log("loading assets");

    this.load.image('sky', '/hscoburgminigames/Minigames/Demo/images/space3.png');
    this.load.image('button', '/hscoburgminigames/Minigames/Scenetest/images/large_button_blue.png');
    this.load.image('button_lit', '/hscoburgminigames/Minigames/Scenetest/images/large_button_blue_lit.png');

    this.load.audio('hover', '/hscoburgminigames/Minigames/Scenetest/sounds/hover.ogg');
    this.load.audio('click', '/hscoburgminigames/Minigames/Scenetest/sounds/click.ogg');

    this.load.image('sky', '/hscoburgminigames/Minigames/Platformer/images/Level_1_Sky2.png');
    this.load.image('platform200', '/hscoburgminigames/Minigames/Platformer/images/Level_1_Platform_200.png');
    this.load.image('platform400', '/hscoburgminigames/Minigames/Platformer/images/Level_1_Platform_400.png');
    this.load.image('platform600', '/hscoburgminigames/Minigames/Platformer/images/Level_1_Platform_600.png');
    this.load.image('floor', '/hscoburgminigames/Minigames/Platformer/images/Level_1_Floor2.png');
    this.load.image('star', '/hscoburgminigames/Minigames/Platformer/images/star.png');
    this.load.image('bomb', '/hscoburgminigames/Minigames/Platformer/images/bomb.png');
    this.load.spritesheet('dude', '/hscoburgminigames/Minigames/Platformer/images/dude2.png', { frameWidth: 32, frameHeight: 42 });

    this.load.audio('jump', '/hscoburgminigames/Minigames/Platformer/sounds/appear-online.ogg');
    this.load.audio('boom', '/hscoburgminigames/Minigames/Platformer/sounds/bomb_explosion.ogg');
    this.load.audio('levelup', '/hscoburgminigames/Minigames/Platformer/sounds/levelup.ogg');
    this.load.audio('coin', '/hscoburgminigames/Minigames/Platformer/sounds/Coin.ogg');

    this.load.audio('music', '/hscoburgminigames/Minigames/Platformer/sounds/Circus.mp3');

  }

  create() {
    console.log("loading complete. Switching scene.");
    this.scene.start("ClickScene");

  }


}
