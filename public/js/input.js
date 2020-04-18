import Keyboard from "./Keyboard.js";

export default  function  setupKeyboard(buster){

    const input =new Keyboard(buster);

    ['ArrowUp','ArrowDown','ArrowRight','ArrowLeft'].forEach( botoia => {
        input.addMapping(botoia, keyState => {
            console.log(keyState);
        });


    });
    return input;
}