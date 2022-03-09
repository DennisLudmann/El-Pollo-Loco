class MovableObject {
    x = 120;
    y = 290;
    img;
    hight = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    loadImage(path) {

        this.img = new Image();
        this.img.src = path;

    }

    loadImages(arr) {                // pulling the info from character constructor
       arr.forEach((path) => {
           let img = new Image();
           img.src = path;
           this.imageCache[path] = img;    //this for a variable outside the function in object oriented
       });
    }

    moveRight() {
        console.log('Moving right');
    }
    moveLeft() {

    }

}