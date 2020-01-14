function Spacegame(){

  var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'PlaySection',
      backgroundColor: 0x000000,
      scene: [Loading, Click2Start, Play]
  };


  var game = new Phaser.Game(config);


};
