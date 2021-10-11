class Player {
    constructor(x,y){
        var options = {
            'friction':1,
            'density':1,
            'restitution':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 25;
        this.height = 25;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
    }
}