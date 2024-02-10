let arr =[
    {
        name:"dog",
        image:"https://images.unsplash.com/photo-1658337921250-10578c1372fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"buildings",
        image:"https://images.unsplash.com/photo-1707155095165-ddc10745ac1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"models",
        image:"https://images.unsplash.com/photo-1669886912354-770b14fe7ffb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Super Cars",
        image:"https://images.unsplash.com/photo-1707438587276-2828a4576c52?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Nature Beauty",
        image:"https://images.unsplash.com/photo-1707143900043-6f9f22be629c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"national flag",
        image:"https://images.unsplash.com/photo-1660645966106-16cccab4d43b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"indian builds of glory",
        image:"https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

]

function showCards() {
    let clutter = " ";
    arr.forEach(obj => {
      clutter+=`<div class="box">
      <img class="images cursor-pointer" src="${obj.image}" alt="image">
      <div class="caption">${obj.name}</div>
  </div>`
    

    });
  
    document.querySelector(".container").innerHTML=clutter
}

function searchfunctionality() {
    let input = document.querySelector("#searchinput")


    input
    .addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display = "block"
    })

    input
    .addEventListener("blur",()=>{
        document.querySelector(".overlay").style.display = "none"
        document.querySelector(".searchdata").style.display = "none"
    })

    input
    .addEventListener("input",()=>{
       let filteredArray = arr.filter(elem => 
         elem.name.toLowerCase().startsWith(input.value)
        )
      
         let clutter ="";
         filteredArray.forEach(obj =>{
            clutter +=` <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
         })

         document.querySelector(".searchdata").style.display = "block"
         document.querySelector(".searchdata").innerHTML = clutter
      
     
    })
}


searchfunctionality()
showCards()