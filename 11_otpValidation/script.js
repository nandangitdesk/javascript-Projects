document.querySelector("#generateOtp").addEventListener("click",()=>{
    let generatedOtp = Math.floor(1000 + Math.random()*9000);
    console.log(generatedOtp);
    window.localStorage.setItem("otp",generatedOtp);
    document.querySelector("#dispMsg").innerHTML=`${generatedOtp}`
    
});

    const validateBtn = document.querySelector("#validateOtp").addEventListener("click",()=>{
        const otpInput = document.querySelector(".validateOtp").value;
       let otp = window.localStorage.getItem("otp")
        if (otpInput === otp ) {
            alert("valid Otp , Successed")
        }else{
            alert("Inavlid Otp")
        }

        
        
        
    })
 
