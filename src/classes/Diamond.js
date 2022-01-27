import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {SYMBOL_DIAMOND} from "../constants/diamon";

export default class Diamond {
  constructor(startTimeUp,endTimeUp,startTimeDown,endTimeDown) {
    this.startTimeUp = startTimeUp;
    this.endTimeUp = endTimeUp;
    this.startTimeDown = startTimeDown;
    this.endTimeDown = endTimeDown;
    this.sprite = new PIXI.Sprite(Globals.resources[SYMBOL_DIAMOND].texture);
    this.isScalingUp = false;
    this.isScalingDown = false;
    this.scaleSpeed = 0.01;
    this.setProperties();

  }

  setProperties(){
    this.sprite.scale.set(0.45);
    this.sprite.anchor.set(0.5);
    this.sprite.x = window.innerWidth / 2 ;
    this.sprite.y = window.innerHeight / 2 ;
  }

  scaleUp(dt,actualTime){
    if(actualTime >= this.startTimeUp && actualTime <= this.endTimeUp){
      this.sprite.scale.x += this.scaleSpeed * dt;
      this.sprite.scale.y += this.scaleSpeed * dt;
    }
    if(actualTime > 60){
      this.isScalingUp = false;
      this.isScalingDown = true;
    }
  }

  scaleDown(dt, actualTime){
    this.isScalingUp = false;
    if(actualTime >= this.startTimeDown && actualTime <= this.endTimeDown && !this.isScalingUp){
      this.sprite.scale.x -= this.scaleSpeed * dt;
      this.sprite.scale.y -= this.scaleSpeed * dt;
    }else{
      this.isScalingUp = false;
      this.isScalingDown = false;
      this.sprite.scale.set(0.45);

    }
  }

  update(dt,actualTime){
    if(this.isScalingUp ){
      this.scaleUp(dt, actualTime)
    }
    if(this.isScalingDown && !this.isScalingUp){
      this.scaleDown(dt, actualTime)
    }
  }
}