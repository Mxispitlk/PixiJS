import * as PIXI from "pixi.js"
import {Globals} from "../../globalVariables/globals";
import {MELON} from "../../constants/melon";

export default class Melon {
  constructor() {
    this.sprite = new PIXI.Sprite(Globals.resources[MELON].texture);
    this.setDefaultProps();
    this.moveRight = true;
    this.actualY = 0;
  }


  setDefaultProps(){
    this.sprite.scale.set(0.3);
    this.sprite.anchor.set(0.5);
    this.sprite.x = 20
  }
  moveToMiddle(){
    console.log("a",this.sprite.parent.width);
    if(this.moveRight) {
      this.sprite.parent.x += 20;
    }else{
      this.sprite.parent.x -= 20;
    }

    if(this.sprite.parent.x > window.innerWidth + 150){
      this.moveRight = false;
      this.actualY += 150;
      this.sprite.parent.y = this.actualY
    }
    if(this.sprite.parent.x < - 150){
      this.moveRight = true;
      this.actualY += 150;
      this.sprite.parent.y = this.actualY
    }
  }

  update(dt) {
    this.moveToMiddle();
  }

}