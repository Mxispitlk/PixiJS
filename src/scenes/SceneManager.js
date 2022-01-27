import * as PIXI from "pixi.js";
import {Globals} from "../globalVariables/globals";
import {DEVIL_ID,MELONS_ID,DIAMONDS_ID} from "../constants/others";
import Diamonds from "./Diamonds";
import Devil from "./Devil";
import Melons from "./Melons";
import MainScene from "./MainScene";

export class SceneManager {
    constructor() {
        this.container = new PIXI.Container();
        this.scene = null;
    }

   startScene(sceneId) {
        const newScene = this.returnNewScene(sceneId);
        console.log("scene started",newScene);
        if (this.scene) {
            this.scene.container.destroy();
        }
        this.scene = newScene;
        this.container.addChild(this.scene.container);
    }

    returnNewScene(id){
      if(id === DIAMONDS_ID){
        return new Diamonds();
      }
      if(id === DEVIL_ID){
        return new Devil();
      }
      if(id === MELONS_ID){
        return new Melons();
      }
      return new MainScene();
    }

    update(dt,deltaMs) {
    //   setTimeout(()=>
    //   Globals.ticker.stop()
    //
    // ,1000);
    //   setTimeout(()=>
    //       Globals.ticker.start()
    //   ,2000)
    //     console.log(deltaMs);
        if (this.scene && this.scene.update) {
            this.scene.update(dt);
        }
    }
}