import * as PIXI from "pixi.js";
import { Loader } from "../loader/Loader";
import MainScene  from "../scenes/MainScene"
import { globals } from "../globalVariables/globals";
import { SceneManager } from "../scenes/SceneManager";
import Diamonds from "../scenes/Diamonds";

export class App {
    run() {
        // Devtools
        window.PIXI = PIXI;
        // create canvas
        this.app = new PIXI.Application({resizeTo:window});
        document.body.appendChild(this.app.view);

        // add global scene manager to app stage
        globals.scene = new SceneManager();
        this.app.stage.addChild(globals.scene.container);

        // Setup ticker for update application
        this.app.ticker.add(dt => globals.scene.update(dt,this.app.ticker.elapsedMS));


        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {
            globals.scene.startScene(new MainScene());
        });
    }
}