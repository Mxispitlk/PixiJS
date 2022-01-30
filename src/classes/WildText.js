import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WILD_DEVIL_TEXT} from "../constants/devil";

export default class WildText {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[WILD_DEVIL_TEXT].texture);
    this.setPosition();
  }

  setPosition(){
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(0.5);
    this.sprite.x = 167 ;
    this.sprite.y = 615;
  }

  update(dt) {

  }
}