class ThrowableObjects extends MovableObject{

constructor(x, y){      // checkThrowableObjects adds location of character to bottle
    super().loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 50;    
    this.throw();

}

throw(){
    this.speedY = 25;
    this.applyGravity();
    setInterval(() => {
        this.x += 13;
    }, 25);
}

}