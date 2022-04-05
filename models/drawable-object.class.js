class DrawableObject {
    x = 120;
    y = 290;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    percentage = 61;

    loadImage(path) {

        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {                // pulling the info from fx character constructor
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;    
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

    increaseBar(percentage){
        this.percentage = percentage + 20;
        if (this.percentage > 100) {
            return this.percentage = 100;
        }
        percentage = this.percentage;
        return this.percentage;
    }
    
    sendPercentage(){
        debugger;
        console.log (this.percentage);
       return this.percentage;
    }

    changePercentage(newpercentage){
        percentage = this.newpercentage;
    }
}