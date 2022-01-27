import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {DIAMOND_OVERLAY} from "../constants/diamon";

export default class DiamondOverlay {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[DIAMOND_OVERLAY].texture);
    this.setProperties();
  }

  setProperties(){
    this.sprite.y = window.innerHeight / 2;
    this.sprite.x = window.innerWidth / 2;
    this.sprite.scale.set(0.45);
    this.sprite.anchor.set(0.5);
    this.sprite.zIndex = -5;
  }

}