//import { Loader } from "pixi.js";
// import * as PIXI from "pixi.js"
import { Spine } from "pixi-spine";
import { Assets } from '@pixi/assets'
import * as PIXI from 'pixi.js';
import { settings, extensions, ExtensionType } from '@pixi/core';

export default class SpineElement {
    constructor() {

    };

    async getSpine() {

        // PIXI.loader
        //     .add("pixie", "assets/pixie.json", { crossOrigin: true })
        //.load(onAssetsLoaded);
        console.log(settings);
        const spineData = await Assets.load("./assets/pixie.json");
        
        console.log(spineData);
        // test.then((res) => {
        //     console.log(res);
        //     const spineExample = new Spine(res);
        // },
        // (err) => {
        //     console.log(err)
        // });
        // // if (!Loader.shared.resources.pixie.spineData) {
        // //     throw new Error("Pixie spine is not loaded");
        // // }

        // //const spineExample = new Spine(Loader.shared.resources.pixie.spineData);

        const spineExample = new Spine(spineData.loader.resources.pixie.spineData);

        spineExample.scale.set(0.3, 0.3);
        spineExample.y = spineExample.height;
        spineExample.x = spineExample.width / 2;

        spineExample.stateData.setMix("running", "jump", 0.2);
        spineExample.stateData.setMix("jump", "running", 0.4);

        spineExample.state.setAnimation(0, "running", true);

        return spineExample;
    }
}