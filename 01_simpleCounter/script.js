// <!-- #F8F8FF -->
// <!-- <div id="1e1e1e"></div> -->
// //cdff8c
// //1f1d1f
// //bda5fb
// //efefef


let count=0;

let decrese=document.querySelector(".decresebtn");
let reset=document.querySelector(".resetbtn");
let increse=document.querySelector(".incresebtn");

decrese.addEventListener("click",function () {
   count-=1
  
   document.querySelector(".insideCounter h1").innerHTML=count;
   document.querySelector(".insideCounter h1").style.scale =0.8;
})

reset.addEventListener("click",function () {
    count=0
   
    document.querySelector(".insideCounter h1").innerHTML=count;
    document.querySelector(".insideCounter h1").style.scale =0.6;
 })

 
increse.addEventListener("click",function () {
    count+=1
   
    document.querySelector(".insideCounter h1").innerHTML=count;
    document.querySelector(".insideCounter h1").style.scale =0.8;
 })


