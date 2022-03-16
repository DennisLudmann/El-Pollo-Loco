class MovableObject {
    x = 120;
    y = 290;
    img;
    height = 150;
    width = 100;
    speed = 0.2;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    seedY = 0;
    acceleration = 2;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.seedY > 0) {       // isAboveGround so gravity pulls Pepe down or Jumps so he can fly up and later gets pulled down
                this.y -= this.seedY;
                this.seedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {                // to be used in different functions in fx jump function/graphic swap etc.
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
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);     // add an image "mirrored" if otherDirection was true
    }
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {

            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
// character.isColliding(chicken)
    isColliding(mo){                                    //if character is checking
        return this.x + this.width > mo.x &&            // compares top right character with top left enemy - collisionbox
        this.y + this.height > mo.y &&                  // compares bottom right character with left bottom left enemy
        this.x < mo.x &&                                // compares top left character with top tight enemy
        this.y < mo.y + mo.height;                      // compares bottom left character with right bottom of enemy
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
    }
    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % this.IMAGE_WALKING.length;  // (using % modulo operator) i = 0,1,2,3,4,5,0,1,2,3...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.seedY = 25;
    }

   
}

