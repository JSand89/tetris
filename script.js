document.addEventListener("keyup", keyDownHandler);
const star = document.getElementById("play");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//====Crear figuras
dxBank=[[0,1,-1,1],[0,1,-1,-1],[0,1,-1,1],[0,-1,1,0],[0,1,-1,0],[0,1,-1,-2],[0,1,1,0]]
dyBank=[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,1,1],[0,0,1,1],[0,0,0,0],[0,0,1,1]]
//=====Memoria X Memoria Y
let MemoryX=[0,0,0,0]
let MemoryY=[0,0,0,0]
var memory, tablero;
//====== inicia la variable que mueve la ficha
var paddleX = 0, globalP=0; 
let score=0;
let boxSize=40;
let x=5,y=0,dx=0,dy=1,RNGen=5;

//=======Function draw=======
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (var n=0;n < 17;n++){
        for (var m=0;m < 10;m++){
            if(tablero[n][m]==1){
                //
                ctx.rect(n*40, m*40, 40, 40);
                ctx.strokeStyle = "#7c7673";
                ctx.fillStyle="grey";
                ctx.fill();
                ctx.stroke();
                    
            }else{
                ctx.rect(m*40, n*40, 40, 40);
                ctx.strokeStyle = "#7c7673";
                ctx.fill();
                ctx.stroke();
             }
        }
    }
    ctx.closePath();
}
//===================new board==========
function Board(){ 
    velocidad=50000;
    tablero=new Array(17);
    memory=new Array(17);
    color= "#e2e2e2"
    for (var n=0;n < 17;n++){ //go for fila
         tablero[n]=new Array(9);//go for colum
         memory[n]=new Array(9);
         for (var m=0;m < 10;m++){
             if(n<16){
              tablero[n][m]=0;
              memory[n][m]=0;
             }else{
                tablero[n][m]=1;
                memory[n][m]=1;
             }
         }

    }
   //console.log(tablero)// crea una matriz llena de 0
    score=0;
    //nuevaPieza();
    //console.log(nuevaPieza)
}
//=======Random Number generator================
function getRandomPiece(){
    RNGen=Math.floor(Math.random()*6);
   // console.log(RNGen);
   // console.log(RNGen)
}
//=============figure Starter =================================
function Figure() {
    getRandomPiece()
    for(k=0; k<4;k++){
        aux=x+dxBank[RNGen][k];
        auy=y+dyBank[RNGen][k];
        for (var n=0;n < 16;n++){
            for (var m=0;m < 10;m++){
                 if(n==auy && m==aux){
                    tablero[n][m]=1;
                    MemoryX[k]=aux;
                    MemoryY[k]=auy;
                    //globalP=0;
                    //console.log("1");
                   draw();
                 }
            }
       }
         //draw(aux,auy,"red")
        //console.log(dxBank[RNGen][k],x)
        //console.log(dyBank[RNGen][k],y)
    }
//console.log(tablero)
}
//=====function save previus play=====
function savePlay(Array){
    memory=Array
    return(memory)
 }
 //===========Figure Down left and right ======
 
 function keyDownHandler(e) {
     if(e.keyCode == 39) {
        paddleX = 1;
     }
     else if(e.keyCode == 37) {
         paddleX = -1;
     }
 }
 

 
function move() {
    for(k=4; k>=0;k--){
        aux=MemoryX[k]+paddleX;
        auy=MemoryY[k]+1;
        for (var n=0;n < 16;n++){
            for (var m=0;m < 10;m++){

               //let r=(MemoryY[3]<16&&MemoryY[2]<16&&MemoryY[1]<16&&MemoryY[0]<16)
                 if(n==auy && m==aux && auy<16 && aux>-1 && aux<11){
                    if(auy==15/*||tablero[auy][aux]+tablero[m][n]>=1*/){
                        // tablero[MemoryY[k]][m]=0;
                        // tablero[auy][aux]=1;
                        // MemoryX[k]=aux;
                        // MemoryY[k]=auy;
                        Figure();
                    // }else if(auy>15){
                    //     aux=MemoryX[k];
                    //     auy=MemoryY[k]-1;
                    //     tablero[MemoryY[k]][m]=0;
                    //     tablero[auy][aux]=1;
                    //     MemoryX[k]=aux;
                    //     MemoryY[k]=auy;
                        
                    }
                    else{
                        tablero[MemoryY[k]][m]=0;
                        tablero[auy][aux]=1;
                        MemoryX[k]=aux;
                        MemoryY[k]=auy;
                        console.log(auy)
                    }
                 }
                 
            }
           // globalP=+globalP+1;
//console.log(globalP) 
       }

        //console.log(dxBank[RNGen][k],x)
        //console.log(dyBank[RNGen][k],y)
    }
    globalP=0
    paddleX=0

    draw();
    //Figure();
    console.log(MemoryY,MemoryX)
    console.log(tablero)
}

//draw(60,0)
getRandomPiece();
Board();
Figure();
console.log(star)
star.addEventListener('click', () => {
    setInterval(move,500);

})

// console.log(tablero)
