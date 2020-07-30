class Box {
    constructor(x, y, width, height) 
    {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      var score = 0
      textSize(30);
      text("SCORE: "+score, 780, 40);

      if(this.body.speed < 3)
      {
        push(); 
        translate(pos.x,pos.y);
        rotate(angle); 
        rectMode(CENTER);
        fill(66,194,245);
        rect(0,0,this.width,this.height);
        pop();
      }
      else
      {
        score++
        World.remove(world,this.body);
      }
    }
  };
