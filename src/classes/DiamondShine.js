import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {DIAMOND_SHINE} from "../constants/diamon";

export default class DiamondShine {
  constructor(endTimeUp,endTimeDown) {
    this.endTimeUp = endTimeUp;
    this.endTimeDown = endTimeDown;
    this.sprite = new PIXI.Sprite(Globals.resources[DIAMOND_SHINE].texture);
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
    if(actualTime <= this.endTimeUp){
      this.sprite.scale.x += this.scaleSpeed * dt;
      this.sprite.scale.y += this.scaleSpeed * dt;
    }else{
      this.isScalingUp = false;
      this.isScalingDown = true;
    }
  }

  scaleDown(dt, actualTime){
    if(actualTime <= this.endTimeDown && !this.isScalingUp){
      this.sprite.scale.x -= this.scaleSpeed * dt;
      this.sprite.scale.y -= this.scaleSpeed * dt;
    }else{
      this.isScalingUp = false;
      this.isScalingDown = false;
      this.sprite.scale.set(0.45);
      this.sprite.destroy();
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