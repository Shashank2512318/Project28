class stone{
       constructor(x, y) {
    var options= {
      restitution:0,
      friction:1,
      density:1.2
    

    }
        this.Image= loadImage("sprites/stone.png");      
        this.body= Bodies.circle(x, y, 15, options);
        World.add(world, this.body);


this.r= 15;

       }
  



    display() {
        
        imageMode(CENTER);
        image(this.Image, this.body.position.x, this.body.position.y, 40, 40);
        

    }



}