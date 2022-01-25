import * as PIXI from "pixi.js"
import {buttonGridConfig} from "../constants/buttonGridConfig";
import Button from "./Button";
export default class ButtonGrid {
    constructor() {
        this.buttons = [];
        this.container = new PIXI.Container();
        this.container.x = window.innerWidth / 2;
        this.container.y = window.innerHeight / 2;
        this.createButtons();
    }

    createButtons(){
        buttonGridConfig.forEach(data=>{
            const button = new Button(data.text,data.x,data.y);
            this.container.addChild(button.container);
            this.buttons.push(button);
        })
    }

    update(dt) {

    }
}