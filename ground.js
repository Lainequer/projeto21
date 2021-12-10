class Ground{
    constructor(x,y,w,h){
    let options ={
        isStatic=true
    };
    this.body = Bodies.retangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
 }
 show(){
     var pos = this.body.position;
     push();
     rectMode(CENTER);
     strok(255);
     fill(127);
     rec(pos.x,pos.y,this.w,this.h);
     pop();
      }
   
}

