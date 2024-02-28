
// function submitResult() {
// }

document.querySelector("#btn").addEventListener("click",()=>{
    
    let score = 0
    if (document.querySelector("input[name='q1']:checked").value==="d") {
        score++;
       }
       if (document.querySelector("input[name='q2']:checked").value==="a") {
        score++;
       }
       document.querySelector("#result").innerHTML=score;
    })