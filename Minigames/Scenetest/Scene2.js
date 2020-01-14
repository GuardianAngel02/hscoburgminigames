class Scene2 extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {


    this.add.image(400, 300, 'sky');
    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

    this.add.text(300, 100, "SceneTest", {font: "45px Arial", fill: "orange"});

    let StartButton = this.add.image(400, 200, 'button');
    let OptionsButton = this.add.image(400, 300, 'button');
    let CreditsButton = this.add.image(400, 400, 'button');
    let ButtonLit = this.add.image(400, 0, 'button_lit');
    ButtonLit.setVisible(false);
    this.add.text(330, 183, "Start Button", {font: "30px Arial", fill: "white"});
    this.add.text(310, 283, "Restart Scene", {font: "30px Arial", fill: "white"});
    this.add.text(350, 383, "Credits", {font: "30px Arial", fill: "white"});

    this.sound.pauseOnBlur;
    this.hover = this.sound.add('hover');
    this.click = this.sound.add('click');

    //Button Interactions
      //Start Button
    StartButton.setInteractive();

    StartButton.on("pointerover", ()=>{
      ButtonLit.setVisible(true);
      ButtonLit.x = StartButton.x;
      ButtonLit.y = StartButton.y;
      this.hover.play();
      console.log("pointer on start button.");
    })

    StartButton.on("pointerout", ()=>{
      ButtonLit.setVisible(false);
      console.log("pointer off start button.");
    })

    StartButton.on("pointerup", ()=>{
      this.click.play();
      console.log("pointer clicked up start button.");
    })

    //Options Button
  OptionsButton.setInteractive();

  OptionsButton.on("pointerover", ()=>{
    ButtonLit.setVisible(true);
    ButtonLit.x = OptionsButton.x;
    ButtonLit.y = OptionsButton.y;
    this.hover.play();
    console.log("pointer on Options button.");
  })

  OptionsButton.on("pointerout", ()=>{
    ButtonLit.setVisible(false);
    console.log("pointer off Options button.");
  })

  OptionsButton.on("pointerup", ()=>{
    this.click.play();
    this.scene.start("ClickScene");
    console.log("pointer clicked up Options button.");
  })

    //Credits Button
  CreditsButton.setInteractive();

  CreditsButton.on("pointerover", ()=>{
    ButtonLit.setVisible(true);
    ButtonLit.x = CreditsButton.x;
    ButtonLit.y = CreditsButton.y;
    this.hover.play();
    console.log("pointer on Credits button.");
  })

  CreditsButton.on("pointerout", ()=>{
    ButtonLit.setVisible(false);
    console.log("pointer off Credits button.");
  })

  CreditsButton.on("pointerup", ()=>{
    this.click.play();
    console.log("pointer clicked up Credits button.");
  })

  }
}
