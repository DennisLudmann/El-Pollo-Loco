class Bottle extends MovableObject {

    IMAGE_AIR = ['img/6.botella/1.Marcador.png'
];
    IMAGE_GROUND = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
    
    height = 80;
    width = 80;
    constructor() {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.IMAGE_AIR);
        this.loadImages(this.IMAGE_GROUND);
       // this.animate();
        this.x = 500;
        this.y = 300;
       
      
    }
    animate() {
        
        setInterval(() => {
            this.playAnimation(this.IMAGE_GROUND);
        }, 500)


    }
}
