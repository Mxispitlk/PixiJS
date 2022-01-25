import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import { BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import DiamondsGrid from "../classes/DiamondsGrid";


export default class Diamonds {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack("Back",200,100);
        this.createButtonBack("Start",1700,100);
        this.createButtonStartAnimate();
        this.createDiamondGrid();
    }

    createButtonStartAnimate(){

    }

    createBackground(){
        const texture = new PIXI.Sprite(globals.resources[BACKGROUND_DIAMONDS].texture);
        this.bg = new Background(texture,1.0);
        this.container.addChild(this.bg.container);
    }

    createButtonBack(text,x,y){
        this.button = new Button( text,x,y);
        this.container.addChild(this.button.container);
    }

    createDiamondGrid() {
        this.diamondGrid = new DiamondsGrid();
        this.container.addChild(this.diamondGrid.container);

    }

    update(dt) {
        this.diamondGrid.update(dt);
    }



}