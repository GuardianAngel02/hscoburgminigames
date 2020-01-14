class Click2Start extends Phaser.Scene {
  constructor() {
    super("ClickScene");
  }

  create() {

    var ambientstart = 0;

    this.space = this.add.image(400, 300, 'space')
    let Sky = this.add.image(400, -300, 'sky').setScale(3);
    this.sea = this.add.image(400, 350, 'sea');
    this.ship_idle = this.add.image(400, 430, 'ship_idle');
    this.ship_idle.setScale(0.5);
    this.clamps = this.add.image(400, 465, 'clamps');
    this.grass = this.add.image(400, 300, 'grass');


    this.radar = this.add.sprite(742, 291, 'radar');

    this.anims.create({
      key: "radar_animate",
     frames: this.anims.generateFrameNumbers("radar"),
      frameRate: 0.8,
      repeat: -1
    });

    this.radar.play("radar_animate");

    this.add.text(20, 20, "Playing Click2Start", {font: "25px Arial", fill: "yellow"});

    this.add.text(250, 250, "Click to begin...", {font: "45px Arial", fill: "white"});

    this.ambient = this.sound.add('ambient');

    var ambientConfig = {
          mute: false,
          volume: 0.4,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0,
          }

    if (ambientstart == 0) {
      this.ambient.play(ambientConfig);
      ambientstart = 1;
    }

    this.sound.pauseOnBlur;
    this.click = this.sound.add('click');

    //Button Interactions
      //Start Button
    Sky.setInteractive();

    Sky.on("pointerup", ()=>{
      this.click.play();
      this.ambient.stop();
      this.scene.start("GameScene");
      console.log("pointer clicked up on press2begin. Switching scene.");
    })

  }
}
