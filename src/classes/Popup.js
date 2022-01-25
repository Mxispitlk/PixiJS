import * as PIXI from "pixi.js"
import ButtonGrid from "./ButtonGrid";

export default class Popup {
    constructor(width,height) {
        this.container = new PIXI.Container();
        this.createPopup(width,height);
        this.createButtonGrid();
    }

    createPopup(width,height){
        this.popup = new PIXI.Graphics();
        const x = window.innerWidth / 2 - width / 2;
        const y = window.innerHeight / 2 - height / 2;
        this.popup.beginFill(0x000000,0.5);
        this.popup.drawRoundedRect(x,y,width,height);
        this.popup.endFill();
        this.container.addChild(this.popup);
    }

    createButtonGrid(){
        this.buttonGrid = new ButtonGrid();
        this.container.addChild(this.buttonGrid.container)
    }
}