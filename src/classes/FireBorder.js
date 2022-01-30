import * as PIXI from "pixi.js"
import {FIRE_UP, FIRE_DOWN, FIRE_MIDDLE} from "../constants/devil";
import {Globals} from "../globalVariables/globals";

export default class FireBorder {
  constructor() {
    this.constants = [FIRE_UP, FIRE_MIDDLE, FIRE_DOWN,]
    this.sprites = [];
    this.loadAllTextures();
    this.setAnimationsProperties();
  }

  loadAllTextures() {
    this.constants.forEach(constant => {
      this.loadTextures(constant);
    })
  }

  setAnimationsProperties() {
    this.sprites.forEach((sprite,index) => {
      this.setAnimationProperties(sprite,index);
    })
  }

  setAnimationProperties(sprite,index) {
    if(index === 0){
      sprite.x = 0
      sprite.y = 0;
    }else if(index === 1){
      sprite.x = 0
      sprite.y = 60;
    }else{
      sprite.x = 0
      sprite.y = 400;
    }
    sprite.loop = true;
    sprite.animationSpeed = 0.1;
    sprite.scale.x = 0.5
    sprite.scale.y = 0.5
    sprite.alpha = 0.1
    sprite.play();

  }

  loadTextures(constant) {
    let textures = [];
    for (let i = 0; i < 8; i++) {
      textures.push(Globals.resources[`${constant}_${i}`].texture);
    }
    this.sprites.push(new PIXI.AnimatedSprite(textures));

  }

  update(dt) {

  }
}