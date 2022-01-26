import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {DIAMOND_SUNSHINE} from "../constants/diamon";

export default class DiamondSunShine {
  constructor() {
    this.sprite = new PIXI.Sprite(globals.resources[DIAMOND_SUNSHINE].texture);
  }


}