import * as PIXI from "pixi.js"
import Background from "../classes/Background";
import Popup from "../classes/Popup";
import {globals} from "../globalVariables/globals";
import {BACKGROUND} from "../constants/others";

export default class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPopup(800,200);
    }

    createBackground(){
        const texture = new PIXI.Sprite(globals.resources[BACKGROUND].texture);
        this.bg = new Background(texture,1.5);
        this.container.addChild(this.bg.container);
    }

    createPopup(width,height){
        this.popup = new Popup(width,height);
        console.log(this.popup);

        this.container.addChild(this.popup.container);
    }


    update(dt) {
        // this.popup.container.x -= 5;
        // console.log("update called")
    }
}