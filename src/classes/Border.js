import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WILD_EXPAND_DOWN_BORDER, WILD_EXPAND_MIDDLE_BORDER, WILD_EXPAND_UP_BORDER} from "../constants/devil";

export default class Border {
  constructor() {
    this.top = new PIXI.Sprite(Globals.resources[WILD_EXPAND_UP_BORDER].texture);
    this.middle = new PIXI.Sprite(Globals.resources[WILD_EXPAND_MIDDLE_BORDER].texture);
    this.bottom = new PIXI.Sprite(Globals.resources[WILD_EXPAND_DOWN_BORDER].texture);
    // this.setProperties()
  }



  update(dt) {

  }
}