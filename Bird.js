class Bird {
    constructor(x,y){
       
        var options = {restitution:0.8,
        friction:0.8,
        density:2
     }
        this.body =Bodies.rectangle(x,y,50,50,options);
        this.height=50;
        this.width = 50;
        World.add(myworld,this.body);

    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
       
        rotate(this.body.angle);

       fill("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();

    }
}