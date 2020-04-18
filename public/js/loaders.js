import SpriteSheet from "./SpriteSheet.js";
import Player from "./Player.js";
import Vec2D from "./math.js";
import Settings from "./Settings.js";

export function loadLevel(level){
    return fetch(`levels/${level}.json`).then(r => r.json());
}
export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })
}

export function loadBuster(image,playerSpec) {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('buster', 1, 0);
    sprites.define('buster-1', 2, 0);
    sprites.define('buster-2', 3, 0);
    sprites.define('buster-3', 4, 0);


    const pos = new Vec2D(playerSpec.pos[0], playerSpec.pos[1]);
    // const pos = new Vec2D(50, 150);
    const size = new Vec2D(32, 32);

    return new Player(size, pos, sprites);
}
