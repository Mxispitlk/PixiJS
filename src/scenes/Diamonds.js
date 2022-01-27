import * as PIXI from "pixi.js"
import {Globals} from "../globalVariables/globals";
import { BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import { START,BACK } from "../constants/others";
import Button from "../classes/Button";


export default class Diamonds {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createButtonBack();
     }
  // const button = new Button(btnX,btnY,text,id,width,height,this.textStyles,0x9bcfbe,0x389477,0.5,1,0x000000);
     createButtonBack(){
        this.createTextStyles();
        this.buttonBack = new Button(100,100,BACK,"back_id",150,40,this.textStyles,0x9bcfbe,0xb50e33,0.5,1,0xcc788b);
        this.container.addChild(this.buttonBack.container)
     }

    createTextStyles(){
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
    }
    update(dt) {

    }
}