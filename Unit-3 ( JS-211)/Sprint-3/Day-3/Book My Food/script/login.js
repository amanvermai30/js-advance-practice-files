import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let btn=document.getElementById("submit");
btn.onclick=()=>{
    Login();
};

let Login = async ()=>{
    let login_data = {
        password: document.getElementById("login-password").value,
        username: document.getElementById("login-username").value,
    }

    login_data = JSON.stringify(login_data)
    console.log(login_data)
    let login_api_link = 'https://masai-api-mocker.herokuapp.com/auth/login';

    let response = await fetch(login_api_link, {
        method: 'POST',
        body: login_data,
        // mode:"no-cors",
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json();

    console.log(res)
}