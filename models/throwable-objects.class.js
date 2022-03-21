class ThrowableObjects extends MovableObject{

constructor(){
    super().loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = 100;
    this.y = 100;
    this.height = 70;
    this.width = 50;    
    this.throw(100, 150);

}

throw(x, y){
    this.x = x;
    this.y = y;
    this.speedY = 25;
    this.applyGravity();
    setInterval(() => {
        this.x += 10;
    }, 25);
}

}