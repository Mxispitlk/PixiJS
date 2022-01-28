import * as PIXI from "pixi.js"
import {DIAMONDS_ID, START, START_ID} from "../constants/others";
import {Globals} from "../globalVariables/globals";

export default class Button {
  constructor(x,y,text,id,width,height,styles,color,outlineColor,alpha,alphaHover,hoverColor) {
    this.color = color;
    this.outlineColor = outlineColor;
    this.hoverColor = hoverColor;
    this.alpha = alpha;
    this.alphaHover = alphaHover;
    this.container = new PIXI.Container();
    this.width = width;
    this.height = height
    this.id = id;
    this.text = text;
    this.x = x;
    this.y = y;
    this.styles = styles;
    this.container.sortableChildren = true;
    this.createButton();
    this.createText();
  }

  createText(){
    this.text = new PIXI.Text(this.text,this.styles);
    this.text.x = this.x + this.width / 2 ;
    this.text.y = this.y + this.height / 2;
    this.text.anchor.set(0.5);
    this.text.zIndex = 1 ;
    this.container.addChild(this.text);
  }

  createButton(){
    this.button = new PIXI.Graphics();
    this.button.interactive = true;
    this.button.buttonMode = true;
    this.button.on("mouseover",()=>this.handleMouseOver());
    this.button.on("mouseout",()=>this.handleMouseOut());
    this.button.on("click",()=>this.handleClick(this.id));
    this.fillButton(this.color,this.alpha);
    this.container.addChild(this.button);
  }

  handleClick(id){
    if(id !== START_ID){
      Globals.sceneManager.startScene(this.id);
    }else{
      Globals.sceneManager.actualScene.container.emit("start");
    }
  }

  handleMouseOver(){

    this.fillButton(this.hoverColor,this.alphaHover);
  }

  handleMouseOut(){
    this.button.clear();
    this.fillButton(this.color,this.alpha);
  }

  fillButton(color,alpha){
    this.button.lineStyle(3,this.outlineColor);
    this.button.beginFill(color,alpha);
    this.button.drawRoundedRect(this.x,  this.y, this.width, this.height, 15);
    this.button.endFill();
  }
}

