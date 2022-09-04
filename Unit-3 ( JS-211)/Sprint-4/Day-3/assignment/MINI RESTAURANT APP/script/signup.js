
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let signup = document.getElementById('submit');
signup.onclick = () => {
    register();
}

let register = async() => {
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    }
    console.log(data)

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        }
    }) 
    res=await res.json()
    console.log(res);
}