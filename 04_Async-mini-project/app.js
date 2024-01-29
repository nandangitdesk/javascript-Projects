
function generateCards() {
    
fetch('https://api.randomuser.me/')
.then(data => data.json())
.then(result => {
   const{name,gender,email,picture}=result.results[0];
    document.querySelector("#parent").innerHTML += `<div class="card  w-60 bg-zinc-800 text-white rounded-md mt-4 p-4 ">
    <div class="h-16 w-16 rounded bg-zinc-500 mb-2 overflow-hidden">
        <img src="${picture.large}" alt="" class=" h-full w-full object-cover">
    </div>
    <h3 class="text-2xl font-semibold">${name.first}</h3>
    <h5 class="text-xs font-medium opacity-40 mt-2">${gender}</h5>
    <h6 class="text-xs font-sm opacity-60">${email}</h6>
    <p class="text-xs font-medium opacity-80 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt dolor animi. Odit!</p>
</div>`
})
}
document.querySelector(".addbtn").addEventListener("click",()=>{
    generateCards()
})



