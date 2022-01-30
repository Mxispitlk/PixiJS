import * as PIXI from "pixi.js"
import Melon from "./Melon";

export default class MelonsMain {
  constructor() {
    this.container = new PIXI.Container();
    this.setDefaultProperties();
    this.createMelon();
  }

  createMelon(){
    this.melon = new Melon();
    // this.melon.y += 200;
    this.container.addChild(this.melon.sprite);
    // const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);
  }

  setDefaultProperties(){
    // this.container.width = window.innerWidth;
    // this.container.height = window.innerHeight - 200;
    this.container.y = 200;
  }

  update(dt) {
    this.melon.update();
  }
}