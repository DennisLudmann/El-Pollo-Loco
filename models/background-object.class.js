class BackgroundObject extends MovableObject {
hight = 480;
width = 720;

constructor(imagePath, x, y){
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.hight;         // total hight of canvas 480 - image hight 400


}

}