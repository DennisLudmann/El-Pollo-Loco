let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);            // to pass on canvas and keyboard to the world.class 
    clearCanvas();
    showButton();
   
}

/*
function mutePage() {

let vid = document.getElementById('body');
vid.volume = 0;
}
*/

function fullScreen() {
    canvas.requestFullscreen();
    
}

function clearCanvas() {
    document.getElementById('canvas').style.background = "none";    // remove background img so it doesnt show
    let e = document.getElementById('endscreen');
    e.classList.remove('game-over');
}

function showButton() {
    let e = document.getElementById('fullscreen');
    e.classList.remove('d-none');
  }

// detect keyboard interaction for controls 
window.addEventListener("keydown", (e) => {     // for arrow and "wasd" keys
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = true;

    }
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.JUMP = true;
    }
    if (e.keyCode == 81 || e.keyCode == 16) {
        keyboard.THROUGH = true;
    }

});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = false;

    }
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.JUMP = false;
    }
    if (e.keyCode == 81 || e.keyCode == 16) {
        keyboard.THROUGH = false;
    }

});