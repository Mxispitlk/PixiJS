import * as PIXI from "pixi.js"
import Diamond from "./Diamond";
import DiamondShine from "./DiamondShine";
import DiamondOverlay from "./DiamondOverlay";
import DiamondSunShine from "./DiamondSunShine";
import Explosion from "./Explosion";

export default class AnimateDiamond {
  constructor(x,y) {
    this.scale = 0.45
    this.scaleExplosion = 0.2;
    this.container = new PIXI.Container();
    this.createDiamondParts(x,y);
    this.addListener();
  }

 addListener(){
    this.container.on("doAnimate",()=>{
     this.diamondOverlay.addOverlayToContainer(this.container);
     this.diamondShine.addShineToContainer(this.container)
    })
 }

 createDiamondParts(x,y){
   this.diamond = new Diamond(x,y,this.scale);
   this.diamondOverlay = new DiamondOverlay(x,y, this.scale);
   this.container.addChild(this.diamond.sprite);
   this.diamondShine = new DiamondShine(x,y,this.scale);
   this.diamondSunshine = new DiamondSunShine(x,y,this.scale);
   this.explosion = new Explosion(x,y,this.scaleExplosion)
 }


}