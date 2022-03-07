class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png')
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;                   // to pass the details to the canvas outside the function
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectToMap(this.character);
        this.addObjectToMap(this.enemies);
        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.backgroundObjects);

        // Draw will be called repeatetly
        let self = this;            // it doesnt accept this. in the function so you call this something else and parse in that something else
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(objects){
        debugger;
        objects.forEach(obj => {
            this.addToMap(obj);
        });
     }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.hight);
    }
}
