import SpriteSheet from './SpriteSheet.js';
import {loadBuster, loadImage, loadLevel} from "./loaders.js";
import Keyboard from "./Keyboard.js";
import Settings from "./Settings.js";
import setupKeyboard from "./input.js";
import setupSockets from "./sockets.js";


const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

canvas.width = Settings.SCREEN_WIDTH;
canvas.height = Settings.SCREEN_HEIGHT;

window.onload = setupSockets;

Promise.all([loadImage("img/spritesBuster.png"), loadLevel(1)])
    .then(([image, levelSpec]) => {

        const buster = loadBuster(image, levelSpec.player);
        let deltatime = 0;
        let lastTime = 0;
        function update(time) {
            deltatime = time - lastTime;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.strokeRect(0,0,canvas.width,canvas.height);
            buster.draw(context);
            buster.update(deltatime/1000);
            lastTime = time;
            requestAnimationFrame(update);
        }

        const input = setupKeyboard(buster);
        input.listenTo(window);



        update(0);

    });
