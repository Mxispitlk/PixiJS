import * as PIXI from "pixi.js"
import Diamond from "./Diamond";
import {diamondGridConfig} from "../constants/diamondGridConfig";

export default class DiamondsGrid {
    constructor() {
        this.diamonds = [];
        this.container = new PIXI.Container();
        this.createDiamonds();
    }

    createDiamonds(){
        diamondGridConfig.forEach(diamondProps=>{
                const diamond = new Diamond(diamondProps.x,diamondProps.y);
                this.diamonds.push(diamond);
                console.log(diamond);
                this.container.addChild(diamond.container);
            })
        console.log(this.diamonds);
        }

    update(dt) {
        this.diamonds.forEach(diamond=>{
            diamond.update(dt);
        })
    }
}