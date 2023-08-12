class Sprite {
    constructor(config){
        this.image = new Image();
        this.image.src = config.src;
        this.onload = () => {
            this.isLoaded = true;
        }
        
        this.animations = config.animations || {
            idleDown: [0,0],
        };
        this.currentAnimation = config.currentAnimation || "idleDown",
        this.currentAnimationFrame = 0;

        this.gameObject = config.gameObject;
    }

    draw(ctx){
        const x = this.gameObject.x*16-8;
        const y = this.gameObject.y*16-18;

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32,
        )
    }
}

// walkDown : [[0,0],[1,0],[2,0], [3,0]],
//             walkRight : [[0,1],[1,1],[2,1], [3,1]],
//             walkUp : [[0,2],[1,2],[2,2], [3,2]],
//             walkLeft : [[0,3],[1,3],[2,3], [3,3]],