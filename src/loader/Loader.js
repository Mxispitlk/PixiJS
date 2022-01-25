import { loaderConfig } from "../globalVariables/loaderConfig";
import { globals } from "../globalVariables/globals";


export class Loader {
    constructor(loader) {
        this.loader = loader;
        this.resources = loaderConfig;
    }

    preload() {
        return new Promise(resolve => {
            for (let key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((loader, resources) => {
                globals.resources = resources;
                resolve();
            });
        });
    }
}