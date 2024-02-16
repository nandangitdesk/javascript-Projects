const addBtn = document.querySelector(".addTask");
const inputTask = document.querySelector (".inputTask");
const taskContainer = document.querySelector("#Tasks");
const countValue = document.querySelector(".taskCount");
const errMsg = document.querySelector(".errorMsg");

let taskCount = 0;

const displayCount = (taskCount)=>{
    countValue.innerText = taskCount;
}

const addTask = ()=>{
    const taskName = inputTask.value.trim();
    errMsg.style.display = "none";
    if (!taskName) {
      setTimeout(() => {
        errMsg.style.display = "block"
      }, 200);
      return;
    }

    const tasks = ` <div class="tasks">
    <input type="checkbox" class="taskCheck">
    <span class="taskName">${taskName}</span>
    <button class="edit">
    <i class="ri-edit-box-line"></i>
    </button>
    <button class="delete">
    <i class="ri-delete-bin-2-line">
    </i></button>
</div>`;
 taskContainer.insertAdjacentHTML("beforeend",tasks)
  

 const deleteButtons = document.querySelectorAll(".delete")
 deleteButtons.forEach((button) => {
    button.onclick = ()=>{
        button.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    }
 });

 
 const editButtons = document.querySelectorAll(".edit")
 editButtons.forEach((editBtn) => {
    editBtn.onclick = (e)=>{
       let targerElement = e.target;
      
       if (!(e.target.className == "edit")) {
          targerElement = e.target.parentElement
       }
       inputTask.value = targerElement.previousElementSibling?.innerText
       targerElement.parentNode.remove();
       taskCount -= 1
       displayCount(taskCount)
    }
 });

 const tasksCheck = document.querySelectorAll
(".taskCheck");
tasksCheck.forEach((checkBox) => {
checkBox.onchange = () => {
    checkBox.nextElementSibling.classList.
toggle ("completed");
if (checkBox.checked) {
    taskCount -= 1;
    } else {
        taskCount += 1;
};
  displayCount(taskCount)
}

});

taskCount += 1;
displayCount(taskCount)
inputTask.value = ""

}

addBtn.addEventListener("click", addTask);

window.onload(()=>{
    taskCount = 0;
    displayCount(taskCount);
    inputTask.value = ""
})