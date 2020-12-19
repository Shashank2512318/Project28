class link{
      constructor(Body, point) {
       var options= {
        bodyA:Body, 
        pointB:point,
        stiffness:0.01,
        length:30

       }

       this.chain= Constraint.create(options);
       World.add(world, this.chain)
      }


      display() {
            push();
            if(this.chain.bodyA!= null) {
            var pointA= this.chain.bodyA.position;
            var pointB= this.chain.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            pop();


      }
    
            fly() {
                  this.chain.bodyA= null;
          
          
          
              }
  attach(body) {
this.chain.bodyA= body;


  }


      

}