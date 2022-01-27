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


export default class Diamonds {
    constructor() {
      this.container = new PIXI.Container();
      this.container.interactive = true;
      this.createBackground();
      this.createButtons();
      this.createDiamond();
      this.createDiamondSunshine();
      this.createExplosion();
      this.createDiamondOverlay();
      this.actualTime = 0;
      this.isAnimating = false;
      this.container.sortableChildren = true;
      this.isSunshinePresent = false;
      this.addListeners();
     }

    createDiamondOverlay(){
      this.diamondOverlay = new DiamondOverlay();

    }

     createExplosion(){
      this.explosion = new Explosion(10 ,20);
      // this.container.addChild(this.explosion.sprite);
    }

    createDiamondSunshine(){
      this.diamondSunshine = new DiamondSunshine(5,80);
    }

     createDiamond(){
      this.diamond = new Diamond(40,60,60,80);
      this.container.addChild(this.diamond.sprite);
    }

    createDiamondShine(){
      this.diamondShine = new DiamondShine(20,40);
      this.container.addChild(this.diamondShine.sprite);
    }

     addListeners(){
       this.container.on("start", () => {
         this.resetToDefault();
         this.isAnimating = true;

         this.diamond.isScalingUp= true;
         this.diamondShine.isScalingUp = true;
         this.container.addChild(this.diamondOverlay.sprite);
       });


     }
     resetToDefault(){
       this.isSunshinePresent = false;
       this.actualTime = 0;
       this.createDiamondShine();
       this.createDiamondSunshine();
       this.createExplosion();
       this.createDiamondOverlay()
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
        this.actualTime += dt;
        this.diamond.update(dt,this.actualTime);
        this.diamondShine.update(dt,this.actualTime);
        this.diamondSunshine.update(dt,this.actualTime);
        this.explosion.update(dt,this.actualTime);
        if(this.actualTime >= 5 && !this.isSunshinePresent){
          this.isSunshinePresent = true;
          this.container.addChild(this.diamondSunshine.sprite);
          this.diamondSunshine.isRotating = true;
        }
        if(this.actualTime >= 8 && this.actualTime < 15 && !this.explosion.isExploding){
          this.explosion.isExploding = true;
          this.container.addChild(this.explosion.sprite);

        }
        if(this.actualTime >= 70){
          this.container.removeChild(this.diamondOverlay.sprite);
        }
      }

    }
}