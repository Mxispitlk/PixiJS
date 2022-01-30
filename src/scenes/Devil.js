import * as PIXI from "pixi.js"
import {BACKGROUND_DEVIL,} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import {BACK, START, START_ID, BACK_ID} from "../constants/others";
import DevilMain from "../classes/devil/DevilMain";


export default class Devil {
  constructor() {
    this.container = new PIXI.Container();
    this.isAnimating = false;
    this.createBackground();
    this.createButtons();
    this.addListener()
    this.createDevilMain();
  }

  createDevilMain() {
    this.devilMain = new DevilMain();
    this.container.addChild(this.devilMain.container);
  }


  addListener() {
    this.container.on("start", () => {
      this.devilMain.setDefaults();
      setTimeout(() => {this.isAnimating = true}, 300);

    });
  }

  createBackground() {
    this.background = new Background(BACKGROUND_DEVIL);
    this.container.addChild(this.background.sprite);
  }

  createButtons() {
    this.createButtonBack();
    this.createButtonStart();
  }

  createButtonStart() {
    this.createTextStyles();
    this.buttonStart = new Button(1650, 100, START, START_ID, 150, 40, this.textStyles, 0x9bcfbe, 0xb50e33, 0.5, 1, 0xcc788b);
    this.container.addChild(this.buttonStart.container)
  }

  createButtonBack() {
    this.createTextStyles();
    this.buttonBack = new Button(100, 100, BACK, BACK_ID, 150, 40, this.textStyles, 0x9bcfbe, 0xb50e33, 0.5, 1, 0xcc788b);
    this.container.addChild(this.buttonBack.container)
  }

  createTextStyles() {
    this.textStyles = new PIXI.TextStyle({
      fontFamily: 'Roboto',
      fill: ['#ffffff'],
      stroke: '#004620',
      fontSize: 20,
      fontWeight: 'lighter',
    })
  }

  update(dt) {
    if (this.isAnimating) {
      this.devilMain.update(dt);
    }
  }
}