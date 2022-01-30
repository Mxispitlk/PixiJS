import * as PIXI from "pixi.js"
import {Globals} from "../../globalVariables/globals";
import {WILD_DEVIL_TEXT} from "../../constants/devil";

export default class Expand {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[WILD_DEVIL_TEXT].texture);
    this.setProperties();
  }

  setProperties(){
    this.sprite.scale.set(0.5);
    this.sprite.y = 300;
    this.sprite.x = 35;
    this.sprite.zIndex = 10;
  }


  update(dt) {

  }
}