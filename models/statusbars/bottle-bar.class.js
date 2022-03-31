class BottleBar extends DrawableObject {
   
    totalbottles = 0;
    x = 230;
    y = 0;
    height = 50;
    width = 170;
    IMAGES_BOTTLEBAR = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.setBottleBar();
    }


    setBottleBar() {
        let path = this.IMAGES_BOTTLEBAR[0];
        this.img = this.imageCache[path];
    }
}