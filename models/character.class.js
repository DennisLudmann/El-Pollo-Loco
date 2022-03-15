class Character extends MovableObject {

    x = 50;
    y = 0 ; // 133 is ground
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

    walking_sound = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGE_WALKING);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {    // so you cant run out of the map on the left side
                this.x -= this.speed;
                this.otherDirection = true;     // mirror image when moving back
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 80;      // so the background moves in the other direction of the move/animation
        }, 1000 / 60);                                  // 80 so we have a little more space to the right edge


        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {         //if key.Right or Left is true, execute moving

                // Moving animation
                this.playAnimation(this.IMAGE_WALKING);
            }
        }, 50);


    }



    jump() {


    }


}