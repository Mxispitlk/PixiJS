import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {
   SYMBOL_DIAMOND
} from "../constants/diamon";



export default class Diamond {
    constructor(x,y,scale,scaleStep,container,diamondShine) {
        this.x = x;
        this.y = y;
        this.isFirstScaleDown = true;
        this.diamondShine = diamondShine;
        this.container = container;
        this.isScaleUp = false;
        this.isScaleDown = false;
        this.numberOfScales = 0;
        this.scale = scale;
        this.scaleStep = scaleStep;
        this.sprite = new PIXI.Sprite(globals.resources[SYMBOL_DIAMOND].texture);
        this.setDiamondCoordinates(x,y,this.sprite);
      }

   resetValues(){
        this.numberOfScales = 0;
        this.isScaleUp = false;
        this.isScaleDown = false;
        this.isFirstScaleDown = true;
    }


    scaleUp(){
        if(this.isScaleUp && this.numberOfScales < 2){
            if(this.sprite.scale.x < 0.55 ){
                this.sprite.scale.x += this.scaleStep;
                this.sprite.scale.y += this.scaleStep;
            } else{
              if(this.isFirstScaleDown){
                this.addShine();
              }else{

                this.isScaleUp = false;
                this.isScaleDown = true;
              }
            }
        }
    }

    addShine(){
      if(this.numberOfScales === 0 && this.isFirstScaleDown){
        this.isFirstScaleDown = false;
        this.diamondShine.sprite.emit("addShine");

        setTimeout(()=>{
          this.diamondShine.sprite.emit("removeShine");
          this.isScaleDown = true;
          this.isScaleUp = false;
        },70)

      }
    }

    setAlpha(number){
        this.sprite.alpha = number;
    }

    scaleDown(){
        if(this.isScaleDown && this.numberOfScales < 2){
          if(this.sprite.scale.x > 0.45 && this.numberOfScales < 2){
                this.sprite.scale.x -= this.scaleStep;
                this.sprite.scale.y -= this.scaleStep;
            }else{
                this.isScaleUp = true;
                this.isScaleDown = false;
                ++this.numberOfScales
                if(this.numberOfScales === 2) {
                    this.container.emit("endAnimation");
                }
            }
        }
    }


    setDiamondCoordinates(x,y,sprite) {
        sprite.anchor.set(0.5);
        sprite.x = window.innerWidth / 2 + x;
        sprite.y = window.innerHeight / 2 + y;
        sprite.scale.set(this.scale);
    }


    update(dt) {
        // console.log("update diamond fire")
        if(this.isScaleUp && this.numberOfScales < 2){
            this.scaleUp();
            // console.log("scale up true" )
        }
        if(this.isScaleDown && this.numberOfScales < 2){
            this.scaleDown();
            // console.log("scale down true")
        }
   }
}