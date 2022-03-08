class Cloud extends MovableObject {
    y = 30;
    width = 500;
    hight = 200;

    constructor(){      // you need super to manipulate a method (not a variable like x)
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        
        this.x = 0 + Math.random() * 500;     
        this.animation();
    }
   
    animation(){
        setInterval(()  =>  {
            this.x -= 0.2;              // reduces x by 0.2 everytime 
            }, 1000 / 60);              // 60 frames per secund 
    }

}