import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {DIAMOND_OVERLAY} from "../constants/diamon";

export default class DiamondOverlay {
  constructor(x,y,scale) {
    this.sprite = new PIXI.Sprite(globals.resources[DIAMOND_OVERLAY].texture);
    this.setCoordinates(x,y,scale);
  }

  setCoordinates(x,y,scale) {
    this.sprite.anchor.set(0.5);
    this.sprite.x = window.innerWidth / 2 + x;
    this.sprite.y = window.innerHeight / 2 + y;
    this.sprite.zIndex = -1;
    this.sprite.scale.set(scale);
  }

  addOverlayToContainer(container){
    container.addChild(this.sprite);
  }

  removeOverlayFromContainer(container){
    container.removeChild(this.sprite);
  }

}