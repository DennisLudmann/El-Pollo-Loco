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

 canvas;
 ctx;
    
constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;                   // to pass the details to the canvas outside the function
    this.draw();
}


draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.hight);
    this.enemies.forEach(enemy => {
        this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.hight);
    });
    this.clouds.forEach(cloud => {
        this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.hight);
    });

    // Draw will be called repeatetly
    let self = this;            // it doesnt accept this. in the function so you call this something else and parse in that something else
    requestAnimationFrame(function(){
        self.draw();
    
    });
}
}
