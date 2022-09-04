import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let submit_btn = document.querySelector("#submit")
submit_btn.onclick = () =>{
   register();
}

let register = async () =>{
   let data = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    user: document.querySelector("#user_name").value,
    mobile: document.querySelector("#mobile_num").value,
    description: document.querySelector("#description").value,
   }
    console.log(data)
   let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
    method:"POST",
    body: JSON.stringify(data),
    headers:{
        "Content-Type":"application/json",
    }
   })

    res = await res.json();
   console.log(res)
}


