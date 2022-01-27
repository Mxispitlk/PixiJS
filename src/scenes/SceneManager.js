import * as PIXI from "pixi.js";
import {Globals} from "../globalVariables/globals";
import {DEVIL_ID, MELONS_ID, DIAMONDS_ID, START_ID} from "../constants/others";
import Diamonds from "./Diamonds";
import Devil from "./Devil";
import Melons from "./Melons";
import MainScene from "./MainScene";

export class SceneManager {
    constructor() {
        this.container = new PIXI.Container();
        this.actualScene = null;
    }

   startScene(sceneId) {
      const newScene = this.returnNewScene(sceneId);
      if (this.actualScene) {
        this.actualScene.container.destroy();
      }
      this.actualScene = newScene;
      this.container.addChild(this.actualScene.container);
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

    update(dt) {
        if (this.actualScene && this.actualScene.update) {
            this.actualScene.update(dt);
        }
    }
}