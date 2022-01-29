import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {ONE_PARTICLE, WHITE_PARTICLE} from "../constants/diamon";

export default class Particles {
  constructor(x, y, i) {
    this.white = new PIXI.Sprite(Globals.resources[WHITE_PARTICLE].texture);
    this.red = new PIXI.Sprite(Globals.resources[ONE_PARTICLE].texture);
    this.isDefault = true;
    this.originX = x;
    this.originY = y;
    this.distance = i;
    this.angle = Math.random() * Math.PI * 2;
    this.coordinates = this.randomPosition(x, y, i);
    this.randomScale = Math.random();
    this.fadeAwayFirst = this.distance % 2 === 0;
    this.fadeAwayStep = 0.5;
    this.setProperties(this.white, x, y);
    this.setProperties(this.red, x, y);
  }

  randomPosition(originX, originY) {
    let r = Math.sqrt(Math.random()) * 30;
    let x = originX + r * Math.cos(this.angle);
    let y = originY + r * Math.sin(this.angle);
    return {x, y};
  }


  setProperties(sprite, x, y) {
    sprite.anchor.set(0.5);
    sprite.scale.set(this.randomScale);
    sprite.zIndex = 20;
    sprite.x = x - this.coordinates.x;
    sprite.y = y - this.coordinates.y;
    sprite.alpha = 0;
  }

  particleAlphaChanges() {
    this.white.alpha -= 0.05;
    this.red.alpha += 0.05;
  }

  particleChangeCondition(actualTime) {
    return actualTime > 17 && actualTime < 40
  }

  moveParticles(dt, actualTime) {
    if (actualTime > 17 && actualTime < 20) {

    }
    if (actualTime > 15 && actualTime < 45) {
      this.moveByAngle();
    }

  }

  moveByAngle() {
    const randomX = Math.random() * 0.13 * this.distance;
    const randomY = Math.random() * 0.13 * this.distance;

    this.white.x += (randomX * Math.cos(this.angle));
    this.white.y += (randomY * Math.sin(this.angle));
    this.red.x += (randomX * Math.cos(this.angle));
    this.red.y += (randomY * Math.sin(this.angle));
  }

  fadeAway(actualTime) {
    if (actualTime > 35) {
      console.log(this.distance);
      if (this.fadeAwayFirst) {
        this.white.alpha -= this.fadeAwayStep;
        this.red.alpha -= this.fadeAwayStep;
      } else {
        this.white.alpha -= this.fadeAwayStep ;
        this.red.alpha -= this.fadeAwayStep ;
      }
    }
  }


  update(dt, actualTime) {
    if (actualTime >= 17) {
      this.isDefault = false
      this.white.alpha = 1;
    }
    if (this.particleChangeCondition(actualTime)) {
      this.particleAlphaChanges();
    }
    if (actualTime > 17 && actualTime < 50) {
      this.moveParticles(dt, actualTime)
    }
    if (actualTime > 60 && !this.isDefault) {
      this.setProperties(this.white, this.originX, this.originY);
      this.setProperties(this.red, this.originX, this.originY);
      this.isDefault = true;
    }
    this.fadeAway(actualTime);
  }
}