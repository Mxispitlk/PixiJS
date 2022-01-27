import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WHITE_PARTICLE} from "../constants/diamon";

export default class WhiteParticle {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[WHITE_PARTICLE].texture);
  }
}