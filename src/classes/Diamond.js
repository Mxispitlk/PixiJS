import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {
    DIAMOND_OVERLAY,
    DIAMOND_SHINE,
    DIAMOND_SUNSHINE,
    EXPLOSION_PARTICLE, ONE_PARTICLE,
    SYMBOL_DIAMOND, WHITE_PARTICLE
} from "../constants/diamon";
import WhiteParticle from "./WhiteParticle";

export default class Diamond {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.isAnimate = false;
        this.isScaleUp = false;
        this.isScaleDown = false;
        this.numberOfScales = 0;
        this.isExplosion = false;
        this.isParticles = false;
        this.isSunshineRotate = false;
        this.isRemoveSunshine = false;
        this.container = new PIXI.Container();
        this.scale = 0.45;
        this.scaleStep = 0.007;
        this.container.sortableChildren = true;
        this.sprite = new PIXI.Sprite(globals.resources[SYMBOL_DIAMOND].texture);
        this.setDiamondCoordinates(x,y,this.sprite);
        this.addSpriteToContainer(this.sprite);
        this.createDiamondParts(x,y);
        this.container.sortableChildren = true;
        this.whiteParticle = new WhiteParticle(100,100);
   }
    
    createDiamondParts(x,y){
        this.overlay = new PIXI.Sprite(globals.resources[DIAMOND_OVERLAY].texture);
        this.setDiamondCoordinates(x,y,this.overlay);
                
        this.spriteShine = new PIXI.Sprite(globals.resources[DIAMOND_SHINE].texture);
        this.setDiamondCoordinates(x,y,this.spriteShine);
               
        this.spriteSunshine = new PIXI.Sprite(globals.resources[DIAMOND_SUNSHINE].texture)
        this.setDiamondCoordinates(x,y,this.spriteSunshine);
        
        // this.explosion = new PIXI.Sprite(globals.resources[EXPLOSION_PARTICLE].texture)
        // this.setDiamondCoordinates(x,y,this.explosion);

        // this.redParticle = new PIXI.Sprite(globals.resources[ONE_PARTICLE].texture)
        // this.white = new PIXI.Sprite(globals.resources[WHITE_PARTICLE].texture)


        // this.container.addChild(this.overlay,this.spriteShine);
    }


    removeSunshine(){
        this.container.removeChild(this.spriteSunshine,this.overlay,this.spriteShine);
        this.isRemoveSunshine = false;
    }


    resetValues(){
        this.numberOfScales = 0;
        this.isScaleUp = false;
        this.isScaleDown = false;
    }

    doAnimate(){
        this.resetValues();
        this.isAnimate = true;
        this.isScaleUp = true;
        this.addSpriteToContainer(this.overlay,1);
        setTimeout(() => {
            this.addSpriteToContainer(this.spriteShine,2); 
        }, 20);
     }

    rotateSunShine(){
        this.spriteSunshine.rotation += 0.005;
    }

    scaleUp(){
        if(this.isScaleUp){
            if(this.numberOfScales === 0 && this.spriteShine.scale.x === 0.45){
                console.log(this.numberOfScales, "called ");
                this.whiteParticle.addToContainer(this.container)
                this.addSpriteToContainer(this.spriteSunshine,-1);
                this.isSunshineRotate = true;
                // this.addSpriteToContainer(this.explosion,3);
            }
            if(this.spriteShine.scale.x < 0.55 && this.numberOfScales < 2){
                this.spriteShine.alpha = 0.8;
                this.spriteShine.scale.x += this.scaleStep;
                this.spriteShine.scale.y += this.scaleStep;
                this.spriteShine.scale.x += this.scaleStep;
                this.spriteShine.scale.y += this.scaleStep;
            } else{
                this.isScaleUp = false;
                this.isScaleDown = true;
            }
        }
    }

    scaleDown(){
        if(this.isScaleDown){
            if(this.spriteShine.scale.x > 0.45 && this.numberOfScales < 2){
                this.spriteShine.scale.x -= this.scaleStep;
                this.spriteShine.scale.y -= this.scaleStep;
            }else{
                this.isScaleUp = true;
                this.isScaleDown = false;
                ++this.numberOfScales
                if(this.numberOfScales === 2){
                    this.removeSunshine();
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

    addSpriteToContainer(sprite,zIndex = 0){
        sprite.zIndex = zIndex;
        this.container.addChild(sprite);
    }


    update(dt) {
        if(this.isScaleUp && this.numberOfScales < 2){
            this.scaleUp();
            console.log("scale up true" )
        }
        if(this.isScaleDown && this.numberOfScales < 2){
            this.scaleDown();
            console.log("scale down true")
        }
        if(this.isSunshineRotate){
            this.rotateSunShine();
        }
        if(!this.isAnimate){
            this.removeSunshine();
        }
    }
}