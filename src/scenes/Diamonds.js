import * as PIXI from "pixi.js"
import { BACKGROUND_DIAMONDS} from "../constants/others";
import Background from "../classes/Background";
import { START,BACK,BACK_ID,START_ID } from "../constants/others";
import Button from "../classes/Button";
import Diamond from "../classes/Diamond";
import DiamondShine from "../classes/DiamondShine";
import DiamondSunshine from "../classes/DiamondSunshine";
import Explosion from "../classes/Explosion";
import DiamondOverlay from "../classes/DiamondOverlay";
import WhiteParticle from "../classes/WhiteParticle";
import DiamondWithShine from "../classes/DiamondWithShine";
import {diamondGridConfig} from "../constants/diamondGridConfig";


export default class Diamonds {
    constructor() {
      this.diamondsWithShine = [];
      this.container = new PIXI.Container();
      this.container.interactive = true;
      this.createBackground();
      this.createButtons();
      this.createDiamondsWithShine()
      this.isAnimating = false;
      // this.createDiamond();
      // this.createDiamondSunshine();
      // this.createExplosion();
      // this.createDiamondOverlay();
      // this.createWhiteParticles();
      // this.actualTime = 0;
      // this.isAnimating = false;
      // this.container.sortableChildren = true;
      // this.isSunshinePresent = false;
      // this.isFirstParticle = false;
      this.addListeners();
     }

  createDiamondsWithShine(){
    diamondGridConfig.forEach(dp=>{
      this.createDiamondWithShine(dp.x,dp.y)
    })
  }


  createDiamondWithShine(x,y){
      const diamondWithShine = new DiamondWithShine(x,y);
      this.diamondsWithShine.push(diamondWithShine);
      this.container.addChild(diamondWithShine.container);
  }



     addListeners() {
       this.container.on("start", () => {
         console.log("start animation");
         this.isAnimating = true;
         this.diamondsWithShine.forEach(diamond => diamond.actualTime = 0)
         console.log("isAnimating :", this.isAnimating)
         // this.isFirstParticle = true;
         // this.diamond.isScalingUp= true;
         // this.diamondShine.isScalingUp = true;
         // this.container.addChild(this.diamondOverlay.sprite);
       });
     }

     createButtons(){
       this.createButtonBack();
       this.createButtonStart();
     }

    createButtonStart(){
      this.createTextStyles();
      this.buttonStart = new Button(1650,100,START,START_ID,150,40,this.textStyles,0x9bcfbe,0xb50e33,0.5,1,0xcc788b);
      this.container.addChild(this.buttonStart.container)
    }

     createButtonBack(){
        this.createTextStyles();
        this.buttonBack = new Button(100,100,BACK,BACK_ID,150,40,this.textStyles,0x9bcfbe,0xb50e33,0.5,1,0xcc788b);
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
      if(this.isAnimating){
        this.diamondsWithShine.forEach(diamond=>{
          diamond.update(dt,this.isAnimating);
        })

      }


    }
}