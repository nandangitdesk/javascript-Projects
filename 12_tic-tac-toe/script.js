let boxes = document.querySelectorAll(".box") // selct all boxes
let restartBtn = document.querySelector("#reset-btn") //select restart button
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let newGameBtn = document.querySelector("#new-btn")

let turnO = true; //give turn to player O

const winPatterns = [ //this is 2D array 
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
 ];

 const restatGame = ()=>{
   turnO = true
   enabledBoxes();
   msgContainer.classList.add ("hide");
 }


//to function all box we use foreach loop 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if (turnO) {
        box.innerText = "O";
        turnO = false; //after O turn it become false then next turn will be X
     } else{
        box.innerText = "X"
        turnO = true;
     }box.disabled = true;
     checkWinner();
    });
  });
   

const disabledBoxes = ()=>{
 for (let box of boxes) {
   box.disabled = true;
 }
}

const enabledBoxes = ()=>{
   for (let box of boxes) {
     box.disabled = false;
     box.innerText=""
   }
  }

const showWinner = (winner)=>{
   msg.innerText=`Congratulatins you win ${winner}`
   msgContainer.classList.remove ("hide");
   disabledBoxes();
}


   const checkWinner = ()=>{
     for (let pattern of winPatterns) {
      //  console.log(pattern[0],pattern[1],pattern[2]);
      //  console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
      let pos0Val = boxes[pattern[0]].innerText
      let pos1Val = boxes[pattern[1]].innerText
      let pos2Val = boxes[pattern[2]].innerText

      if (pos0Val != "" && pos1Val != "" && pos2Val!= "") {
         if (pos0Val === pos1Val && pos1Val === pos2Val) {
            console.log("winner",pos0Val);
            showWinner(pos0Val)  // show winner milne ke bad bhi box chal rahe hai or winner change horaha hai to hame winner milne ke bad sare boxes ko disabled karna padega.
         }
      }
     }
  }

  newGameBtn.addEventListener("click",restatGame)
  restartBtn.addEventListener("click",restatGame)