import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {DIAMOND_SHINE} from "../constants/diamon";

export default class DiamondShine {
  constructor(x,y,scale,scaleStep,container) {
    this.container = container;
    this.sprite = new PIXI.Sprite(globals.resources[DIAMOND_SHINE].texture);
    this.isScaleUp = false;
    this.scaleStep = scaleStep;
    this.isScaleDown = false;
    this.numberOfScales = 0;
    this.setCoordinates(x,y,0.55);
    this.addListeners();
  }

  scaleUp(){
    if(this.isScaleUp && this.numberOfScales < 2){
     if(this.sprite.scale.x < 0.55 ){
        this.sprite.scale.x += this.scaleStep;
        this.sprite.scale.y += this.scaleStep;
     } else{
        this.isScaleUp = false;
        this.isScaleDown = true;
      }
    }
  }

  scaleDown(){
    if(this.isScaleDown && this.numberOfScales < 2){
      if(this.sprite.scale.x > 0.45 && this.numberOfScales < 2){
        this.sprite.scale.x -= this.scaleStep;
        this.sprite.scale.y -= this.scaleStep;
      }else{
        this.isScaleUp = true;
        this.isScaleDown = false;
        ++this.numberOfScales
      }
    }
  }

  resetValues(){
    this.isScaleUp = false;
    this.isScaleDown = false;
    this.numberOfScales = 0;
  }


  removeFromContainer(){
    this.container.removeChild(this.sprite)
  }

  addListeners(){
    this.sprite.on("addShine",()=>
        this.addToContainer()
    )
    this.sprite.on("removeShine",()=>
        this.removeFromContainer()
    )
  }

  addToContainer(){
    console.log("shine called called")
    this.container.addChild(this.sprite)
  }

  setCoordinates(x,y,scale) {
    this.sprite.anchor.set(0.5);
    this.sprite.x = window.innerWidth / 2 + x;
    this.sprite.y = window.innerHeight / 2 + y;
    this.sprite.scale.set(scale);
  }

  update(dt){
    if(this.isScaleUp && this.numberOfScales < 2){
      this.scaleUp();
    }
    if(this.isScaleDown && this.numberOfScales < 2){
      this.scaleDown();
    }
  }
}