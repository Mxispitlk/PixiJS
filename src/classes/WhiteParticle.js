import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {WHITE_PARTICLE} from "../constants/diamon";

export default class WhiteParticle {
  constructor(x,y) {
    this.sprite = new PIXI.Sprite(Globals.resources[WHITE_PARTICLE].texture);
    this.x = x;
    this.y = y;
    this.setParticlePosition();
  }

  setParticlePosition(){
    const blurFilter1 = new PIXI.filters.BlurFilter();
    this.sprite.x = window.innerWidth / 2 + this.x ;
    this.sprite.y = window.innerHeight / 2 + this.y ;
    this.sprite.scale.set(0.5);
    // this.sprite.filters = [blurFilter1];
    this.sprite.zIndex = 1000;
  }

  moveSpriteUp(x,y){
    this.sprite.x += 0.01;
    this.sprite.alpha += 0.01;
    this.sprite.scale.x += 0.000001;
    this.sprite.scale.y += 0.000001;
  }
  moveSpriteDown(x,y){
    this.sprite.x -= 0.01;
    this.sprite.alpha -= 0.01;
    this.sprite.scale.x -= 0.000001;
    this.sprite.scale.y -= 0.000001;
  }

  update(wContainer,hContainer,isScaleUp,isScaleDown){
    if(isScaleUp){
      this.moveSpriteUp(wContainer,hContainer);
    }
    if(isScaleDown){
      this.moveSpriteDown(wContainer,hContainer);
    }
  }
}