import * as PIXI from "pixi.js"
import Borders from "./Borders";
import {Globals} from "../../globalVariables/globals";
import {WILD_DEVIL_EXPAND} from "../../constants/devil";
import Expand from "./Expand";

export default class DevilAnim {
  constructor() {
    this.container = new PIXI.Container();
    this.createBorders();
    this.createBigDevil();
    this.setProperties();
    this.addMask();
    this.addMaskDevil();
    // this.createExpand();
    this.maxBigDevil = -150;
  }

  createExpand(){
    this.expandText  = new Expand();
    this.container.addChild(this.expandText.sprite);
  }

  moveBigDevil(){
    if(this.bigDevil.y > this.maxBigDevil){
      this.bigDevil.y -= 16;
      this.bigDevil.mask.height += 18;
      this.bigDevil.mask.y -= 18;
      this.container.mask.height += 0.05;
      this.container.mask.y += 1;
    }
    if(this.bigDevil.y > this.maxBigDevil / 2) {
      this.bigDevil.alpha = 1;
    }
  }

  createBigDevil(){
    this.bigDevil = new PIXI.Sprite(Globals.resources[WILD_DEVIL_EXPAND].texture);
    this.setDefaultBigDevil();
    this.container.addChild(this.bigDevil);
  }

  setDefaultBigDevil(){
    this.bigDevil.scale.set(0.5);
    this.bigDevil.x += 18;
    this.bigDevil.y += 100;
    this.bigDevil.zIndex = -2;
    this.bigDevil.alpha = 0;
  }

  setProperties(){
    this.container.sortableChildren = true;
  }

  addMaskDevil(){
    const mask = new PIXI.Sprite(PIXI.Texture.WHITE);
    mask.tint = 0x000000;
    mask.width = this.container.width;
    mask.y = 250;
    mask.height = 250;
    mask.alpha = 1;
    this.container.addChild(mask);
    this.bigDevil.mask = mask;
  }

  addMask(){
    const mask = new PIXI.Sprite(PIXI.Texture.WHITE);
    mask.tint = 0x000000;
    mask.width = this.container.width;
    mask.y = -258;
    mask.height = 750;
    mask.alpha = 1;
    this.container.addChild(mask);
    this.container.mask = mask;
  }


  createBorders(){
    this.borders = new Borders()
    this.container.addChild(this.borders.container);
    this.container.x = window.innerWidth / 2 - this.container.width /2;
    this.container.y = window.innerHeight / 2 - this.container.height /2 + 500;
  }

  update(dt) {
    this.borders.update(dt);
    this.moveBigDevil(dt);
  }
}