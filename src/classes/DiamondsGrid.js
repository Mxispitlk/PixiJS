import * as PIXI from "pixi.js"
import {diamondGridConfig} from "../constants/diamondGridConfig";
import AnimateDiamond from "./AnimateDiamond";

export default class DiamondsGrid {
    constructor() {
        this.animateDiamonds = [];
        this.container = new PIXI.Container();
        this.createDiamonds();
    }

    fireEvent(){
      this.animateDiamonds.forEach(diamond=>{
        diamond.container.emit("runAnimation");
      });
    }

    createDiamonds(){
        diamondGridConfig.forEach(diamondProps=>{
                const animateDiamond = new AnimateDiamond(diamondProps.x,diamondProps.y);
                this.animateDiamonds.push(animateDiamond);
                this.container.addChild(animateDiamond.container);
            })
    }

    update(dt) {
        this.animateDiamonds.forEach(diamond=>{
            diamond.update(dt);
        })
    }
}