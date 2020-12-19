class mango{
    constructor(x, y, r) {
 var options= {
   isStatic:true
 

 }
     this.Image= loadImage("sprites/mango.png");      
     this.body= Bodies.circle(x, y, r, options);
     World.add(world, this.body);



     this.w= r;
     this.h= r;
     this.r= r;

    }

    



 display() {
     
     imageMode(CENTER);
     image(this.Image, this.body.position.x, this.body.position.y,this.w*1.5, this.h*2);
     

 }



}