class StatusBar extends DrawableObject {

    IMAGES_HITPOINTS = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];
    x = 10;
    y = 0;
    height = 50;
    width = 170;
    percentage;
    
    constructor(){
        super();
        this.loadImages(this.IMAGES_HITPOINTS);
        
        this.setPercentage(61);                //so the img is set from the beginning
        }

    setPercentage(percentage){
        this.percentage = percentage;   // 0, ... 5
        let path = this.IMAGES_HITPOINTS[this.resolveImageIndex()];         
        this.img = this.imageCache[path];
        console.log(percentage);
    }

    resolveImageIndex(){                    // to change image not on hit count but when % are reached 
        if (this.percentage == 100) {
            return 5;                       // returns the number of the image in array (5 is full HP)
        }   
        else if (this.percentage > 80) {
            return 4;
        } 
        else if (this.percentage > 60) {
            return 3;
        } 
        else if (this.percentage > 40) {
            return 2;
        } 
        else if (this.percentage > 20) {
            return 1;
        } 
        else {
            return 0;
        } 
     }
}