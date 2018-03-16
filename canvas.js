var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
/*
for(i = 0; i < 40; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.fillStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  c.fillRect(x, y, 30, 30);

}*/


console.log(canvas);

//line
/*for(i = 0; i < 100; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(Math.random()* window.innerWidth, Math.random()*window.innerHeight);
  c.lineTo(x + 100 , y + 100);
  c.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  c.lineWidth = 10;
  c.stroke();
}*/
//arch
var mouse = {
  x: undefined,
  y: undefined
};

var maxRadius = 40;
var minRadius = 5;

var colorArray = [
    'rgb(252, 127, 72)',
    'rgb(68, 255, 238)',
    'rgb(110, 254, 93)',
    'rgb(232, 121, 255)',
    'rgb(255, 247, 45)',
];

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(){

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function() {

      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    };

    this.update = function(){

      if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
      }
      if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      //interactivity
      if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if(this.radius < maxRadius){
          this.radius += 1;
      }
    } else if(this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };





}

var circleArray = [];

function init() {

    circleArray = [];
    for (var i = 0; i < 2000; i++) {
        var radius = Math.random() * 6 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var circle = new Circle(x, y, dx, dy, radius);
        circleArray.push(new Circle(x, y, dx, dy, radius));
        console.log(circleArray);

}
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}


init();
animate();
/*for(i = 0; i < 100; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var rgb1 =  'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = rgb1;
  c.lineWidth = 5;
  c.stroke();

}*/
