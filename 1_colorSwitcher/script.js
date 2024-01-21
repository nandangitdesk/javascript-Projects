const body = document.querySelector("body");
const button = document.querySelectorAll(".buttons");
const h1 = document.querySelector("h1")
const h3 = document.querySelector("h3")


button.forEach((button)=>{

     button.addEventListener('click',function (val) {
        console.log(val.target);
        switch (val.target.id) {
            case "slategrey":
                body.style.backgroundColor = val.target.id;
                h1.style.color="#fff"
                h3.style.color="#fff"
                break;
            case "seagreen":
                body.style.backgroundColor = val.target.id;
                h1.style.color="#fff"
                h3.style.color="#fff"
                break;
            case "steelblue":
                body.style.backgroundColor = val.target.id;
                h1.style.color="#fff"
                h3.style.color="#fff"
                break;
            case "slateblue":
                body.style.backgroundColor = val.target.id;
                h1.style.color="#fff"
                h3.style.color="#fff"
                break;
            case "salmon":
                body.style.backgroundColor = val.target.id;
                h1.style.color="#fff"
                h3.style.color="#fff"
                break;
        
            default:
                break;
        }
        
     })


})