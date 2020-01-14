class Play extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }


  create() {

    //Sound

    var musicstart = 0;
    this.boom = this.sound.add('boom');
    this.boom.setVolume(0.3);
    this.boom.play();

    //Background creation
    this.space = this.add.image(400, 300, 'space');
    this.sky = this.add.image(400, -300, 'sky').setScale(3);
    this.sea = this.add.image(400, 350, 'sea');
    this.clamps_broken = this.add.image(400, 465, 'clamps_broken');
    this.grass = this.add.image(400, 300, 'grass');

    //Ship creation
    this.ship = this.add.sprite(400, 430, 'ship');
    this.ship.setScale(0.5);

    this.anims.create({
      key: "ship_animate",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });

    this.ship.play("ship_animate");

    //Radar animation
    this.radar = this.add.sprite(742, 291, 'radar');

    this.anims.create({
      key: "radar_animate",
     frames: this.anims.generateFrameNumbers("radar"),
      frameRate: 0.8,
      repeat: -1
    });

    this.radar.play("radar_animate");


    //Plane creations
    this.plane1 = this.add.image(240, -1200, 'plane');
    this.plane1.setScale(0.6);
    this.plane2 = this.add.image(600, -1320, 'plane');
    this.plane2.setScale(0.6);
    this.plane2.flipX = true;
    this.plane3 = this.add.image(140, -1470, 'plane');
    this.plane3.setScale(0.6);

    //Text
    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    this.Missiontimer = this.add.text(20, 45, 'ETA: +' + 0, {font: "25px Arial", fill: "red"});

    //Music and Music configuration
    this.music = this.sound.add('music');

    var musicConfig = {
          mute: false,
          volume: 0.2,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0,
          }

    if (musicstart == 0) {
      this.music.play(musicConfig);
      musicstart = 1;
    }

    //Check input
    this.cursorKeys = this.input.keyboard.createCursorKeys();

  }

  update() {

    //Define functions here
    function moveVesselRight(vessel, speed) {
      vessel.x += speed;
      if (vessel.x > 850) {
        // reset position
        vessel.x = -50;
      }
    }

    function moveVesselLeft(vessel, speed) {
      vessel.x += speed;
      if (vessel.x < -50) {
        // reset position
        vessel.x = 850;
      }
    }


    function resetVesselPos() {
      vessel.x = 0;
    }

    //Background drift speeds to simulate movement
    this.grass.y += 3;
    this.clamps_broken.y += 3;
    this.radar.y += 3;
    this.sky.y += 0.7;
    this.sea.y += 0.5;

    this.ship.y -= 0;

    this.plane1.y += 3;
    this.plane2.y += 3;
    this.plane3.y += 3;

    //Planes
    moveVesselRight(this.plane1, 6);
    moveVesselLeft(this.plane2, -8);
    moveVesselRight(this.plane3, 7);

    //Input

    if(this.cursorKeys.left.isDown){
      this.ship.x -= 10;
    }

    if(this.cursorKeys.right.isDown){
      this.ship.x += 10;
    }

    if (this.ship.x > 785) {
      this.ship.x = 785;
    }

    if (this.ship.x < 15) {
      this.ship.x = 15;
    }




  }

}
