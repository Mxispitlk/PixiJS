import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WILD_DEVIL} from "../constants/devil";

export default class SmallDevil {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[WILD_DEVIL].texture);
    this.setProperties();
  }

  setProperties(){
    this.sprite.scale.set(0.5);
    this.sprite.x = 25;
    this.sprite.y = 390;
    this.sprite.alpha = 1;
  }

  update(dt) {

  }
}