class Chicken extends MovableObject{
    hight = 90;
    width = 60;
    IMAGE_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso_derecho.png'
    ];
    currentImage = 0;

constructor(){      // you need super to manipulate a method (not a variable like x)
    super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

    this.x = 200 + Math.random() * 500;     // random gives you a number between 0 and 1 fx 0.4 (this number will be between 200-700)
    this.y = 352;
}

animate(){
    setInterval(()  => {
        let i = this.currentImage % this.IMAGE_WALKING.length;  // (using % modulo operator) i = 0,1,2,3,4,5,0,1,2,3...
        let path = this.IMAGE_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 100);

}

}
