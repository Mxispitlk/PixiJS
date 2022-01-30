import * as PIXI from "pixi.js"
import {Globals} from "../../globalVariables/globals";
import {WILD_DEVIL} from "../../constants/devil";
import Expand from "./Expand";

export default class SmallDevil {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[WILD_DEVIL].texture);
    this.setProperties();
  }

  setProperties(){
    this.sprite.scale.set(0.5);
    this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2 -25;
    this.sprite.y = 660;
    this.sprite.alpha = 1;
  }



  update(dt) {
      if(this.sprite.alpha === 1){
        console.log("aaa")
        this.sprite.alpha = 0;
      }
  }
}