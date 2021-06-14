class Bob{
    constructor(x,y,r) {
        var options={
            restitution:0.3,
            friction:5,
            density:1,
            isStatic: false,
            diameter: 20
        }
        this.x=x;
        this.y=y;
        this.r=r
        
        this.body=Bodies.circle(this.x,this.y,(this.r+20)/4, options)
        World.add(world, this.body);
    } 
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("darkblue");
        image(this.image,0,0,this.r, this.r);
        pop()
    }
  }