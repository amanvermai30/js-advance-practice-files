import navbar from "../components/navbar.js";

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
    console.log(login_data)
    let login_api_link = 'https://masai-api-mocker.herokuapp.com/auth/login';

    let response = await fetch(login_api_link, {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    let res = await response.json();
    console.log(res)
    saveUser(login_data.username,res.token,50000);

}


let saveUser = (username,token,time) =>{

    let user = {
        username,
        token,
    }
    localStorage.setItem("user_details",JSON.stringify(user));
    setTimeout(()=>{
        localStorage.setItem("user_details",JSON.stringify(null));
    },time)
}


