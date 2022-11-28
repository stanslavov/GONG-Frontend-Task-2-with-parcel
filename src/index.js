// import { Application, Loader } from "pixi.js";
import Button from './button.js';
import SpineElement from './spine.js';
import { Assets } from '@pixi/assets'

import * as PIXI from "pixi.js";

const gameWidth = 800;
const gameHeight = 600;

const app = new PIXI.Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
});

window.onload = async () => {
    document.body.appendChild(app.view);

    const button = new Button();
    const btn = button.createButton();
    
    const spine = new SpineElement();
    const spineExample = await spine.getSpine();
    // const spineExample = btn.onclick = function () {
    //     return spine.getSpine();
    // };
    spineExample.position.y = 580;

    app.stage.addChild(spineExample);
    app.stage.interactive = true;
};