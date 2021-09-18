
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20;
var a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;

var pacman;

function setup(){
  createCanvas(1000,600);

a1 = createSprite(500,100,800,10);
a2 = createSprite(500,500,800,10);
a3 = createSprite(100,300,10,410);
a4 = createSprite(900,300,10,410);
a5 = createSprite(650,300,150,10);
a6 = createSprite(580,275,10,50);
a7 = createSprite(720,275,10,50);
a8 = createSprite(600,250,50,10);
a9 = createSprite(700,250,50,10);
a10 = createSprite(650,250,50,2);
a11 = createSprite(440,450,170,10);
a12 = createSprite(600,400,500,10);
a13 = createSprite(575,470,10,50);
a14 = createSprite(737.5,450,225,10);
a15 = createSprite(845,250,10,200);
a16 = createSprite(650,350,270,10);
a17 = createSprite(460,320,10,150);
a18 = createSprite(485,295,50,10);
a19 = createSprite(790,225,10,145);
a20 = createSprite(550,200,370,10);
a21 = createSprite(650,150,160,10);
a22 = createSprite(520,130,10,50);
a23 = createSprite(315,150,315,10);
a24 = createSprite(410,300,10,110);
a25 = createSprite(520,130,10,50);
a26 = createSprite(290,445,10,100);
a27 = createSprite(255,350,205,10);
a28 = createSprite(160,250,10,105);
a29 = createSprite(310,275,10,150);
a30 = createSprite(385,300,50,10);
a31 = createSprite(335,250,50,10);
a32 = createSprite(550,250,50,10);
a33 = createSprite(225,400,10,100);
a34 = createSprite(165,450,10,100);
a35 = createSprite(235,225,10,150);

b1 = createSprite(125,125,6,6);
b2 = createSprite(125,150,6,6);
b3 = createSprite(125,175,6,6);
b4 = createSprite(125,200,6,6);
b5 = createSprite(125,225,6,6);
b6 = createSprite(125,250,6,6);
b7 = createSprite(125,275,6,6);
b8 = createSprite(125,300,6,6);
b9 = createSprite(125,325,6,6);
b10 = createSprite(125,350,6,6);
b11 = createSprite(125,375,6,6);
b12 = createSprite(125,400,6,6);
b13 = createSprite(125,425,6,6);
b14 = createSprite(125,450,6,6);
b15 = createSprite(125,475,6,6);

b31 = createSprite(325,475,6,6);
b32 = createSprite(350,475,6,6);
b33 = createSprite(375,475,6,6);
b34 = createSprite(400,475,6,6);
b35 = createSprite(425,475,6,6);
b36 = createSprite(450,475,6,6);
b37 = createSprite(475,475,6,6);

b16 = createSprite(875,125,6,6);
b17 = createSprite(875,150,6,6);
b18 = createSprite(875,175,6,6);
b19 = createSprite(875,200,6,6);
b20 = createSprite(875,225,6,6);
b21 = createSprite(875,250,6,6);
b22 = createSprite(875,275,6,6);
b23 = createSprite(875,300,6,6);
b24 = createSprite(875,325,6,6);
b25 = createSprite(875,350,6,6);
b26 = createSprite(875,375,6,6);
b27 = createSprite(875,400,6,6);
b28 = createSprite(875,425,6,6);
b29 = createSprite(875,450,6,6);
b30 = createSprite(875,475,6,6);

b38 = createSprite(475,225,6,6);
b39 = createSprite(525,225,6,6);
b40 = createSprite(550,425,6,6);
b41 = createSprite(525,425,6,6);

b37 = createSprite(250,175,6,6);
b37 = createSprite(275,175,6,6);
b37 = createSprite(350,175,6,6);
b37 = createSprite(375,175,6,6);
b37 = createSprite(525,175,6,6);
b37 = createSprite(675,175,6,6);
b37 = createSprite(725,175,6,6);


a1.shapeColor = ("orange");
a2.shapeColor = ("orange");
a3.shapeColor = ("orange");
a4.shapeColor = ("orange");
a5.shapeColor = ("orange");
a6.shapeColor = ("orange");
a7.shapeColor = ("orange");
a8.shapeColor = ("orange");
a9.shapeColor = ("orange");
a10.shapeColor = ("orange");
a11.shapeColor = ("orange");
a12.shapeColor = ("orange");
a13.shapeColor = ("orange");
a14.shapeColor = ("orange");
a15.shapeColor = ("orange");
a16.shapeColor = ("orange");
a17.shapeColor = ("orange");
a18.shapeColor = ("orange");
a19.shapeColor = ("orange");
a20.shapeColor = ("orange");
a21.shapeColor = ("orange");
a22.shapeColor = ("orange");
a23.shapeColor = ("orange");
a24.shapeColor = ("orange");
a25.shapeColor = ("orange");
a26.shapeColor = ("orange");
a27.shapeColor = ("orange");
a28.shapeColor = ("orange");
a29.shapeColor = ("orange");
a30.shapeColor = ("orange");
a31.shapeColor = ("orange");
a32.shapeColor = ("orange");
a33.shapeColor = ("orange");
a34.shapeColor = ("orange");
a35.shapeColor = ("orange");

packman = createSprite(600,475,20,20)

}

function draw(){

if( keyDown(UP_ARROW)){

  packman.y -= 10

}

if( keyDown(DOWN_ARROW)){

  packman.y += 10

}

if( keyDown(LEFT_ARROW)){

  packman.x -= 10

}

if( keyDown(RIGHT_ARROW)){

  packman.x += 10

}
  
packman.bounceOff(a1);
packman.bounceOff(a2);
packman.bounceOff(a3);
packman.bounceOff(a4);
packman.bounceOff(a5);
packman.bounceOff(a6);
packman.bounceOff(a7);
packman.bounceOff(a8);
packman.bounceOff(a9);
packman.bounceOff(a10);
packman.bounceOff(a11);
packman.bounceOff(a12);
packman.bounceOff(a13);
packman.bounceOff(a14);
packman.bounceOff(a15);
packman.bounceOff(a16);
packman.bounceOff(a17);
packman.bounceOff(a18);
packman.bounceOff(a19);
packman.bounceOff(a20);
packman.bounceOff(a21);
packman.bounceOff(a22);
packman.bounceOff(a23);
packman.bounceOff(a24);
packman.bounceOff(a25);
packman.bounceOff(a26);
packman.bounceOff(a27);
packman.bounceOff(a28);
packman.bounceOff(a29);
packman.bounceOff(a30);
packman.bounceOff(a31);
packman.bounceOff(a32);
packman.bounceOff(a33);
packman.bounceOff(a34);
packman.bounceOff(a35);



background("black")


drawSprites();

}