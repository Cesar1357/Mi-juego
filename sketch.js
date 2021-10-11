var gameState = 0;
var lifes = 3;
var suelo1;
var suelo2,suelo3;
var player;
var suelo2i;
var suelo2group;
var enemigo;



function preload(){
    suelo2i = loadImage("prueba.png");
}


function setup(){
    createCanvas(5000,828);
    suelo1 = createSprite(0,780,600,250);
    suelo1.shapeColor = "red";

    suelo3 = createSprite(1300,500,1000,100);
    suelo3.shapeColor = "red";

    //cosas del jugador
    player = createSprite(30,height-80,25,25);
    player.shapeColor = "black";

    //enemigos
    enemigo = createSprite(1300,430,30,30);
    enemigo.shapeColor = "green"
    enemigo.velocityX = 10;


    suelo2group = new Group();


}

function draw(){
    background(188, 208, 240);
    //ESTADO INICIAL DEL JUEGO
    if(gameState === 0){
        textSize(80);
        fill("black");
        text("Presiona Espacio para Empezar",400,200)
        textSize(25)
        text("Controles:",700,300);
        text("A:Moverse atras",700,330);
        text("D:Moverse adelante",700,360);
        text("W:Saltar",700,390);

        if(keyDown("space")){
            gameState = 1;

        }

    }
    //Estado Play

    if(gameState === 1){
        if(keyDown("a")){
            player.x = player.x - 20;
    
        }
    
        if(keyDown("d")){
            player.x = player.x + 20;
    
        }
    
        if(keyDown("w")){
            player.velocityY = -20;
    
        }
        textSize(20);
        fill("black");
        text("Vidas: "+lifes,player.x+700,100);

        if(player.isTouching(enemigo) || player.y > 828){
            lifes = lifes - 1;
            player.x = 30;
            player.y = height-80;
        
        }


        if(lifes === 0){
            gameState = 2;
            player.visible = false;
        }

        elevator();

    }

    if(gameState === 2){
        textSize(20);
        fill("black");
        text("Vidas: "+lifes,player.x+700,100);
        textSize(80);
        text("Game Over",player.x+800,300);

    }
    player.collide(suelo1);
    player.collide(suelo3);

    

    
    if(enemigo.x > 1600){
        enemigo.velocityX = -10;
    }

    if(enemigo.x < 1000){
        enemigo.velocityX = 10;
    }
    


    suelo2group.collide(player);


    player.velocityY = player.velocityY + 1;
    drawSprites();


    //< >
}

function elevator(){
    if(frameCount % 50 === 0){
        suelo2 = createSprite(500,830,100,15);
        suelo2.velocityY = - 7;
        suelo2.addImage(suelo2i);
        suelo2.lifetime = 120;
        suelo2group.add(suelo2);


    }

}