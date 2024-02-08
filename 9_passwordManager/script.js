
function maskPassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str  += "*"
    }
    return str
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(()=>{
      
       document.querySelector("#alert").style.display = "inline";


       setTimeout(()=>{
           document.querySelector("#alert").style.display = "none"

       },2000)
    },()=>{

        alert("copy of text is failed!") 
    })
}


const deletePassword= (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data)
     arrUpdated = arr.filter((e)=>{
          return e.website != website
     })
     localStorage.setItem("passwords", JSON.stringify(arrUpdated));  
     alert`successfully deleted ${website} website`
     showPasswords()
}

 const showPasswords = ()=>{
 let tb = document.querySelector("table");
 let data = localStorage.getItem("passwords")
 if (data == null || JSON.parse(data).length == 0) {
         tb.innerHTML = "No Data To Show"
} else
   {
     tb.innerHTML=` 
     <tr>
     <th>Website</th>
     <th>Username</th>
     <th>Password</th>
     <th>Delete</th>
    </tr> `
    let arr = JSON.parse(data)
    let str = ""
     for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        str += `<tr>
        <td>
        ${element.website} <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
        </td>
        <td>
        ${element.username} <img onclick="copyText('${element.username}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
        </td>
        <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
        </td>
        <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr> `
     }
     
     tb.innerHTML=tb.innerHTML + str
   }
 website.value=""
 username.value=""
 password.value=""
}
showPasswords();



document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(username.value,password.value);
    let passwords= localStorage.getItem("passwords")
    console.log(passwords);


    // Checking if there are any passwords stored
if (passwords == null) {
    // If no passwords are stored, create a new list
    let json = []; // Creating an empty array to store passwords
    // Pushing a new password entry into the array
    json.push({ 
        website: website.value, // Getting the website value from a form input
        username: username.value, // Getting the username value from a form input
        password: password.value // Getting the password value from a form input
    });
    alert("Password Saved"); // Displaying an alert message
    localStorage.setItem("passwords", JSON.stringify(json)); // Saving the passwords to localStorage
} else {
    // If passwords are already stored, add a new entry to the existing list
    let json = JSON.parse(localStorage.getItem("passwords")); // Retrieving stored passwords from localStorage
    // Pushing a new password entry into the existing array
    json.push({ 
        website: website.value, // Getting the website value from a form input
        username: username.value, // Getting the username value from a form input
        password: password.value // Getting the password value from a form input
    });
    alert("Password Saved"); // Displaying an alert message
    localStorage.setItem("passwords", JSON.stringify(json)); // Saving the updated passwords to localStorage
    showPasswords();
}
})
























































































// function maskPassword(pass){
//     let str = ""
//     for (let index = 0; index < pass.length; index++) {
//         str  += "*"
//     }
//     return str
// }

// function copyText(txt) {
//     navigator.clipboard.writeText(txt).then(
//         () => {
//           /* clipboard successfully set */
//           document.getElementById("alert").style.display = "inline"
//           setTimeout(() => {
//             document.getElementById("alert").style.display = "none"
//           }, 2000);

//         },
//         () => {
//           /* clipboard write failed */
//           alert("Clipboard copying failed")
//         },
//       );
//   }

// const deletePassword = (website)=>{
//     let data = localStorage.getItem("passwords")
//     let arr = JSON.parse(data);
//     arrUpdated = arr.filter((e)=>{
//         return e.website != website
//     })
//     localStorage.setItem("passwords", JSON.stringify(arrUpdated))
//     alert(`Successfully deleted ${website}'s password`)
//     showPasswords()

// }

// // Logic to fill the table
// const showPasswords = () => {
//     let tb = document.querySelector("table")
//     let data = localStorage.getItem("passwords")
//     if (data == null || JSON.parse(data).length == 0) {
//         tb.innerHTML = "No Data To Show"
//     }
//     else {
//         tb.innerHTML =  `<tr>
//         <th>Website</th>
//         <th>Username</th>
//         <th>Password</th>
//         <th>Delete</th>
//     </tr> `
//         let arr = JSON.parse(data);
//         let str = ""
//         for (let index = 0; index < arr.length; index++) {
//             const element = arr[index];

//             str += `<tr>
//     <td>${element.website} <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
//     </td>
//     <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
//     </td>
//     <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
//     </td>
//     <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
//         </tr>`
//         }
//         tb.innerHTML = tb.innerHTML + str

//     }
//     website.value = ""
//     username.value = ""
//     password.value = ""
// }

// console.log("Working");
// showPasswords()
// document.querySelector(".btn").addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("Clicked....")
//     console.log(username.value, password.value)
//     let passwords = localStorage.getItem("passwords")
//     console.log(passwords)
//     if (passwords == null) {
//         let json = []
//         json.push({website: website.value, username: username.value, password: password.value })
//         alert("Password Saved");
//         localStorage.setItem("passwords", JSON.stringify(json))
//     }
//     else {
//         let json = JSON.parse(localStorage.getItem("passwords"))
//         json.push({ website: website.value, username: username.value, password: password.value })
//         alert("Password Saved");
//         localStorage.setItem("passwords", JSON.stringify(json))
//     }
//     showPasswords()
// })
