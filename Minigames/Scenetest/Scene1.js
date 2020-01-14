class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {

    this.add.text(20, 20, "Loading Game...");
    console.log("loading assets");

    this.load.image('sky', 'Minigames/Demo/images/space3.png');
    this.load.image('button', 'Minigames/Scenetest/images/large_button_blue.png');
    this.load.image('button_lit', 'Minigames/Scenetest/images/large_button_blue_lit.png');

    this.load.audio('hover', '/Minigames/Scenetest/sounds/hover.ogg');
    this.load.audio('click', '/Minigames/Scenetest/sounds/click.ogg');

    this.load.image('sky', '/Minigames/Platformer/images/Level_1_Sky2.png');
    this.load.image('platform200', '/Minigames/Platformer/images/Level_1_Platform_200.png');
    this.load.image('platform400', '/Minigames/Platformer/images/Level_1_Platform_400.png');
    this.load.image('platform600', '/Minigames/Platformer/images/Level_1_Platform_600.png');
    this.load.image('floor', '/Minigames/Platformer/images/Level_1_Floor2.png');
    this.load.image('star', '/Minigames/Platformer/images/star.png');
    this.load.image('bomb', '/Minigames/Platformer/images/bomb.png');
    this.load.spritesheet('dude', '/Minigames/Platformer/images/dude2.png', { frameWidth: 32, frameHeight: 42 });

    this.load.audio('jump', '/Minigames/Platformer/sounds/appear-online.ogg');
    this.load.audio('boom', '/Minigames/Platformer/sounds/bomb_explosion.ogg');
    this.load.audio('levelup', '/Minigames/Platformer/sounds/levelup.ogg');
    this.load.audio('coin', '/Minigames/Platformer/sounds/Coin.ogg');

    this.load.audio('music', '/Minigames/Platformer/sounds/Circus.mp3');

  }

  create() {
    console.log("loading complete. Switching scene.");
    this.scene.start("ClickScene");

  }


}
