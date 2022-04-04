class Bottle extends MovableObject {

    IMAGE_BOTTLE = ['img/6.botella/1.Marcador.png'
    ];
    height = 80;
    width = 80;
    index;
    constructor() {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.x = 300 + Math.random() * 2500;                 //to have a good range of coordinates were the bottle spawn
        this.y = 300 - Math.random() * 200;
        
    }
}
