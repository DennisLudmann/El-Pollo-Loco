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
    seedY = 0;
    acceleration = 2;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.seedY;
                this.seedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){                // to be used in different functions in fx jump function/graphic swap etc.
        return this.y < 115;
    }

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
        setInterval(() => {
            this.x -= this.speed;              // reduces x by 0.2 everytime 
        }, 1000 / 60);              // 60 frames per secund 
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGE_WALKING.length;  // (using % modulo operator) i = 0,1,2,3,4,5,0,1,2,3...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}

