function Scenetest(){

  var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'PlaySection',
      backgroundColor: 0x000000,
      scene: [Scene1, Scene2, Scene3]
  };


  var game = new Phaser.Game(config);


};
