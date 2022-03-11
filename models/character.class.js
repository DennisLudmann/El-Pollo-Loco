class Character extends MovableObject {

    x = 50;
    y = 133;
    hight = 310;
    width = 100;
    speed = 8;
    IMAGE_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGE_WALKING);

        this.animate();
    }

    animate() {
       
            setInterval(()  => {
                if (this.world.keyboard.RIGHT){
                    this.x += this.speed;
                    this.otherDirection = false;
                }
                if (this.world.keyboard.LEFT){
                    this.x -= this.speed;
                    this.otherDirection = true;     // mirror image when moving back
                }
                this.world.camera_x = -this.x;      // so the background moves in the other direction of the move/animation
           }, 1000 / 60);

            setInterval(() => {
                              
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){         //if key.Right is true, execute moving
                    
                     // Moving animation
                let i = this.currentImage % this.IMAGE_WALKING.length;  // (using % modulo operator) i = 0,1,2,3,4,5,0,1,2,3...
                let path = this.IMAGE_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            }, 50);
        

    }



    jump() {


    }


}