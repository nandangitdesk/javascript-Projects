const inputTask = document.querySelector(".input-task")
const addBtn = document.querySelector(".add-btn")
const taskCount = document.querySelector(".taskCount")
const errMsg = document.querySelector(".err-msg")
const countContainer = document.querySelector("#Tasks")

let count = 0;

const displayCount=(taskCount)=> {
    taskCount.innerText = count;
 
}

const addTask = () => {
    const taskName = inputTask.value.trim();
    errMsg.style.display = "none"
    if (!taskName) {
        setTimeout(() => {
            errMsg.style.display = "block"
        }, 2000);
        return
    }
     const tasks = ` <div class="task-container">
     <input type="checkbox" name="task-complete" id="task-complete">
     <p class="task-name">${taskName}</p>
     <button class="edit-task"><i class="ri-pencil-line"></i></button>
     <button class="delete-task"><i class="ri-close-fill"></i></button>

 </div>`
 countContainer.insertAdjacentHTML("beforeend",tasks)


 const deleteButtons = document.querySelectorAll(".delete-task")
 deleteButtons.forEach((button)=>{
     button.onclick = ()=>{
        button.parentNode.remove();
        count -=1;
        displayCount(taskCount)
     }
 })

 const editButtons = document.querySelectorAll(".edit-task")
 editButtons.forEach((button)=>{
    button.onclick = (e)=>{
        let targetElement = e.target
        if (!(e.target.className == "edit-task")) {
            targetElement = e.target.parentElement
        }
        inputTask.value = targetElement.previousElementSibling?.innerText
        console.log(targetElement);
        targetElement.parentNode.remove();
       count -= 1
       displayCount(taskCount)
    }
 })

 const tasksCheck = document.querySelectorAll
 ("#task-complete");
 tasksCheck.forEach((checkBox) => {
 checkBox.onchange = () => {
     checkBox.nextElementSibling.classList.
 toggle ("completed");
 console.log(checkBox);
 if (checkBox.checked) {
     count -= 1;
     } else {
         count += 1;
 };
   displayCount(taskCount)
 }
 
 });




count += 1;
displayCount(taskCount)
inputTask.value = ""
}
addBtn.addEventListener("click", addTask);
window.onload(()=>{
    taskCount = 0;
    displayCount(taskCount);
    inputTask.value = ""
})

