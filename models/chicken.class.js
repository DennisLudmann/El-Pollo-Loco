class Chicken extends MovableObject{
    hight = 90;
    width = 60;
constructor(){      // you need super to manipulate a method (not a variable like x)
    super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

    this.x = 200 + Math.random() * 500;     // random gives you a number between 0 and 1 fx 0.4 (this number will be between 200-700)
    this.y = 352;
}
}
