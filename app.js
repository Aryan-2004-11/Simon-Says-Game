let gameque=[];
let userque=[];
let btns = ["red","yellow","purple","blue"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has started");
        started = true;
        levelup();       
    }
   
    
    
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250) ;
}
function levelup(){
    userque=[];
    level++;
    h2.innerText=`Level ${level}`;
    let Randidx=Math.floor(Math.random()*4);
    let RandCol = btns[Randidx];
    let RandBtn = document.querySelector(`.${RandCol}`);
    gameque.push(RandCol);
    btnflash(RandBtn);   
}
function checkAns(idx){
    // console.log("curr level:",level);
    if(userque[idx]==gameque[idx]){
        if(userque.length==gameque.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game Over! your score was <b> ${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="gray";       
        },200)
        reset();
    }
}
function btnPress() {
    let btn = this;
    btnflash(btn);
    userColor= btn.getAttribute("id");
    userque.push(userColor);
    checkAns(userque.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameque=[];
    userque = [];
    level = 0;
}