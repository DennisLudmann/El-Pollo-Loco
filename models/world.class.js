class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    // coinBar = new CoinBar();     doesnt add any value to current game
    throwableObjects = [];
    bottlesCollected;
    gameIsRunning = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;                   // to pass the details to the canvas outside the function
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;      //passing world variables to character fx "keyboard"
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowableObjects();
            this.gameOver();
        }, 200);
    }

    gameOver() {
        if (this.character.hitPoints == 0) {
            setTimeout(() => {
                this.gameIsRunning = false;
                this.endScreen();
            }, 2500);
           
        }
    }

    endScreen() {
        let e = document.getElementById("endscreen");
        e.classList.add("game-over");
    }

    checkThrowableObjects() {
        if (this.keyboard.THROUGH && this.character.totalBottles > 0) {     // only throw when you have a bottle collected
            this.character.isThrown();
            let bottle = new ThrowableObjects(this.character.x + 55, this.character.y + 150);
            this.throwableObjects.push(bottle);
            this.bottleBar.setTotalbottles(this.character.totalBottles);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.isHit();
                this.statusBar.setPercentage(this.character.hitPoints);
            }
        });
        this.level.bottles.forEach(bottle => {          // remove collectables only when colliding
            if (this.character.totalBottles < 5) {      // dont collect when full
                if (this.character.isColliding(bottle)) {
                    this.character.isCollected();
                    this.bottleBar.setTotalbottles(this.character.totalBottles)
                    let index = this.level.bottles.indexOf(bottle);
                    this.level.bottles.splice(index, 1);
                }
            }
        });
        this.level.hearts.forEach(heart => {          // remove collectables only when colliding
            if (this.character.hitPoints < 100) {       // dont collect when full
                if (this.character.isColliding(heart)) {
                    this.character.isHealed();
                    this.statusBar.setPercentage(this.character.hitPoints)
                    let index = this.level.hearts.indexOf(heart);
                    this.level.hearts.splice(index, 1);
                }
            }
        });
        /*   this.world.throwableObjects.forEach(throwableObjects => {
               if (this.enemies.isColliding(enemy)) {
                   this.character.isHit();
                   this.statusBar.setPercentage(this.character.hitPoints)
               }
           });*/
    }

    setBackgroundObjects() {
        this.backgroundObjects
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

        }
    }

    draw() {
        if (this.gameIsRunning == true) {                                                  //pay attention to the order the objects will be drawn
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);                                           // needs two parameters to move (x,y)
            this.addObjectToMap(this.level.backgroundObjects);

            //--------------------- to be used for static objects
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBar);
            this.addToMap(this.bottleBar);
            //this.addToMap(this.coinBar);
            this.ctx.translate(this.camera_x, 0); // moving the camera/ coordinate system back and forward again

            this.addObjectToMap(this.level.bottles);
            this.addObjectToMap(this.level.hearts);
            this.addObjectToMap(this.level.enemies);
            this.addObjectToMap(this.level.clouds);
            this.addObjectToMap(this.throwableObjects);

            this.addToMap(this.character);      //is not an array, so "forEach" is not working

            this.ctx.translate(-this.camera_x, 0);

            let self = this;            // it doesnt accept this. in the function so you call this something else and parse in that something else
            requestAnimationFrame(function () {
                self.draw();                // Draw will be called repeatetly 
            });
        }

    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {                    //does the add object have a different direction
            this.mirrorImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {                                        // change things back to the privius setting
            this.mirrorImageReverse(mo);
        }
    }

    mirrorImage(mo) {
        this.ctx.save();                        // if so, we save the current settings
        this.ctx.translate(mo.width, 0);        // then we change the method we add the images
        this.ctx.scale(-1, 1);                  // turn the picture on the y axes (mirror)
        mo.x = mo.x * -1;
    }

    mirrorImageReverse(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
