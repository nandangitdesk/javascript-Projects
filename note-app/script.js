// C R U D 
// Create Read Update Delete Search


// let addNoteContainer = document.getElementById('addNoteContainer')

// function showAllNotes(){
//     addNoteContainer.style.display = 'none';
//     let allNotes;
//     let notes = localStorage.getItem("notes")
//     if(notes === null){
//         allNotes =[]
//     }else{
//         allNotes = JSON.parse(notes);
//     }

//     let notesContainer = document.getElementById('notes');
//     notesContainer.innerHTML = '';
//     allNotes.forEach((note, index) => {
//         notesToBeShown = `<div class="card" style="width: 18rem;">
//                             <div class="card-body">
//                                 <h5 class="card-title">${note.title}</h5>
//                                 <p class="card-text">${note.descp}</p>
//                                 <button class="btn btn-warning card_btns" onclick="deleteNote(${index})"><img src="./delete.svg" alt="" class="delete_btn"></button>
//                                 <button class="btn btn-warning card_btns" onclick="editNote(${index})"><img src="./edit.svg" alt="" class="edit_btn"></button>
//                             </div>
//                         </div>`
        
//         notesContainer.innerHTML = notesContainer.innerHTML + notesToBeShown
//     });
// }

// showAllNotes()

// let addNoteBtn = document.getElementById('addNote')
// addNoteBtn.addEventListener('click', ()=>{
//     let allNotes;
//     let notes = localStorage.getItem("notes")
//     if(notes === null){
//         allNotes =[]
//     }else{
//         allNotes = JSON.parse(notes);
//     }
//     let title = document.getElementById('title')
//     let descp = document.getElementById('descp');
//     let newNoteObj = {
//         title : title.value,
//         descp : descp.value
//     }

//     if(addNoteBtn.innerText === "Update Note"){
//         let editCard = document.querySelector('.card')
//         let editIndex = editCard.getAttribute('editIndex') 
//         allNotes[editIndex] = newNoteObj
//     }else{
//         allNotes.push(newNoteObj);
//     }
//     localStorage.setItem("notes", JSON.stringify(allNotes))
//     title.value = ''
//     descp.value = ''
//     showAllNotes()

// })

// let navAddNoteBtn = document.getElementById('navAddNote')
// navAddNoteBtn.addEventListener('click', function (){
//     addNoteContainer.style.display = 'block';
//     addNoteBtn.innerText = 'Save'
// })

// function deleteNote(noteIndex){
//     let allNotes = JSON.parse(localStorage.getItem('notes'));
//     allNotes.splice(noteIndex, 1)
//     localStorage.setItem("notes", JSON.stringify(allNotes))
//     showAllNotes()
// }

// function editNote(noteIndex){
//     let allNotes = JSON.parse(localStorage.getItem('notes'));
//     addNoteContainer.style.display = 'block';
//     addNoteBtn.innerText = 'Update Note'

//     let title = document.getElementById('title')
//     let descp = document.getElementById('descp');

//     title.value = allNotes[noteIndex].title
//     descp.value = allNotes[noteIndex].descp

//     let editCard = document.querySelector('.card')
//     editCard.setAttribute('editIndex', `${noteIndex}`)
//     console.log(editCard);
// }


// let search = document.getElementById('search')
// search.addEventListener('input', ()=> {
//     let inputValue = search.value.toLowerCase()
//     let allCards = document.getElementsByClassName('card');

//     Array.from(allCards).forEach((ele)=>{
//         let cardText = ele.getElementsByTagName('p')[0].innerText

//         if(cardText.toLowerCase().includes(inputValue)){
//             ele.style.display = 'block';
//         }
//         else{
//             ele.style.display ='none';
//         }
//     })
// })



let inputNoteContainer = document.querySelector(".input-note-container");

function showAllNotes() {
    inputNoteContainer.style.display = "none"
    let allNotes;
    let notes = localStorage.getItem("notes")
    if(notes === null){
        allNotes =[]
    }else{
        allNotes = JSON.parse(notes);
    }

    let cardsContainer = document.querySelector(".cards")
    cardsContainer.innerHTML = '';
    allNotes.forEach((note,index) => {
        notesTobeShown = `<div class="card">
        <h4>${note.title}</h4>
        <p>${note.description}</p>
        <div class="card-icons">
         <i class="ri-file-edit-line" id="edit-btn" onclick=editNote(${index})></i>
         <i class="ri-delete-bin-7-fill" id="delete-btn" onclick=deleteNote(${index})></i>
        </div>
   </div>`
   cardsContainer.innerHTML = cardsContainer.innerHTML + notesTobeShown
    });
}
showAllNotes()

let addNotebtn = document.querySelector(".add-new-note-btn")
addNotebtn.addEventListener("click",function(){
    let allNotes;
    let notes = localStorage.getItem("notes")
    if(notes === null){
        allNotes =[]
    }else{
        allNotes = JSON.parse(notes);
    }

    let title = document.querySelector(".note-title")
    let description = document.querySelector(".note-description")

    let newNoteObj = {
        title : title.value,
        description : description.value
    }

    if (addNotebtn.innerHTML === "Update Note") {
        let editCard = document.querySelector('.card')
        let editIndex = editCard.getAttribute('editIndex') 
        allNotes[editIndex] = newNoteObj
    }else{
        allNotes.push(newNoteObj);
    }
  

    localStorage.setItem("notes", JSON.stringify(allNotes))
    title.value = ''
    description.value = ''
    showAllNotes()
})

let newBtn = document.querySelector(".add-note-btn")
newBtn.addEventListener("click",function(){
    inputNoteContainer.style.display = "block"
    addNotebtn.innerHTML="Save"
})



function deleteNote(Index){
    let allNotes = JSON.parse(localStorage.getItem("notes"))
    allNotes.splice(Index,1)
    localStorage.setItem("notes", JSON.stringify(allNotes))
    showAllNotes()
}



let search = document.getElementById('search')
search.addEventListener('input', ()=> {
    let inputValue = search.value.toLowerCase()
    let allCards = document.getElementsByClassName('card');

    Array.from(allCards).forEach((ele)=>{
        let cardText = ele.getElementsByTagName('p')[0].innerText

        if(cardText.toLowerCase().includes(inputValue)){
            ele.style.display = 'block';
        }
        else{
            ele.style.display ='none';
        }
    })
})


function editNote(index){
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    inputNoteContainer.style.display = 'block';
    addNotebtn.innerText = 'Update Note'

    let title = document.querySelector(".note-title")
    let description = document.querySelector(".note-description")

    title.value = allNotes[index].title
    description.value = allNotes[index].description

    let editCard = document.querySelector('.card')
    editCard.setAttribute('editIndex', `${index}`)
    console.log(editCard);
}





































