class mangotree{
     constructor(x, y) {
      var tree_options= {

         isStatic:true

      }
        this.Image= loadImage("sprites/tree.png")
        //this.bodymangotree= Bodies.rectangle(x, y, 400, 600, tree_options);
        //World.add(world, this.bodymangotree);

     }


    display() {
          
        imageMode(CENTER);
        image.debug= true
        image(this.Image, this.bodymangotree.position.x, this.bodymangotree.position.y, 400, 600);

    }

}