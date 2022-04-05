class Level {
    enemies;
    clouds;
    bottles;
    hearts;
    backgroundObjects;
    level_end_x = 719*4;

    constructor(enemies, clouds, bottles, hearts, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottles = bottles;
        this.hearts = hearts;
        this.backgroundObjects = backgroundObjects;
    }
}