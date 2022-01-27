import * as PIXI from "pixi.js";
import { Loader } from "../loader/Loader";
import MainScene from "../scenes/MainScene";
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
        Globals.scene = new SceneManager();
        this.app.stage.addChild(Globals.scene.container);

        // Setup ticker for update application
        this.app.ticker.add(dt => Globals.scene.update(dt,this.app.ticker.elapsedMS));
        Globals.ticker = this.app.ticker;


        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            Globals.scene.startScene(new MainScene());
        });
    }
}