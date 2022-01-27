import * as PIXI from "pixi.js"
import {buttonGridConfig} from "../constants/buttonGridConfig";
import Button from "./Button";

export default class Popup {
  constructor() {
    this.buttons = [];
    this.container = new PIXI.Container();
    this.createPopUp();
    this.createButtons();
    }

  createPopUp(){
    this.graphic = new PIXI.Graphics();
    const width = 800;
    const height = 200;
    const x = window.innerWidth / 2 - width / 2;
    const y = window.innerHeight / 2 - height / 2;
    this.graphic.beginFill(0x000000, 0.7);
    this.graphic.drawRoundedRect(x, y, width, height,15);
    this.graphic.endFill();
    this.container.addChild(this.graphic);
  }

  createButtons(){
    this.createTextStyles();
    buttonGridConfig.forEach(btnData=>{
      this.createButton(btnData.x,btnData.y,btnData.text,btnData.id)
    })
  }
// 0x9bcfbe,0x389477
  createButton(x,y,text,id){
    const width = 200;
    const height = 40;
    const btnX = (window.innerWidth / 2)  - (width / 2) - x;
    const btnY = (window.innerHeight / 2) - (height / 2) - y;
    const button = new Button(btnX,btnY,text,id,width,height,this.textStyles,0x9bcfbe,0x389477,0.5,1,0x000000);
    this.buttons.push(button);
    this.container.addChild(button.container);
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
}