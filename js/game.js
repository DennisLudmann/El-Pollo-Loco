let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);            // to pass on canvas and keyboard to the world.class

   console.log('My character is', world.character);
   console.log('My character is', world.enemies);
}

window.addEventListener("keydown", (e) => {     // for arrow and "wasd" keys
    if (e.keyCode == 39 || 68) {
        keyboard.RIGHT = true;
    }
 
    if (e.keyCode == 37 || 65) {
        keyboard.LEFT = true;
    }
   
    if (e.keyCode == 38 || 87) {
        keyboard.UP = true;
    }
   
    if (e.keyCode == 40 || 83) {
        keyboard.DOWN = true;
    }
   
    if (e.keyCode == 32) {
        keyboard.JUMP = true;
    }
    if (e.keyCode == 81 || 16) {
        keyboard.THROUGH = true;
    }
   
  
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39 || 68) {
        keyboard.RIGHT = false;
    }
 
    if (e.keyCode == 37 || 65) {
        keyboard.LEFT = false;
    }
   
    if (e.keyCode == 38 || 87) {
        keyboard.UP = false;
    }
   
    if (e.keyCode == 40 || 83) {
        keyboard.DOWN = false;
    }
   
    if (e.keyCode == 32) {
        keyboard.JUMP = false;
    }
    if (e.keyCode == 81 || 16) {
        keyboard.THROUGH = false;
    }
   
  
});