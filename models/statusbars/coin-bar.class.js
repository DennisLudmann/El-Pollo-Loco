class CoinBar extends DrawableObject {
    IMAGES_COINBAR = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];
    x = 450;
    y = 0;
    height = 50;
    width = 170;
    totalcoins;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.setCoinBar();
    }

    setCoinBar() {
        let path = this.IMAGES_COINBAR[0];
        this.img = this.imageCache[path];
    }

}