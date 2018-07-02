function setup(){

  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  translate(200, 200);
  rotate(-90);



  let hr = hour();
  let mn = minute();
  let sc =second();

  // fill(255);
  // noStroke();
  //  text(hr + ':' + mn + ':' + sc, 30, 200);
  //




  strokeWeight(8);
  stroke(255,100,150); // color
  noFill();




  // second
  stroke(255,100,80);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300, 0, secondAngle); // 0 - 360 :COLOR part

  // minute
  stroke(150,100,255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,280,280, 0, minuteAngle); // 0 - 360 :COLOR part

  // hour
  stroke(150,255,100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0,0,260,260, 0, hourAngle); // 0 - 360 :COLOR part

  push();
  rotate(secondAngle); // line rotates according to the secondAngle angle
  stroke(255,100,80);;
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle); // line rotates according to the secondAngle angle
  stroke(150,100,255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle); // line rotates according to the secondAngle angle
  stroke(150,255,100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0,0);




}
