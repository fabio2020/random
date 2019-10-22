function setup(){
  createCanvas(800,400)
  background(0) 
}
function draw(){
  background(0)
  buildings.show()
}
var buildings={
  "show": function(){
    translate(canvas.width/2,canvas.height/2)
    beginShape()
    var d=88.66
    for(var a = 0; a <= TWO_PI; a+=TWO_PI/d){
      
      var o = map(cos(a * 666 + frameCount * 666),.66,.33,-33,3)
      var r = 33+o
      var x = (r*cos(a))/2
      var y = (r*sin(a))/2
      vertex(x,y)
      arc(x,y,r,o,a,a)
  }
    endShape()
  }
}
