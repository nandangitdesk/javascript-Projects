let clock=document.querySelector(".clock");
  

setInterval(() => {
    let time = new Date();
    clock.innerHTML=time.toLocaleTimeString();
    clock.style.fontSize="5rem"
}, 1000);