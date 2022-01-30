import * as PIXI from "pixi.js"
import DevilAnim from "./DevilAnim";
import SmallDevil from "./SmallDevil";

export default class DevilMain {
  constructor() {
    this.container = new PIXI.Container();
    this.createDevilSmall();
    this.createDevilAnim();

  }

  setDefaults(){
    this.devilAnim.setDefaultBigDevil()
    this.devilSmall.setProperties();
  }

  createDevilAnim(){
    this.devilAnim = new DevilAnim();
    this.container.addChild(this.devilAnim.container);
  }

  createDevilSmall() {
    this.devilSmall = new SmallDevil();
    this.container.addChild(this.devilSmall.sprite);
  }

  update(dt) {
    this.devilAnim.update(dt);
    this.devilSmall.update(dt);
  }
}