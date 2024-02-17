const randomColor = ()=>{
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
      color += hex [Math.floor(Math.random()*16)]
        
    }
    return color
}

let intervalId;
const startChangingColor = ()=>{
 
  intervalId = setInterval(changeBgColor,1000)

 function changeBgColor (){
  document.body.style.backgroundColor = randomColor(); 
  
 }
}



const stopChangingColor = ()=>{
   clearInterval (intervalId);
   intervalId = null // hum null banate hai kyoki jab hum stop dabake start dabate hai to intervalId bar bar overWrite karti hai agar hum null karte hai fir stop dabate hai uski value null hogi matlab usme abhi kuch nahi bacha fir start karte hi new value lega isse optimazie way kehte hai code ka
}



document.querySelector("#start").addEventListener("click",startChangingColor)

document.querySelector("#stop").addEventListener("click",stopChangingColor)