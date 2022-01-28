import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {EXPLOSION_PARTICLE, ONE_PARTICLE, WHITE_PARTICLE} from "../constants/diamon";

export default class Particles {
  constructor(width,height) {
    this.white = new PIXI.Sprite(Globals.resources[WHITE_PARTICLE].texture);
    this.red = new PIXI.Sprite(Globals.resources[ONE_PARTICLE].texture);
    this.isDefault = true;
    this.direction = Math.random();
    this.randomScale = Math.random();
    this.x = Math.floor(Math.random() * 60 );
    this.y = Math.floor(Math.random() * 100);
    this.setProperties(this.white);
    this.setProperties(this.red);
  }

  setProperties(sprite){
    sprite.anchor.set(0.5);
    sprite.scale.set(this.randomScale);
    sprite.zIndex = 20;
    sprite.x = this.x;
    sprite.y = this.y;
    sprite.alpha = 0;
  }

  particleAlphaChanges(){
    this.white.alpha -= 0.05;
    this.red.alpha += 0.05;
  }

  particleChangeCondition(actualTime){
    return actualTime > 17 && actualTime <40
  }

  moveParticles(dt,actualTime){
    if(actualTime > 17 && actualTime < 20){

    }
    if(actualTime > 20 && actualTime < 50){
      this.randomMove();
    }

  }

  randomMove(dt){
    const randomX = Math.random();
    const randomY = Math.random();
    const number = 20;
    if(this.direction < 0.125){
      this.moveTop(randomY,number);
    }else if(this.direction >= 0.125 && this.direction < 0.25){
      this.moveTopRight(randomX,randomY,number);
    }else if(this.direction >= 0.25 && this.direction < 0.375){
      this.moveRight(randomX,number);
    }else if(this.direction >= 0.375 && this.direction < 0.5){
      this.moveBottomRight(randomX,randomY,number);
    }else if(this.direction >= 0.5 && this.direction < 0.625){
      this.moveBottom(randomX,randomY,number);
    }else if(this.direction >= 0.625 && this.direction < 0.75){
      this.moveBottomLeft(randomX,randomY,number);
    }else if(this.direction >= 0.75 && this.direction < 0.875){
      this.moveLeft(dt);
    }else {
      this.moveTopLeft(dt);
    }
  }

  moveTopLeft(dt){
    this.white.x -= dt ;
    this.white.y -= dt ;
    this.red.x -= dt ;
    this.red.y -= dt ;
  }

  moveLeft(dt){
    this.white.x -= dt ;
    this.red.x -= dt  ;
  }

  moveBottomLeft(randomX,randomY,number){
    this.white.x -= (randomX * number) / 2;
    this.white.y += (randomY * number) / 2;
    this.red.x -= (randomX * number) / 2;
    this.red.y += (randomY * number) / 2;
  }

  moveBottom(randomY,number){
    this.white.y += (randomY * number) / 2;
    this.red.y += (randomY * number) / 2;
  }

  moveBottomRight(randomX,randomY,number){
    this.white.x += (randomX * number) / 2;
    this.white.y += (randomY * number) / 2;
    this.red.x += (randomX * number) / 2;
    this.red.y += (randomY * number) / 2;
  }

  moveRight(randomX,number){
    this.white.x += (randomX * number) / 2;
    this.red.x += (randomX * number) / 2;
  }

  moveTopRight(randomX,randomY,number){
    this.white.x += (randomX * number) / 2;
    this.white.y -= (randomY * number) / 2;
    this.red.x += (randomX * number) / 2;
    this.red.y -= (randomY * number) / 2;
  }

  moveTop(randomY,number){
    this.white.y -= (randomY * number) / 2;
    this.red.y -= (randomY * number) / 2;
  }

  update(dt,actualTime){
    if(actualTime >= 17){
      this.isDefault = false
      this.white.alpha = 1;
    }
    if(this.particleChangeCondition(actualTime)){
      this.particleAlphaChanges();
    }
    if(actualTime > 17 && actualTime < 60){
      this.moveParticles(dt,actualTime)
    }
    if(actualTime > 60 && !this.isDefault){
      this.setProperties(this.white);
      this.setProperties(this.red);
    }
  }
}