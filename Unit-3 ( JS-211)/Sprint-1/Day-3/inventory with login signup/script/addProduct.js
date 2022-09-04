
// taking user data as an array of obj and storing it in localstorage // 
 let userArray =JSON.parse(localStorage.getItem("usersData")) || [];
let productDetails = () =>{
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let img = document.querySelector("#img").value;
    let userObj = new cereateObj(name,price,img);
    userArray.push(userObj);
    localStorage.setItem("usersData",JSON.stringify(userArray));
    console.log(userArray)
}

// after event //
let submit = () =>{
    productDetails()
}
// function for creating obj  ( constructor function )//
function cereateObj(na,pr,i){
    this.name = na;
    this.price = pr;
    this.img = i;

}