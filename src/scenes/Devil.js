import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACKGROUND_DEVIL,} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import {BACK,START,START_ID,BACK_ID} from "../constants/others";


export default class Devil {
    constructor() {
        this.container = new PIXI.Container();
        this.isAnimating = false;
        this.createBackground();
        this.createButtons();
        this.addListener()
    }

    addListener() {
        this.container.on("start", () => {
            console.log("cathed")

        });
    }

    createBackground(){
        this.background = new Background(BACKGROUND_DEVIL);
        this.container.addChild(this.background.sprite);
    }

    createButtons() {
        this.createButtonBack();
        this.createButtonStart();
    }

    createButtonStart() {
        this.createTextStyles();
        this.buttonStart = new Button(1650, 100, START, START_ID, 150, 40, this.textStyles, 0x9bcfbe, 0xb50e33, 0.5, 1, 0xcc788b);
        this.container.addChild(this.buttonStart.container)
    }

    createButtonBack() {
        this.createTextStyles();
        this.buttonBack = new Button(100, 100, BACK, BACK_ID, 150, 40, this.textStyles, 0x9bcfbe, 0xb50e33, 0.5, 1, 0xcc788b);
        this.container.addChild(this.buttonBack.container)
    }

    createTextStyles() {
        this.textStyles = new PIXI.TextStyle({
            fontFamily: 'Roboto',
            fill: ['#ffffff'],
            stroke: '#004620',
            fontSize: 20,
            fontWeight: 'lighter',
        })
    }

    update(dt) {

    }
}