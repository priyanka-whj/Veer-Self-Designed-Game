var border1,border2,border3,border4;
var player,playerImg;
var life = 500;
var playerLife = 5;
var count = 0;
var score = 0;
var coin,coinImg,coinGroup;
var monster1,monster1Img,monster2,monster2Img;
var monster3,monster4;
var coinSound,playerDeadSound,gameOverSound;
var gameState = "play";

function preload()
{
  playerImg = loadImage("images/player.png");
  coinImg = loadImage("images/goldCoin.png");
  monster1Img = loadImage("images/monster.jpg");
  monster2Img = loadImage("images/monster2.jpg");
  coinSound = loadSound("sound/coinsound.wav");
  playerDeadSound = loadSound("sound/playerdead.wav");
  gameOverSound = loadSound("sound/GameoverSound.wav");
}

function setup()
{
  createCanvas(700,700);

  coinGroup = new Group();

  border1 = createSprite(350,5,700,10);
  border1.shapeColor = "black";

  border2 = createSprite(695,350,10,700);
  border2.shapeColor = "black";

  border3 = createSprite(350,695,700,10);
  border3.shapeColor = "black";

  border4 = createSprite(5,350,10,700);
  border4.shapeColor = "black";

  player = createSprite(670,670,20,20);
  player.addImage(playerImg);
  player.scale = 0.3;

  //creating walls
  w1 = createSprite(20,100,10,90);
  w1.shapeColor = "#835246";
  w2 = createSprite(45,150,60,10);
  w2.shapeColor = "#835246";
  w3 = createSprite(70,180,10,50);
  w3.shapeColor = "#835246";
  w4 = createSprite(45,205,60,10);
  w4.shapeColor = "#835246";
  w5 = createSprite(20,450,10,480);
  w5.shapeColor = "#835246";
  w6 = createSprite(45,600,60,10);
  w6.shapeColor = "#835246";
  w7 = createSprite(290,690,550,10);
  w7.shapeColor = "#835246";
  w8 = createSprite(560,640,10,100);
  w8.shapeColor = "#835246";
  w9 = createSprite(500,615,10,150);
  w9.shapeColor = "#835246";
  w10 = createSprite(280,620,290,10);
  w10.shapeColor = "#835246";
  w11= createSprite(140,570,10,100);
  w11.shapeColor = "#835246";
  w12 = createSprite(115,520,60,10);
  w12.shapeColor = "#835246";
  w13 = createSprite(190,450,70,10);
  w13.shapeColor = "#835246";
  w14 = createSprite(90,360,10,160);
  w14.shapeColor = "#835246";
  w15 = createSprite(125,280,80,10);
  w15.shapeColor = "#835246";
  w16 = createSprite(160,335,10,100);
  w16.shapeColor = "#835246";
  w17 = createSprite(280,540,100,10);
  w17.shapeColor = "#835246";
  w18 = createSprite(230,420,10,250);
  w18.shapeColor = "#835246";
  w19 = createSprite(360,210,430,10);
  w19.shapeColor = "#835246";
  w20 = createSprite(570,65,10,130);
  w20.shapeColor = "#835246";
  w21 = createSprite(520,360,200,10);
  w21.shapeColor = "#835246";
  w22 = createSprite(615,440,10,150);
  w22.shapeColor = "#835246";
  w23 = createSprite(455,540,100,10);
  w23.shapeColor = "#835246";

  createMonster1();
  createMonster2();
  createMonster3();
  createMonster4();
}

function draw ()
{
  background("black");

  fill("white");
  textSize(20);
  text("Score: "+ score,30,50);
  text("Life: "+ playerLife,30,80);

  if(gameState === "play")
  {
    

    if(keyDown(UP_ARROW))
    {
      player.y = player.y - 5; 
    }
    if(keyDown(DOWN_ARROW))
    {
      player.y = player.y + 5; 
    }
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5; 
    }
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5; 
    }

    player.bounceOff(border1);
    player.bounceOff(border2);
    player.bounceOff(border3);
    player.bounceOff(border4);

    player.bounceOff(w1);
    player.bounceOff(w2);
    player.bounceOff(w3);
    player.bounceOff(w4);
    player.bounceOff(w5);
    player.bounceOff(w6);
    player.bounceOff(w7);
    player.bounceOff(w8);
    player.bounceOff(w9);
    player.bounceOff(w10);
    player.bounceOff(w11);
    player.bounceOff(w12);
    player.bounceOff(w13);
    player.bounceOff(w14);
    player.bounceOff(w15);
    player.bounceOff(w16); 
    player.bounceOff(w17);
    player.bounceOff(w18);
    player.bounceOff(w19);
    player.bounceOff(w20);
    player.bounceOff(w21);
    player.bounceOff(w22);
    player.bounceOff(w23);

    monster1.bounceOff(w6);
    monster1.bounceOff(w4);
    monster2.bounceOff(w5);
    monster2.bounceOff(w9);
    monster3.bounceOff(w1);
    monster3.bounceOff(w2);
    monster3.bounceOff(w3);
    monster3.bounceOff(w4);
    monster3.bounceOff(w5);
    monster3.bounceOff(w6);
    monster3.bounceOff(w7);
    monster3.bounceOff(w8);
    monster3.bounceOff(w9);
    monster3.bounceOff(w10);
    monster3.bounceOff(w11);
    monster3.bounceOff(w12);
    monster3.bounceOff(w13);
    monster3.bounceOff(w14);
    monster3.bounceOff(w15);
    monster3.bounceOff(w16); 
    monster3.bounceOff(w17);
    monster3.bounceOff(w18);
    monster3.bounceOff(w19);
    monster3.bounceOff(w20);
    monster3.bounceOff(w21);
    monster3.bounceOff(w22);
    monster3.bounceOff(border1);
    monster3.bounceOff(border2);
    monster3.bounceOff(border3);
    monster3.bounceOff(border4);
    monster4.bounceOff(w1);
    monster4.bounceOff(w2);
    monster4.bounceOff(w3);
    monster4.bounceOff(w4);
    monster4.bounceOff(w5);
    monster4.bounceOff(w6);
    monster4.bounceOff(w7);
    monster4.bounceOff(w8);
    monster4.bounceOff(w9);
    monster4.bounceOff(w10);
    monster4.bounceOff(w11);
    monster4.bounceOff(w12);
    monster4.bounceOff(w13);
    monster4.bounceOff(w14);
    monster4.bounceOff(w15);
    monster4.bounceOff(w16); 
    monster4.bounceOff(w17);
    monster4.bounceOff(w18);
    monster4.bounceOff(w19);
    monster4.bounceOff(w20);
    monster4.bounceOff(w21);
    monster4.bounceOff(w22);
    monster4.bounceOff(w23);
    monster4.bounceOff(border1);
    monster4.bounceOff(border2);
    monster4.bounceOff(border3);
    monster4.bounceOff(border4);

    if(life === 500)
    {
      count = count + 1;
    }

    if(count === 50)
    {
      count = 0;
      createGoldCoin();
    }

    if(count === 0)
    {
      life = life - 1;
      if(life === 0)
      {
        coin.destroy();
        life = 500;
      }
    }

    if(coinGroup.isTouching(player))
    {
      coinSound.play();
      coinGroup.destroyEach();
      score = score + 10;
      life = 500;
    }

    if(player.isTouching(monster1) || player.isTouching(monster2) || player.isTouching(monster3) || player.isTouching(monster4))
    {
      playerDeadSound.play();
      playerLife = playerLife-1;
      player.x = 670;
      player.y = 670; 
    }

    if(playerLife === 0)
    {
      gameState = "end";
    }
  }

  if(gameState === "end")
  {
    textSize(30);
    text("Game Over",300,300);
    text("press R to Restart",250,350);
    gameOverSound.play();
    monster1.destroy();
    monster2.destroy();
    monster3.destroy();
    monster4.destroy();
    life = 0;
    coinGroup.destroyEach();

    if(keyDown("R"))
    {
      restartGame();
    }
  }

  drawSprites();
}

function createGoldCoin()
{
  coin = createSprite(random(20,680) , random(20,680) , 20,20);
  coin.addImage(coinImg);
  coin.scale = 0.09;
  coinGroup.add(coin);
}

function restartGame()
{
  gameState = "play";
  score = 0;
  life = 500;
  playerLife = 5;
  count = 0;
  createMonster1();
  createMonster2();
  createMonster3();
  createMonster4();
}

function createMonster1()
{
  monster1 = createSprite(50,350,20,20);
  monster1.addImage(monster1Img);
  monster1.scale = 0.16;
  monster1.velocityY = 3;

}

function createMonster2()
{
  monster2 = createSprite(328,652,20,20);
  monster2.addImage(monster2Img);
  monster2.scale = 0.16;
  monster2.velocityX = 3;
}

function createMonster3()
{
  monster3 = createSprite(328,68,20,20);
  monster3.addImage(monster2Img);
  monster3.scale = 0.2;
  monster3.velocityY = 3;
  monster3.velocityX = 2;
}

function createMonster4()
{
  monster4 = createSprite(430,450,20,20);
  monster4.addImage(monster1Img);
  monster4.scale = 0.2;
  monster4.velocityY = -2;
  monster4.velocityX = -2;
}
