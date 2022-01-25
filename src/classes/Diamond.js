import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {
    DIAMOND_OVERLAY,
    DIAMOND_SHINE,
    DIAMOND_SUNSHINE,
    EXPLOSION_PARTICLE, ONE_PARTICLE,
    SYMBOL_DIAMOND, WHITE_PARTICLE
} from "../constants/diamon";

export default class Diamond {
    constructor(x,y) {
        this.container = new PIXI.Container();
        this.scale = 0.45;
        this.scaleStep = 0.007;
        this.container.sortableChildren = true;
        this.diamond = new PIXI.Sprite(globals.resources[SYMBOL_DIAMOND].texture);
        this.setDiamondCoordinates(x,y,this.diamond);
        this.addListener();

    }

    addListener(){
        this.diamond.on("doAnimate", ()=>{
            console.log(this.diamond,"I do animate catched")
        })
    }

    createDiamond(){
        this.container.addChild(this.diamond);
    }


    doAnimate(x,y){
        this.overlay = new PIXI.Sprite(globals.resources[DIAMOND_OVERLAY].texture);
        this.setDiamondCoordinates(x,y,this.overlay);

        this.diamondShine = new PIXI.Sprite(globals.resources[DIAMOND_SHINE].texture);
        this.setDiamondCoordinates(x,y,this.diamondShine);
        this.diamondSunshine = new PIXI.Sprite(globals.resources[DIAMOND_SUNSHINE].texture)
        this.setDiamondCoordinates(x,y,this.diamondSunshine);
        this.diamondSunshine.zIndex = -1
        this.explosion = new PIXI.Sprite(globals.resources[EXPLOSION_PARTICLE].texture)
        this.explosion.zIndex=1;
        this.setDiamondCoordinates(x,y,this.explosion);
        // this.redParticle = new PIXI.Sprite(globals.resources[ONE_PARTICLE].texture)
        // this.white = new PIXI.Sprite(globals.resources[WHITE_PARTICLE].texture)


        // this.container.addChild(this.overlay,this.diamondShine);

    }

    rotateSunShine(){
        this.diamondSunshine.rotation += 0.001;
    }

    async scaleUp(){
        this.diamond.scale.set(this.diamond.scale+this.scaleStep)
    }


    setDiamondCoordinates(x,y,sprite) {
        sprite.anchor.set(0.5);
        sprite.x = window.innerWidth / 2 + x;
        sprite.y = window.innerHeight / 2 + y;
        sprite.scale.set(this.scale);
        this.container.addChild(sprite);
    }





    update(dt) {
        // this.rotateSunShine();
    }
}