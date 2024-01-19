
//bubble
function makeBubble(){
    
let clutter = "";
for (let i = 0; i <=107; i++) {
    let rn = Math.floor(Math.random()*10)
 clutter+= `    <div class="bubble">${rn}</div>  `
    
}
document.querySelector(".panelBtn").innerHTML=clutter;
}

let hitrn = 0;

function hitvalue (){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML=hitrn;
}

//timer
let timer = 60;
 function runtime(){
    let timerint = setInterval(function () {
        if (timer > 0) {
             timer--;
             document.querySelector("#timer").textContent=timer;

        } else {
           clearInterval(timerint);
           document.querySelector(".panelBtn").textContent=`Game Over`
        }
    },1000)
}

let score = 0; 

function incresedScore(){
    score += 10;
    document.querySelector("#Score").textContent= score;
}

document.querySelector(".panelBtn").addEventListener("click",function(dets){
    let clickedNumber = (Number(dets.target.textContent));
    if (clickedNumber===hitrn) {
        makeBubble();
        hitvalue();
        incresedScore();
    }
})

runtime();
makeBubble();
hitvalue();
