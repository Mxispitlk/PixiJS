import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {EXPLOSION_PARTICLE} from "../constants/diamon";

export default class Explosion {
  constructor(startTime,endTime) {
    // this.x = x;
    // this.y = y;
    this.startTime = startTime;
    this.endTime = endTime;
    this.sprite = new PIXI.Sprite(Globals.resources[EXPLOSION_PARTICLE].texture);
    this.isExploding = false;
    this.setProperties();
  }

  setProperties(){
    const blurFilter1 = new PIXI.filters.BlurFilter();
    this.sprite.x = window.innerWidth /2 ;
    this.sprite.y = window.innerHeight /2 ;
    this.sprite.filters = [blurFilter1];
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(0.01);
    this.sprite.zIndex = 5;
  }

  scaleUp(dt){
    console.log("explosion scale up")
    this.sprite.scale.x += 0.05 ;
    this.sprite.scale.y += 0.05 ;
  }
  remove(){
    this.isExploding = false;
    this.sprite.destroy();
  }


  update(dt,animateTime){
    if(this.isExploding && animateTime >= this.startTime && animateTime < this.endTime){
      this.scaleUp(dt)
    }
    if(animateTime > this.endTime && this.isExploding){
      this.remove();
    }
  }
}