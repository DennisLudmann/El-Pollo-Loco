class Heart extends MovableObject {

    IMAGE_HEART = ['img/7.Marcadores/Icono/Vidas.png'
    ];
    height = 80;
    width = 80;
    
    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Vidas.png');
        this.x = 300 + Math.random() * 2200;                 //to have a good range of coordinates were the bottle spawn
        this.y = 300 - Math.random() * 200;
    }
}

