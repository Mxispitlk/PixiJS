import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_MELON} from "../constants/others";
import Background from "../classes/Background";


export default class Melons {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        // this.createButtonBack();
    }

    createBackground(){
        this.background = new Background(BACKGROUND_MELON);
        this.container.addChild(this.background.sprite);
    }
    update(dt) {

    }
}