class ThrowableObjects extends MovableObject {
    IMAGE_BOTTLEROTATION = [
        
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png'
    ];
    
    constructor(x, y) {      // checkThrowableObjects adds location of character to bottle
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGE_BOTTLEROTATION);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.x += 13;
        }, 25);
        setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLEROTATION);
        }, 65);
    }
// is colliding - dmg? splash?

}