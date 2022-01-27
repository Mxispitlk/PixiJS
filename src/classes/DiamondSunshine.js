import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {DIAMOND_SUNSHINE} from "../constants/diamon";

export default class DiamondSunshine {
  constructor(startTime,endTime) {
    this.startTime = startTime;
    this.endTime = endTime
    this.sprite = new PIXI.Sprite(Globals.resources[DIAMOND_SUNSHINE].texture);
    this.isRotating = false;
    this.setProperties();
  }

  setProperties(){
    this.sprite.x = window.innerWidth / 2 - 10;
    this.sprite.y = window.innerHeight / 2 - 10;
    this.sprite.scale.set(0.50);
    this.sprite.anchor.set(0.5);
    this.sprite.zIndex = -2;
  }

  removeSunshine(){
    this.isRotating = false;
    this.sprite.destroy();
  }

  rotateSunshine(animateTime){
    if(animateTime > this.startTime && animateTime < this.endTime){
      this.sprite.rotation += 0.01;
    }
  }

  update(dt,animateTime){
    if(this.isRotating){
      this.rotateSunshine(animateTime)
    }
    if(this.isRotating && animateTime > this.endTime){
      this.removeSunshine();
    }
  }
}