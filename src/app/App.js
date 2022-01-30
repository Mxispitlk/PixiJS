import * as PIXI from "pixi.js";
import { Loader } from "../loader/Loader";
import {MELONS_ID} from "../constants/others";
import { Globals } from "../globalVariables/globals";
import { SceneManager } from "../scenes/SceneManager";

export class App {
    run() {
        // Devtools
        window.PIXI = PIXI;
        // create canvas
        this.app = new PIXI.Application({resizeTo:window});
        document.body.appendChild(this.app.view);

        // add global scene manager to app stage
        Globals.sceneManager = new SceneManager();
        this.app.stage.addChild(Globals.sceneManager.container);
        // Setup ticker for update application
        this.app.ticker.add(dt => Globals.sceneManager.update(dt));
        Globals.ticker = this.app.ticker;


        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            Globals.sceneManager.startScene("main");
        });
    }
}