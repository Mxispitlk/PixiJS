import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {EXPLOSION_PARTICLE} from "../constants/diamon";

export default class Explosion {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[EXPLOSION_PARTICLE].texture);
    this.alphaStep = 0.1;
    this.scaleStep = 0.04;
    this.startScale = 0.1;
    this.setProperties()
  }

  setProperties(){
    this.sprite.scale.set(this.startScale)
    this.sprite.anchor.set(0.5);
    this.sprite.zIndex = 10
    this.sprite.alpha = 0;
  }

  scaleUp(actualTime){
    if(actualTime > 2 && actualTime < 16){
      this.sprite.scale.x += this.scaleStep;
      this.sprite.scale.y += this.scaleStep;
      this.setAlpha();
    }
  }

  setAlpha(){
    this.sprite.alpha += this.alphaStep;
  }
  hideExplosion(){
    this.sprite.alpha = 0;
    this.sprite.scale.set(this.startScale)

  }

  update(actualTime){
    // console.log("aa asd asd as")
    this.scaleUp(actualTime)
    if(actualTime > 15 && this.sprite.alpha !== 0){
      this.hideExplosion();
    }
  }

}