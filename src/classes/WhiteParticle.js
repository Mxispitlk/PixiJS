import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {WHITE_PARTICLE} from "../constants/diamon";

export default class WhiteParticle {
    constructor(x,y) {
        this.sprite = new PIXI.Sprite(globals.resources[WHITE_PARTICLE].texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.zIndex = 10;
    }
    addToContainer(container){
        container.addChild(this.sprite) ;
        console.log(this.sprite,"container addig");
    }
    removeFromContainer(container){
        container.remove(this.sprite);
    }
    changeVisibility(value){
        this.sprite.visible = value;
    }

    moveToCoordinates(x,y){

    }

}