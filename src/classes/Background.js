import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_DIAMONDS} from "../constants/others";


export default class Background {
  constructor(resource) {
    this.sprite = new PIXI.Sprite(Globals.resources[resource].texture);
    this.sprite.width = window.innerWidth;
    this.sprite.height = window.innerHeight;
    this.sprite.zIndex = -10;

  }

}