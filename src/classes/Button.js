import * as PIXI from "pixi.js"
import {globals} from "../globalVariables/globals";
import Diamonds from "../scenes/Diamonds";
import {MELON, DEVIL, DIAMONDS, START} from "../constants/others";
import Melons from "../scenes/Melons";
import Devil from "../scenes/Devil";
import MainScene from "../scenes/MainScene";

export default class Button {
    constructor(text,x,y) {
        this.container = new PIXI.Container();
        this.name = text;
        this.container.x = x
        this.container.y = y
        this.createButton();
        this.createText(text);
    }

    createButton(){
        this.button = new PIXI.Graphics();
        this.button.on("mouseover",()=>this.handleMouseOver());
        this.button.on("mouseout",()=>this.handleMouseOut());
        this.button.on("click",(e)=>this.handleClick());
        this.button.lineStyle(3,0xFFFFFF);
        this.button.beginFill(0xFFFFFF,1);
        this.button.drawRoundedRect(0, 0, 200, 40, 15);
        this.button.endFill();
        this.button.alpha = 0.5
        this.button.position.x = (this.container.width / 2) - (this.button.width / 2);
        this.button.position.y = (this.container.height / 2) - (this.button.height / 2);
        this.setGraphicInteractive(this.button);
        this.container.addChild(this.button);
    }

    handleMouseOut(){
        this.button.alpha = 0.5
    }

    handleClick(){
        if(this.name === DIAMONDS){
            globals.scene.startScene(new Diamonds());
        }else if( this.name === DEVIL){
            globals.scene.startScene(new Devil());
        }else if( this.name === MELON){
            globals.scene.startScene(new Melons());
        }else if( this.name === START){
            globals.scene.doAnimate();
        }else{
            globals.scene.startScene(new MainScene());
        }
    }

    handleMouseOver(){
        this.button.alpha = 0.8

    }

    setGraphicInteractive(graphic) {
        graphic.interactive = true;
    }

    createText(text){
        this.styles = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        });

        this.text = new PIXI.Text(text,this.styles);
        this.text.anchor.set(0.5);
        this.container.addChild(this.text);
    }


    update(dt) {

    }
}