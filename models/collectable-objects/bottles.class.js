class Bottles extends MovableObject {

    IMAGE_AIR = 'img/6.botella/1.Marcador.png';
    IMAGE_GROUND = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGE_AIR);
        this.loadImages(this.IMAGE_GROUND);
      
       
      
    }
}