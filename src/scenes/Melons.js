import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import {BACK, BACK_ID, BACKGROUND_MELON, START, START_ID} from "../constants/others";
import Background from "../classes/Background";
import Button from "../classes/Button";
import MelonsMain from "../classes/melons/MelonsMain";


export default class Melons {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack();
        this.createButtonStart();
        this.createMelonsMain();
    }

    createMelonsMain(){
        this.melonsMain = new MelonsMain()
        this.container.addChild(this.melonsMain.container);
    }

    createButtonStart() {
        this.createTextStyles();
        this.buttonStart = new Button(1650, 100, START, START_ID, 150, 40, this.textStyles, 0x845656, 0xFFFFFF, 0.5, 1, 0xaa9898);
        this.container.addChild(this.buttonStart.container)
    }

    createButtonBack() {
        this.createTextStyles();
        this.buttonBack = new Button(100, 100, BACK, BACK_ID, 150, 40, this.textStyles, 0x845656, 0xFFFFFF, 0.5, 1, 0xaa9898);
        this.container.addChild(this.buttonBack.container)
    }

    createTextStyles() {
        this.textStyles = new PIXI.TextStyle({
            fontFamily: 'Roboto',
            fill: ['#FFFFFF'],
            stroke: '#004620',
            fontSize: 20,
            fontWeight: 'lighter',
        })
    }

    createBackground(){
        this.background = new Background(BACKGROUND_MELON);
        this.container.addChild(this.background.sprite);
    }
    update(dt) {
        this.melonsMain.update(dt);
    }
}