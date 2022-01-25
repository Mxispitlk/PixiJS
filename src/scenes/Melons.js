import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import {BACKGROUND_MELON} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";

export default class Melons {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack();
    }

    createBackground(){
        const texture = new PIXI.Sprite(globals.resources[BACKGROUND_MELON].texture);
        this.bg = new Background(texture,2.0);
        this.container.addChild(this.bg.container);
    }

    createButtonBack(){
        this.button = new Button( "Back",200,100);
        this.container.addChild(this.button.container);
    }
    update(dt) {

    }
}