class World {

    character = new Character();

    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;                   // to pass the details to the canvas outside the function
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setBackgroundObjects() {
        this.backgroundObjects
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

        }
    }

    setWorld() {
        this.character.world = this;      //passing world variables to character fx "keyboard"
    }

    draw() {                                                                                //pay attention to the order the objects will be drawn
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);                                           // needs two parameters to move (x,y)
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.character);      //is not an array, so no need for "forEach"
        this.addObjectToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
      
        
        let self = this;            // it doesnt accept this. in the function so you call this something else and parse in that something else
        requestAnimationFrame(function () {
            self.draw();                // Draw will be called repeatetly 
        });
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {                    //does the add object have a different direction
            this.ctx.save();                        // if so, we save the current settings
            this.ctx.translate(mo.width, 0);        // then we change the method we add the images
            this.ctx.scale(-1, 1);                  // turn the picture on the y axes (mirror)
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);     // add an image "mirrored" if otherDirection was true
        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.x, mo.y, mo.x + mo.width, mo.y + mo.height,);
        this.ctx.stroke();
       
        if (mo.otherDirection) {                                        // change things back to the privius setting
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}
