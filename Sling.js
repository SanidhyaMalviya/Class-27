class Sling{
    constructor(objectA,objectB){
        var options ={
            bodyA:objectA,
            bodyB:objectB,
            stiffness:0.04,
            length:10
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        push();
        stroke("brown");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}