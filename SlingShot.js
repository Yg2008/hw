class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x+this.offsetX;
        var anchor2y = pointB.y+this.offsetY;
        strokeWeight(5);
        stroke("black");
        line(anchor1x,anchor1y,anchor2x,anchor2y);
        
    }
}