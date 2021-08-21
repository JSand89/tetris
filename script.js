var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//====Crear figuras
dxBank=[[0,1,-1,1],[0,1,-1,-1],[0,1,-1,1],[0,-1,1,0],[0,1,-1,0],[0,1,-1,-2],[0,1,1,0]]
dyBank=[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,1,1],[0,0,1,1],[0,0,0,0],[0,0,1,1]]
//=====Memoria X Memoria Y
let MemoryX=[0,0,0,0]
let MemoryY=[0,0,0,0]
//====== inicia la variable que mueve la ficha
var paddleX = 0; 
let score=0;
let boxSize=40;
let x=5,y=0,dx=0,dy=1,RNGen=5;

//=======Function draw=======
function draw(x,y,color) {
    ctx.beginPath();
    ctx.rect(x*40, y*40, 40, 40);
    ctx.strokeStyle = "#7c7673";
    ctx.fillStyle=color
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
//===================new board==========
function Board(){ 
    velocidad=50000;
    tablero=new Array(16);
    memory=new Array(16);
    color= "#e2e2e2"
    for (var n=0;n < 16;n++){ //go for fila
         tablero[n]=new Array(9);//go for colum
         memory[n]=new Array(9);
         for (var m=0;m < 10;m++){
              tablero[n][m]=0;
              memory[n][m]=0;
              draw(m,n,color);
         }
    }
   console.log(tablero)// crea una matriz llena de 0
    score=0;
    //nuevaPieza();
    //console.log(nuevaPieza)
}
//=======Random Number generator================
function getRandomPiece(){
    RNGen=Math.floor(Math.random()*6);
    console.log(RNGen);
    console.log(RNGen)
}
//=============figure Starter =================================
function Figure() {
    for(k=0; k<4;k++){
        aux=x+dxBank[RNGen][k];
        auy=y+dyBank[RNGen][k];
        for (var n=0;n < 16;n++){
            for (var m=0;m < 10;m++){
                 if(n==auy && m==aux){
                    tablero[n][m]=1;
                    console.log("1");
                   // draw(m,n,color);
                 }
            }
       }
         draw(aux,auy,"red")
        //console.log(dxBank[RNGen][k],x)
        //console.log(dyBank[RNGen][k],y)
    }
console.log(tablero)
}
//===========Figure Down left and right ======

function figureMovement(){
   // memory=tablero;
    console.log("memory",memory)
    for (let t=0;t < 16;t++){ //go for fila
        for (let q=0;q < 10;q++){//go for colum
            memory[t][q]=tablero[t][q]
            if(t<1){
                tablero[t][q]=0;
            }else if(t<15){
                tablero[t+1][q]=memory[t][q];

            }
        }
   }
   console.log("tablero",tablero)
}

//=====function save previus play=====

//draw(60,0)
getRandomPiece();
Board();
Figure();
figureMovement();