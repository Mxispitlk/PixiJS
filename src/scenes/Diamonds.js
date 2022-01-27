import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import { BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import DiamondsGrid from "../classes/DiamondsGrid";
import { START,BACK } from "../constants/others";


export default class Diamonds {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack(BACK,200,100);
        this.createButtonStartAnimate(START,1700,100);
        // this.createDiamondGrid();

    }

    fireGrid(){
        this.diamondGrid.fireEvent();
    }

    createButtonStartAnimate(text,x,y){
        this.buttonStart = new Button( text,x,y);
        this.container.addChild(this.buttonStart.container);
    }

    createBackground(){
        const texture = new PIXI.Sprite(globals.resources[BACKGROUND_DIAMONDS].texture);
        this.bg = new Background(texture,1.0);
        this.container.addChild(this.bg.container);
    }

    createButtonBack(text,x,y){
        this.buttonBack = new Button( text,x,y);
        this.container.addChild(this.buttonBack.container);
    }

    createDiamondGrid() {
        this.diamondGrid = new DiamondsGrid();
        this.container.addChild(this.diamondGrid.container);
    }

    update(dt) {
        this.diamondGrid.update(dt);
    }
}