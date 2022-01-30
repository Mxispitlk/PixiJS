import * as PIXI from "pixi.js"
import {Globals} from "../../globalVariables/globals";
import {WILD_EXPAND_DOWN_BORDER, WILD_EXPAND_MIDDLE_BORDER, WILD_EXPAND_UP_BORDER} from "../../constants/devil";
import FireBorder from "./FireBorder";
import Expand from "./Expand";

export default class Borders {
  constructor() {
    this.container = new PIXI.Container();
    this.createSprites();
    this.setDefaultProperties();
    this.createExpand();
  }

  createExpand(){
    this.expandText  = new Expand();
    this.container.addChild(this.expandText.sprite);
  }

  createSprites() {
    this.top = new PIXI.Sprite(Globals.resources[WILD_EXPAND_UP_BORDER].texture);
    this.middle = new PIXI.Sprite(Globals.resources[WILD_EXPAND_MIDDLE_BORDER].texture);
    this.bottom = new PIXI.Sprite(Globals.resources[WILD_EXPAND_DOWN_BORDER].texture);
    this.container.addChild(this.top, this.middle, this.bottom);
    this.fireBorder = new FireBorder();
    this.fireBorder.sprites.forEach(fireBorder => {
      this.container.addChild(fireBorder);
    })
  }


  setDefaultProperties() {
    this.top.scale.set(0.5);
    this.top.zIndex = 1;
    this.middle.scale.set(0.5);
    this.bottom.scale.set(0.5);
    this.top.y = 100;
    this.bottom.y -= 395;
    this.container.sortableChildren = true;
    this.container.y += 140
    this.top.alpha = 0
    this.middle.alpha = 0
    this.bottom.alpha = 0
    this.actualTime = 0;
    this.maxTop = -320;
    this.maxMiddle = -350;
  }

  moveMiddleAndTop(dt) {
    if (this.middle.y > this.maxMiddle) {
      this.middle.y -= 18;
      this.fireBorder.sprites[1].y -= 18;
    }
    if (this.top.y > this.maxTop) {
      this.top.y -= 18;
      this.fireBorder.sprites[0].y -= 18;
    }
    if (this.top.alpha === 0) {
      console.log("laa")
      this.setBorderProperties(0.5, 3, this.top);
      this.setBorderProperties(0.5, 3, this.middle);
      this.setBorderProperties(0.5, 3, this.bottom);
      this.fireBorder.sprites.forEach(spr=> this.setBorderProperties(1,2,spr))
    }
    if(this.top.alpha === 0.5 && this.top.y >= this.maxTop){
      this.setBorderProperties(0.5, 1, this.top);
      this.setBorderProperties(0.5, 1, this.middle);
      this.setBorderProperties(0.5, 1, this.bottom);
      this.fireBorder.sprites.forEach(spr=> this.setBorderProperties(1,3,spr))
    }
  }


  setBorderProperties(value, zIndex, sprite) {
    sprite.alpha = value;
    sprite.zIndex = zIndex;
  }

  update(dt) {
    this.moveMiddleAndTop(dt)
  }
}