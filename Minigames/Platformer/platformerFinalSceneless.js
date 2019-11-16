function StartPlatformerSceneless(){

  import Phaser from '/hscoburgminigames/phaser';
  import Phaser from 'phaser';
  
  var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'PlaySection',
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 2000 },
              debug: false
          }
      },
      scene: {
          preload: preload,
          create: create,
          update: update
      }
  };

  var player;
  var stars;
  var bombs;
  var platforms;
  var cursors;
  var score = 0;
  var gameOver = false;
  var scoreText;
  var levelText;
  var maxlevelText;
  var currentLevel = 1;
  var maxLevel = 1;
  var musicstart = 0;

  var xx_star_pos = Phaser.Math.Between(100, 150);
  var yy_star_pos = Phaser.Math.Between(0, 100);
  var xo_star_step = Phaser.Math.Between(180, 200);



  var game = new Phaser.Game(config);

  function preload ()
  {
      //this.load.image('sky', '../../data/Platformer/one/Level_1_Sky2.png');
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
      this.load.audio('coin', '//hscoburgminigamesMinigames/Platformer/sounds/Coin.ogg');

      this.load.audio('music', '/hscoburgminigames/Minigames/Platformer/sounds/Circus.mp3');
  }

  function create ()
  {
      //  A simple background for our game
      this.add.image(400, 300, 'sky');

      // Creating audio
      this.jump = this.sound.add('jump');
      this.coin = this.sound.add('coin');
      this.coin.setVolume(0.5);
      this.levelup = this.sound.add('levelup');
      this.levelup.setVolume(0.5);
      this.boom = this.sound.add('boom');
      this.boom.setVolume(0.5);

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



      //  The platforms group contains the 2 ledges we can jump on
      platforms = this.physics.add.staticGroup();

      //  The floor group contains the ground
      floor = this.physics.add.staticGroup();

      //  The door group contains the door
      door1 = this.physics.add.staticGroup();
      door2 = this.physics.add.staticGroup();

      //  Here we create the ground.
      floor.create(400, 590, 'floor');

      //  Now let's create some ledges
      platforms.create(150, 150, 'platform200');
      platforms.create(600, 450, 'platform400');
      platforms.create(150, 450, 'platform200');
      platforms.create(620, 330, 'platform200');
      platforms.create(475, 235, 'platform200');


      // The player and its settings
      player = this.physics.add.sprite(100, 450, 'dude');

      //  Player physics properties. Give the little guy a slight bounce.
      player.setBounce(0);
      player.setCollideWorldBounds(true);

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'turn',
          frames: [ { key: 'dude', frame: 4 } ],
          frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });

      //  Input Events
      cursors = this.input.keyboard.createCursorKeys();
      spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
      stars = this.physics.add.group({
          key: 'star',
          repeat: 3,
          setXY: { x: xx_star_pos, y: yy_star_pos, stepX: xo_star_step }
      });

      stars.children.iterate(function (child) {

          //  Give each star a slightly different bounce
          child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

      });

      bombs = this.physics.add.group();

      //  The score
      scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
      levelText = this.add.text(600, 16, 'Level: 1', { fontSize: '32px', fill: '#000' });
      maxlevelText = this.add.text(600, 48, 'High: ' + maxLevel, { fontSize: '32px', fill: '#000' });

      //  Collide the player and the stars with the platforms
      this.physics.add.collider(player, platforms);
      this.physics.add.collider(player, floor);
      this.physics.add.collider(stars, platforms);
      this.physics.add.collider(stars, floor);
      this.physics.add.collider(bombs, platforms);
      this.physics.add.collider(bombs, floor);

      //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
      this.physics.add.overlap(player, stars, collectStar, null, this);

      this.physics.add.collider(player, bombs, hitBomb, null, this);
  }

  function update ()
  {
      if (gameOver)
      {
        this.boom.play();
        this.scene.stop();
        this.scene.restart();
        score = 0;
        currentLevel = 0;
        gameOver = 0;
      }

      if (cursors.left.isDown)
      {
          player.setVelocityX(-240);

          player.anims.play('left', true);
      }
      else if (cursors.right.isDown)
      {
          player.setVelocityX(240);

          player.anims.play('right', true);
      }
      else
      {
          player.setVelocityX(0);

          player.anims.play('turn');
      }

      if (cursors.up.isDown && player.body.touching.down)
      {
          this.jump.play();
          player.setVelocityY(-800);
      }

      if (spacebar.isDown && player.body.touching.down)
      {
          this.jump.play();
          player.setVelocityY(-800);

      }
  }

  function collectStar (player, star)
  {
      this.coin.play();
      star.disableBody(true, true);

      //  Add and update the score

      score += 10;
      scoreText.setText('Score: ' + score);

      if (stars.countActive(true) === 0)
      {
          StarPos();
          this.levelup.play();
          currentLevel += 1;
          levelText.setText('Round: ' + currentLevel);

          if (currentLevel > maxLevel){
            maxLevel = currentLevel;
            maxlevelText.setText('High: ' + maxLevel);
          }


          //  A new batch of stars to collect
          stars.children.iterate(function (child) {

              child.enableBody(true, child.x, 0, true, true);

          });

          var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

          var bomb = bombs.create(x, 16, 'bomb');
          bomb.setBounce(1);
          bomb.setCollideWorldBounds(true);
          bomb.setVelocity(Phaser.Math.Between(Phaser.Math.Between(-250, -200), Phaser.Math.Between(200, 250)), 100);
          bomb.body.setAllowGravity(false);

      }
  }


  function hitBomb (player, bomb)
  {
      this.physics.pause();

      player.setTint(0xff0000);

      player.anims.play('turn');


      //var timer = scene.time.delayedCall(500, restart());

      gameOver = true;
  }

  function StarPos (){
    var xx_star_pos = Phaser.Math.Between(100, 150);
    var yy_star_pos = Phaser.Math.Between(0, 100);
    var xo_star_step = Phaser.Math.Between(180, 200);
    return xx_star_pos, yy_star_pos, xo_star_step;
  }

}
