import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {BACKGROUND_DEVIL, BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";

export default class Devil {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack();
    }

    createBackground(){
        const texture = new PIXI.Sprite(globals.resources[BACKGROUND_DEVIL].texture);
        this.bg = new Background(texture,0.8);
        this.container.addChild(this.bg.container);
    }

    createButtonBack(){
        this.button = new Button( "Back",200,100);
        this.container.addChild(this.button.container);
    }

    update(dt) {

    }
}