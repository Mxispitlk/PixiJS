import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {EXPLOSION_PARTICLE} from "../constants/diamon";

export default class Explosion {
    constructor(x,y) {
        this.sprite = new PIXI.Sprite(globals.resources[EXPLOSION_PARTICLE].texture);
        this.isScaleUp = false;
        this.isExploading = false;
        this.scaleStep = 0.005;
        this.setExplosionProps(x,y);
    }

    setExplosionProps(x,y){
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.scale.set(0.3);
        this.sprite.zIndex = 5;
    }

    addExplosionToContainer(container){
        container.addChild(this.sprite);
        this.isExploading = true;
    }

    scaleUp(){
        if(this.sprite.scale.x < 0.5){
            this.sprite.scale.x += this.scaleStep;
            this.sprite.scale.y += this.scaleStep;
        }else{
            this.removeFromContainer(container);
        }
    }

    removeFromContainer(container){
        container.remove(this.sprite);
        this.isExploading = false;
    }

    update(dt){
        if(this.scaleUp){

        }

    }

}