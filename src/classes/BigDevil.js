import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WILD_DEVIL_EXPAND} from "../constants/devil";

export default class BigDevil {
  constructor() {
    this.container = new PIXI.Container();
    this.sprite = new PIXI.Sprite(Globals.resources[WILD_DEVIL_EXPAND].texture);
    this.setPositions();
    this.addMask()
  }

  setPositions(){
    this.sprite.scale.set(0.5);
    this.sprite.x = 59;
    this.sprite.y = 250;
    this.sprite.alpha = 1;
    this.container.addChild(this.sprite);
  }

  addMask(){
    const mask = new PIXI.Sprite(PIXI.Texture.WHITE);
    mask.tint = 0x000000;
    mask.width = 250
    mask.x = 40;
    mask.y = 20;

    mask.height = 625;
    mask.alpha = 1;
    this.container.addChild(mask); // make sure mask it added to display list somewhere!
    this.container.mask = mask;
  }

  update(dt) {

  }
}