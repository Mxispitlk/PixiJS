import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_DEVIL,} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import {BACK, START, START_ID, BACK_ID} from "../constants/others";
import FireBorder from "../classes/FireBorder";
import SmallDevil from "../classes/SmallDevil";
import WildText from "../classes/WildText";
import BigDevil from "../classes/BigDevil";


export default class Devil {
  constructor() {
    this.container = new PIXI.Container();
    this.animContainer = new PIXI.Container();
    this.isAnimating = false;
    this.createBackground();
    this.createButtons();
    this.addListener()
    this.createSmallDevil();
    this.addWild();
    this.createBigDevil();
    this.createFireBorder();
    this.addMask();
    this.setPositionAnimContainer();
  }

  setPositionAnimContainer(){
    this.animContainer.x = window.innerWidth / 2 - this.animContainer.width / 2;
    this.animContainer.y = 200;
  }

  addWild(){
    this.wild = new WildText();
    this.animContainer.addChild(this.wild.sprite);
  }


  addMask(){
    const mask = new PIXI.Sprite(PIXI.Texture.WHITE);
    mask.tint = 0x000000;
    mask.width = this.animContainer.width;;
    // mask.x = 100;

    mask.height = 675;
    mask.alpha = 1;
    this.animContainer.addChild(mask); // make sure mask it added to display list somewhere!
    this.animContainer.mask = mask;
  }

  createSmallDevil() {
    this.smallDevil = new SmallDevil();
    this.animContainer.addChild(this.smallDevil.sprite);
  }

  createBigDevil() {
    this.bigDevil = new BigDevil();
    this.animContainer.addChild(this.bigDevil.container);
  }

  createFireBorder() {
    this.container.addChild(this.animContainer);
    this.fireBorder = new FireBorder();
    this.fireBorder.sprites.forEach(sprite => this.animContainer.addChild(sprite))
  }


  addListener() {
    this.container.on("start", () => {
      console.log("cathed")

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
    // console.log(dt)
  }
}