import * as PIXI from "pixi.js"
import Diamond from "./Diamond";
import DiamondShine from "./DiamondShine";
import DiamondOverlay from "./DiamondOverlay";
import DiamondSunShine from "./DiamondSunShine";
import Explosion from "./Explosion";

export default class AnimateDiamond {
  constructor(x,y) {
    this.isAnimationRunning = false;
    this.deltaTime = 0;
    this.scale = 0.45;
    this.scaleStepDiamondShine = 0.009;
    this.scaleExplosion = 0.2;
    this.isSunshineRotating = false;
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    this.createDiamondParts(x,y);
    this.addListeners();
    this.deltaTime = 0;
  }

  addSpriteToContainer(sprite,zIndex = 0){
    sprite.zIndex = zIndex;
    this.container.addChild(sprite);
  }

 addListeners(){
     this.container.on("runAnimation", () => {

       this.isAnimationRunning = true;
       this.diamond.isScaleUp = true;
       this.diamondShine.isScaleUp = true;

       // this.diamondOverlay.addOverlayToContainer(this.container);
       // this.diamondShine.addShineToContainer(this.container);
       // this.diamondShine.isScaleUp = true;
       // this.diamond.isScaleUp = true;
     });
     this.container.on("endAnimation",()=>this.reset())

 }

  reset(){
    console.log("reset called")
    this.diamond.resetValues();
    this.diamondShine.resetValues();
    this.isAnimationRunning = false;

 }


 createDiamondParts(x,y){

   this.diamondOverlay = new DiamondOverlay(x,y, this.scale);
   this.diamondShine = new DiamondShine(x,y,this.scale,this.scaleStepDiamondShine,this.container);
   this.diamondSunshine = new DiamondSunShine(x,y,this.scale,this.scaleStepDiamondShine,this.container);
   this.explosion = new Explosion(x,y,this.scaleExplosion);
   this.diamond = new Diamond(x,y,this.scale,this.scaleStepDiamondShine,this.container,this.diamondShine);
   this.container.addChild(this.diamond.sprite);
 }


 update(dt){

    if(this.isAnimationRunning){
      this.diamond.update(dt);
      this.deltaTime += dt;
      this.deltaTime = Math.round(this.deltaTime);
      console.log(this.deltaTime,"delta time is ?")
    }
    if(this.isSunshineRotating){
      this.diamondSunshine.startRotate()
    }
 }

}