import * as PIXI from "pixi.js"
import {BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import {START, BACK, BACK_ID, START_ID} from "../constants/others";
import Button from "../classes/Button";
import DiamondWithShine from "../classes/DiamondWithShine";
import {diamondGridConfig} from "../constants/diamondGridConfig";


export default class Diamonds {
    constructor() {
        this.diamondsWithShine = [];
        this.container = new PIXI.Container();
        this.container.sortableChildren = true;
        this.container.interactive = true;
        this.createBackground();
        this.createButtons();
        this.createDiamondsWithShine()
        this.isAnimating = false;
        this.addListeners();
        this.actualTime = 0;
        // this.scale();
    }


    // scale(){
    //     this.container.scale.x =1;
    //     this.container.scale.y =1;
    // }

    createDiamondsWithShine() {
        diamondGridConfig.forEach(dp => {
            this.createDiamondWithShine(dp.x, dp.y)
        })
    }


    createDiamondWithShine(x, y) {
        const diamondWithShine = new DiamondWithShine(x, y);
        this.diamondsWithShine.push(diamondWithShine);
        this.container.addChild(diamondWithShine.container);
    }


    addListeners() {
        this.container.on("start", () => {
            this.isAnimating = true;
            this.diamondsWithShine.forEach(diamond => {
                diamond.isFirstScale = true;
                diamond.actualTime = 0
            })
        });
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

    createBackground() {
        this.bg = new Background(BACKGROUND_DIAMONDS);
        this.container.addChild(this.bg.sprite);
        this.container.addChild(this.bg.bgOverlay);
    }

    update(dt) {
        if (this.isAnimating) {
            this.actualTime += dt;
            this.bg.update(dt)
            this.diamondsWithShine.forEach(diamond => {
                diamond.update(dt, this.isAnimating);
            })
        }
        if(this.actualTime > 60){
            this.isAnimating = false;
            this.actualTime = 0;
        }
    }
}