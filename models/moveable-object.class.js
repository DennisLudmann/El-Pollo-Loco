class MovableObject {
    x = 120;
    y = 290;
    img;
    hight = 150;
    width = 100;


    loadImage(path) {

        this.img = new Image();
        this.img.src = path;

    }


    moveRight() {
        console.log('Moving right');
    }
    moveLeft() {

    }

}