class Cloud extends MovableObject {
    y = 30;
    width = 500;
    height = 200;
    speed = 0.7;
    IMAGE_CLOUDS = [
        'img/5.Fondo/Capas/4.nubes/1.png',
        'img/5.Fondo/Capas/4.nubes/2.png'
    ];
    constructor() {      // you need super to manipulate a method (not a variable like x)
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = 0 + Math.random() * 1000;
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 200);

    }

}