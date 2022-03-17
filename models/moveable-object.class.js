class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection = false;
    seedY = 0;
    acceleration = 2;
    hitPoints = 100;
    lastHit = 0;


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

    
   
    // character.isColliding(chicken)
    isColliding(mo) {                                    //if character is checking
        return this.x + this.width > mo.x &&            // compares top right character with top left enemy - collisionbox
            this.y + this.height > mo.y &&                  // compares bottom right character with left bottom left enemy
            this.x < mo.x &&                                // compares top left character with top tight enemy
            this.y < mo.y + mo.height;                      // compares bottom left character with right bottom of enemy
    }

    isHit() {
        this.hitPoints -= 3;
        if (this.hitPoints < 0) {
            this.hitPoints = 0;
        } else {
            this.lastHit = new Date().getTime();        // time as number
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;   // difference in ms
        timepassed = timepassed / 1000;                         // difference in s
        return timepassed < 0.3;
    }

    isDead() {
        return this.hitPoints == 0;                     // returns true when hitPoints are 0
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
        let i = this.currentImage % images.length;  // (using % modulo operator) i = 0,1,2,3,4,5,0,1,2,3...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.seedY = 25;
    }


}

