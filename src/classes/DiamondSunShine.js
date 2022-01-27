import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {DIAMOND_SUNSHINE} from "../constants/diamon";

export default class DiamondSunShine {
  constructor(x,y,scale,scaleStep,container) {
    this.container = container;
    this.sprite = new PIXI.Sprite(globals.resources[DIAMOND_SUNSHINE].texture);
    this.sprite.x = x;
    this.sprite.y = y;
    this.addListeners();
  }

  addListeners(){
    this.sprite.on("sunShine",()=>

    this.addToContainer()
    )
  }

  startRotate(){
    this.sprite.rotation += 0.05;
  }

  addToContainer(){
    console.log("sunshine called")
    this.container.addChild(this.sprite)
  }




}