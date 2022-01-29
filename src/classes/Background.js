import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_DIAMONDS} from "../constants/others";


export default class Background {
  constructor(resource) {
    this.sprite = new PIXI.Sprite(Globals.resources[resource].texture);
    this.bgOverlay = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.sprite.width = window.innerWidth;
    this.sprite.height = window.innerHeight;
    this.sprite.zIndex = -10;
    this.alphaStep = 0.03;
    this.actualTime = 0;

    this.setProperties()
  }

  setProperties(){
    this.bgOverlay.width = window.innerWidth;
    this.bgOverlay.height = window.innerHeight;
    this.bgOverlay.tint = 0x000000;
    this.bgOverlay.alpha = 0;
  }
  setAlpha(){
    this.bgOverlay.alpha += this.alphaStep;
  }

  update(dt){
    this.actualTime +=dt;
    if(this.actualTime > 5 && this.actualTime < 30){
      this.setAlpha()
    }
    if(this.actualTime > 58){
      this.bgOverlay.alpha = 0;
      this.actualTime = 0;
    }
  }

}