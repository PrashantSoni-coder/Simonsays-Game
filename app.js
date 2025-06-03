let gameStart=false;

let gameseq=[];
let userseq=[];
let highestScore=0;


let level=0; 
let highScore = document.querySelector("h3");
highScore.innerText=`HIGHEST SCORE :${highestScore}`;
let btns=["yellow","red","voilet","green"];
console.log(btns[2]);
let h2 = document.querySelector("h2");

let bdy= document.querySelector("body");
bdy.addEventListener("keypress",function (){
    if(gameStart==false){
        console.log("Game Started");
        gameStart=true;
        levelup()
    }

    
    
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelup(){
    
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;


    let rndIndx = Math.floor(Math.random()*4);
    console.log(rndIndx);
    
    let rndClr=btns[rndIndx];
    
    let rndBtn=document.querySelector(`.${rndClr}`);
    gameseq.push(rndClr);
    console.log(rndBtn);
    btnFlash(rndBtn);
    console.log(gameseq)
};

function checkAns (idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{


        if(highestScore<level){
            highestScore= level;
            highScore.innerText=`HIGHEST SCORE :${highestScore}`;
        }
        
            
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        if(highestScore>=level)
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
            },150);

            reset();
        }
}
function btnprs(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnprs);
}

function reset(){
    level=0;
    gameseq=[];
    userseq=[];
    gameStart=false;
    
    
}