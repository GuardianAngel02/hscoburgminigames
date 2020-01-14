class Scene3 extends Phaser.Scene {
  constructor() {
    super("ClickScene");
  }

  create() {


    let Sky = this.add.image(400, 300, 'sky');
    this.add.text(20, 20, "Playing Click2Start", {font: "25px Arial", fill: "yellow"});

    this.add.text(250, 250, "Click to begin...", {font: "45px Arial", fill: "white"});

    this.sound.pauseOnBlur;
    this.click = this.sound.add('click');

    //Button Interactions
      //Start Button
    Sky.setInteractive();

    Sky.on("pointerup", ()=>{
      this.click.play();
      this.scene.start("MenuScene");
      console.log("pointer clicked up on press2begin. Switching scene.");
    })

  }
}
