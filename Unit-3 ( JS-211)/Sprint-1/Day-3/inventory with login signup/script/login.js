
let userArray = JSON.parse(localStorage.getItem("signupData")) || [];
let getLoginData = () =>{
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let userObj = new createObj(email,password);
    if( chekLogin(email,password) === true){
        localStorage.setItem("loginData",JSON.stringify(userObj));
        alert("login successfull, Please continue with your shoping");
        window.location.href = "index.html"
    } else{
        alert("Please Enter Valid Email ID or Password");
    }
}

let UserLogin = () =>{
    getLoginData();
}



// this function is creating user obj //
function createObj(em,pass){
    this.email = em;
    this.password = pass;

}


function chekLogin(email,password){
    let filtered = userArray.filter((el)=>{
        return email === el.email && password == el.password
    })
    if(filtered.length > 0){
        return true;
    } else {
        return false;
    }


}