let gameSeq=[];
let userSeq=[];
let highestScore = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let max = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started == false){
    console.log("game started");
    started = true;

    levelUp();
}
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randColor = btns[randidx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn)
}

function checkAns(idx){
    // console.log("current level : ",level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highestScore.push(level);
        for(let i=0 ; i<highestScore.length; i++){
            if(highestScore[i]>highestScore[i+1]){
                max=highestScore[i];
            }
        }
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> your highest score was <b>${max}</b> <br> Press any key to start.`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    level = 0;
}

















