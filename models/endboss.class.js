class Endboss extends MovableObject {

    IMAGE_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'

    ];
    IMAGE_ALERT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];
    height = 360;
    width = 230;
    x = 719 * 4;
    y = 90;
    bossHitPoints = 100;

    constructor() {
        super().loadImage(this.IMAGE_WALKING[0]);
        this.loadImages(this.IMAGE_WALKING);
        this.loadImages(this.IMAGE_ALERT);
        this.applyGravity();
        this.animate();

    }
    animate() {
        setInterval(() => {
            this.number = Math.random();
            if (this.number < 0.15 && !this.isAboveGround()) {
                this.jump();
            }
                if (!this.isAboveGround()) {
                this.playAnimation(this.IMAGE_WALKING);
            }
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGE_ALERT);
            }
        }, 185);
    }

    isHit() {
        this.bossHitPoints -= 10;
        console.log(this.bossHitPoints)
        if (this.bossHitPoints < 0) {
            this.bossHitPoints = 0;
        } else {
            this.lastHit = new Date().getTime();        // time as number
        }
    }

}
