import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {
  DIAMOND_SHINE,
  DIAMOND_SUNSHINE,
  SYMBOL_DIAMOND,
} from "../constants/diamon";
import Explosion from "./Explosion";
import Particles from "./Particles";

export default class DiamondWithShine {
  constructor(x, y) {
    this.particles = [];
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    this.x = x;
    this.y = y;
    this.isAnimating = false;
    this.scaleStep = 0.008;
    this.startScale = 0.45;
    this.alphaStep = 0.12;
    this.alphaStepSunshine = 0.10;
    this.isFirstScale = true;
    this.createSprites();
    this.setDiamondProperties();
  }

  createSprites() {
    this.diamondSunShine = new PIXI.Sprite(Globals.resources[DIAMOND_SUNSHINE].texture);
    this.container.addChild(this.diamondSunShine);
    this.diamond = new PIXI.Sprite(Globals.resources[SYMBOL_DIAMOND].texture);
    this.container.addChild(this.diamond);
    this.explosion = new Explosion();
    this.container.addChild(this.explosion.sprite);
    this.diamondShine = new PIXI.Sprite(Globals.resources[DIAMOND_SHINE].texture);
    this.container.addChild(this.diamondShine);
    for(let i = 0 ; i <  100 ;i++){
        const particles = new Particles(this.x,this.y,i);
        this.particles.push(particles);
        this.container.addChild(particles.white,particles.red);
      }
  }

  setDiamondProperties() {
    //Diamond
    this.diamond.scale.set(this.startScale);
    this.diamond.anchor.set(0.5);
    this.diamond.zIndex = 1;

    // Diamond shine
    this.diamondShine.anchor.set(0.5);
    this.diamondShine.alpha = 0;
    this.diamondShine.scale.set(this.startScale);
    this.diamondShine.zIndex = 100;

    //Diamond sunshine
    this.diamondSunShine.anchor.set(0.5);
    this.diamondSunShine.zIndex = -5;
    this.diamondSunShine.scale.set(0.55);
    this.diamondSunShine.alpha = 0;
    this.diamondSunShine.x -= 10
    this.diamondSunShine.y -= 5

    // Container
    this.container.x = window.innerWidth / 2 - this.x;
    this.container.y = window.innerHeight / 2 - this.y;

  }

  scaleUp() {
    if (this.scaleUpConditions()) {
      //Diamond
      this.setScaleUp(this.diamond);
      if(this.isFirstScale){
        this.setAlphaDown(this.diamond, this.alphaStep);
      }

      //Diamond shine
      if (this.isFirstScale) {
        this.setScaleUp(this.diamondShine);
        this.setAlphaUp(this.diamondShine, this.alphaStep);
      }
    }
  }

  scaleDown() {
    if (this.scaleDownConditions()) {
      //Diamond
      this.setScaleDown(this.diamond);
      this.setAlphaUp(this.diamond, this.alphaStep);
      if (this.isFirstScale) {
        //Diamond shine
        this.setScaleDown(this.diamondShine);
        this.setAlphaDown(this.diamondShine, this.alphaStep);
      }
    }
  }

  setScaleUp(sprite) {
    sprite.scale.x += this.scaleStep;
    sprite.scale.y += this.scaleStep;
  }

  setScaleDown(sprite) {
    sprite.scale.x -= this.scaleStep;
    sprite.scale.y -= this.scaleStep;
    if (this.actualTime >= 52) {
      sprite.scale.set(this.startScale);
    }
  }

  setAlphaUp(sprite, alphaStep) {
    if (sprite.alpha < 1) {
      sprite.alpha += alphaStep;
    } else {
      sprite.alpha = 1;
    }
  }

  setAlphaDown(sprite, alphaStep) {
    if (sprite.alpha > 0) {
      sprite.alpha -= alphaStep;
    } else {
      sprite.alpha = 0;
    }
  }

  scaleUpConditions() {
    return (this.actualTime > 2 && this.actualTime < 15) || (this.actualTime > 29 && this.actualTime <= 40);
  }

  scaleDownConditions() {
    return (this.actualTime >= 15 && this.actualTime <= 28 || (this.actualTime > 40 && this.actualTime < 53))
  }

  sunshine() {
    if (this.actualTime > 5 && this.actualTime <= 52) {
      this.setAlphaUp(this.diamondSunShine, this.alphaStepSunshine)
      this.diamondSunShine.rotation += 0.01;
    }
    if (this.actualTime >= 53) {
      this.diamondSunShine.alpha = 0;
    }
  }


  update(dt, isAnimating) {
    if (isAnimating) {
      this.actualTime += dt;
      this.scaleUp();
      this.scaleDown();
      this.sunshine();
      this.explosion.update(this.actualTime);
      this.particles.forEach(particle =>particle.update(dt,this.actualTime));
    }
    if(this.actualTime > 28 && this.isFirstScale){
      this.isFirstScale = false;
    }
  }
}