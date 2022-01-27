import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_DEVIL,} from "../constants/others";
import Background from "../classes/Background";


export default class Devil {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        // this.createButtonBack();
    }

    createBackground(){
        this.background = new Background(BACKGROUND_DEVIL);
        this.container.addChild(this.background.sprite);
    }

    // createButtonBack(){
    //     this.button = new Shapes( "Back",200,100);
    //     this.container.addChild(this.button.container);
    // }

    update(dt) {

    }
}