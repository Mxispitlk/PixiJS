import * as PIXI from "pixi.js"

export default class Background {
    constructor(sprite,scale) {
        this.container = new PIXI.Container();
        this.createBackground(sprite,scale);
    }

    createBackground(sprite,scale){
        sprite.anchor.set(0.5);
        sprite.scale.set(scale);
        sprite.x = window.innerWidth / 2;
        sprite.y = window.innerHeight / 2;
        this.container.addChild(sprite);
    }

}