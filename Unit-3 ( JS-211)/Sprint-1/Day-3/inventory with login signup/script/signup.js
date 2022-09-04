
let userArray =JSON.parse(localStorage.getItem("signupData")) || [];
let getSignupDetails = () =>{
   let name = document.querySelector("#name").value;
   let email = document.querySelector("#email").value;
   let password = document.querySelector("#pass").value;
   let userObj = new createObj(name,email,password);
   if(checkEmail(email) === true){
       userArray.push(userObj);
       localStorage.setItem("signupData",JSON.stringify(userArray));
       alert("Signup Successfully")
       window.location.href = "userLogin.html"
   } else {
    alert("Account Already Exists , Please Login your Account");
   console.log(userObj)
   }
}




// event for signup //
let signup = () =>{
    getSignupDetails()

}

// this function is creating user obj //
function createObj(na,em,pass){
    this.name = na;
    this.email = em;
    this.password = pass;

}


function checkEmail(email){
    let filtered = userArray.filter((el) =>{
        return email === el.email;
    })
    if( filtered.length > 0){
        return false;
    }
    else {
        return true;
    }
}