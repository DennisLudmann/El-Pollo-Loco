class MovableObject {
    x = 120;
    y = 290;
    img;
    hight = 150;
    width = 100;
    speed = 0.2;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
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
                setInterval(()  =>  {
                this.x -= this.speed;              // reduces x by 0.2 everytime 
                }, 1000 / 60);              // 60 frames per secund 
        }
    

}