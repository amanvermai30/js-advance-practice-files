
let append = () => {
    let container = document.querySelector(".APDP");
    container.innerHTML = null
    let div = document.createElement("div");
    div.setAttribute("class", "appendDiv");
    let Admin = document.createElement("h3");
    let AdminA = document.createElement("a");
    AdminA.setAttribute("href", "adminLogin.html");
    AdminA.innerText = "Admin";
    Admin.append(AdminA);

    let user = document.createElement("h3");
    let userA = document.createElement("a");
    userA.setAttribute("href", "userLogin.html");
    userA.innerText = "User";
    user.append(userA);

    div.append(Admin, user);
    container.append(div);
}

// on click login //
let ChooseOption = () => {
    console.log("working")
    APDPFun()
    append()
}

// apear an disapear function //
function APDPFun() {

    let APDP = document.querySelector(".APDP");
    if (APDP.style.display == "block") {
        APDP.style.display = "none";
    } else {
        APDP.style.display = "block"
    }
}


// navbar js //


let signupData = JSON.parse(localStorage.getItem("signupData"));
let loginData = JSON.parse(localStorage.getItem("loginData"));

function userP() {
    const email = loginData.email;
    if (checkUserName(email) === true) {
    }

}
userP()



function checkUserName(email) {
    let filtered = signupData.filter((el) => {
        return email === el.email;
    })
    
    filtered.forEach((el) =>{
        let user = document.querySelector(".loginSignup");
        user.innerHTML = `<h2>  ${el.name.toUpperCase()} </h2>
        <h2> <a href="logout.html"> logout</a></h2>`;
        console.log(el.name)
    })
}

