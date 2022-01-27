import * as PIXI from "pixi.js"
import {buttonGridConfig} from "../constants/buttonGridConfig";
import Button from "./Button";
import Popup from "./Popup";

export default class MainMenu {
  constructor() {
    this.buttons = [];
    this.container = new PIXI.Container();
    this.createPopup();
  }

  createPopup(){
    this.popup = new Popup();
    this.container.addChild(this.popup.container);
  }

}