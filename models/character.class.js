class Character extends MovableObject {

    IMAGE_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGE_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'

    ];
    IMAGE_DYING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];
    IMAGE_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGE_SHORT_IDLE = [
        "img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/2.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/3.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/4.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/5.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/6.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/7.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/8.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/9.IDLE/IDLE",
        "img/2.Secuencias_Personaje-Pepe-corrección/10.IDLE/IDLE"
    ];
    IMAGE_LONG_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];

    x = 50;
    y = 0; // 133 is ground
    height = 310;
    width = 100;
    speed = 8;
    world;
    walking_sound = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGE_WALKING);
        this.loadImages(this.IMAGE_JUMPING);
        this.loadImages(this.IMAGE_DYING);
        this.loadImages(this.IMAGE_HURT);
        this.loadImages(this.IMAGE_SHORT_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {    // so you cant run out of the map on the left side
                this.moveLeft();                                 // mirror image when moving back
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.JUMP && !this.isAboveGround()) {         // Jump function !negate
                this.jump();
            }
            this.world.camera_x = -this.x + 80;      // so the background moves in the other direction of the move/animation
        }, 1000 / 60);                                  // 80 so we have a little more space to the right edge

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGE_DYING);
                this.gameIsRunning = false;
               // console.log("this.gameIsRunning =",this.gameIsRunning);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGE_HURT);
            }
            else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGE_JUMPING);
            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {         //if key.Right or Left is true, execute moving
                    this.playAnimation(this.IMAGE_WALKING);
                }
            }
        }, 75);

        //!isAboveGround and no moving is active execute short idle
        // if game starts or he didnt move for 4sek. execute long idle
    }






}