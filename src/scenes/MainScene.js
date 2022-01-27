import * as PIXI from "pixi.js"
import {BACKGROUND} from "../constants/others";
import Background from "../classes/Background";
import MainMenu from "../classes/MainMenu";

export default class MainScene {
  constructor() {
    this.container = new PIXI.Container();

    this.createBackground();
    this.addMenu();
  }

  createBackground(){
    this.background = new Background(BACKGROUND);
    this.container.addChild(this.background.sprite);
  }

  addMenu(){
    const mainMenu = new MainMenu();
    this.container.addChild(mainMenu.container);
  }


}