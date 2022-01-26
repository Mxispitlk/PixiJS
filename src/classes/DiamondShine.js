import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {DIAMOND_SHINE} from "../constants/diamon";

export default class DiamondShine {
  constructor(x,y,scale) {
    this.sprite = new PIXI.Sprite(globals.resources[DIAMOND_SHINE].texture);
    this.setCoordinates(x,y,scale);
  }

  addShineToContainer(container){
    container.addChild(this.sprite);
  }

  setCoordinates(x,y,scale) {
    this.sprite.anchor.set(0.5);
    this.sprite.x = window.innerWidth / 2 + x;
    this.sprite.y = window.innerHeight / 2 + y;
    this.sprite.scale.set(scale);
  }
}