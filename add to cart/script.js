let productsArray = [
    {
        image:"https://images.unsplash.com/photo-1590685006710-2b478c69b26b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        name:"Green Peas",
        headline : "peas for peace",
        price:"100/kg"
    },
    {
        image:"https://images.unsplash.com/photo-1576856497337-4f2be24683da?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        name:"Red Tomatoes",
        headline : "bloody sweet's!",
        price:"50/kg"
    },
    {
        image:"https://images.unsplash.com/photo-1541309911807-7c51d4031ea7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        name:"Pumpkin",
        headline : "pumpkin pleasures!",
        price:"150"
    },    
    {
        image:"https://images.unsplash.com/photo-1531326240216-7b04ad593229?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        name:"Bananas",
        headline : "sweet banana delight!",
        price:"40"
    },    
    {
        image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        name:"Broccoli",
        headline : "broccoli days!",
        price:"200/kg"
    }   


]

let popularArray = [
    {
        image:"https://images.unsplash.com/photo-1566055803687-0665ef48df90?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Potatos",
        headline:"golden potatoes!",
        price:"50/kg"
    },
    {
        image:"https://images.unsplash.com/photo-1566842600175-97dca489844f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Cauliflower",
        headline:"cauli charm!",
        price:"80"
    },
    {
        image:"https://images.unsplash.com/photo-1528826007177-f38517ce9a8a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Brinjal",
        headline:"brinjal bliss!",
        price:"250/kg"
    },
    {
        image:"https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Farm Cucumber",
        headline:"crisp cucumber joy!",
        price:"30/kg"
    }
]

function addProducts() {
    let clutter = "" ;
    productsArray.forEach(function(product,index) {
       clutter +=` <div class="product w-fit rounded-xl p-2 bg-white">
       <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
           <img class="w-full h-full object-cover" src="${product.image}" alt="">
       </div>
       <div class="data w-full px-2 py-5">
           <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
           <div class="flex justify-between w-full items-center mt-2">
               <div class="w-1/2">
                   <h3 class="font-semibold opacity-20">${product.headline}</h3>
                   <h4 class="font-semibold mt-2"> &#8377; ${ product.price}</h4>
               </div>
               <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                       class="add ri-add-line"></i></button>
           </div>
       </div>
   </div>`
    });
    document.querySelector(".products").innerHTML = clutter
}

function addPopulars() {
    let clutter = "";
    popularArray.forEach(popular => {
        clutter += `         <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${popular.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${popular.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500"> &#8377; ${popular.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML =clutter
}

let cart =[]

function addToCart() {
    document.querySelector(".products")
    .addEventListener("click",function(dets){
        if (dets.target.classList.contains('add')) {
           cart.push(productsArray[dets.target.dataset.index])
        }
    })
}

function checkoutProduct(){
    document.querySelector(".carticon").addEventListener("click",function(){
       let cardExpand = document.querySelector(".cartexpnd").style.display = "block"
        let clutter = " ";
        cart.forEach(prodt =>{
            clutter +=`    <div class="flex gap-2 rounded-lg bg-white p-2">
            <div class="w-10 h-10 flex-shrink-0  rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prodt.image}" alt="">
            </div>
            <div>
              <h3 class="font-semibold">${prodt.name}</h3>
              <h5 class="text-sm font-semibold opacity-80">&#8377;${prodt.price}</h5>
            </div>
          </div>`
        })
        document.querySelector(".cartexpnd").innerHTML = clutter
    })
    document.querySelector(".hide-cart").addEventListener("click",function(){

        document.querySelector(".cartexpnd").style.display = "none"
    })

    
}

checkoutProduct()
addToCart()
addPopulars()
addProducts()