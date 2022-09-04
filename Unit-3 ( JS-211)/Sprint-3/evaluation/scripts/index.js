/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let submit = () =>{
    let pic = document.querySelector("#user_pic").value;
    let name = document.querySelector("#user_name").value;
    let email = document.querySelector("#user_email").value;
    let country = document.querySelector("#user_country").value;

    let user = new constructor(pic,name,email,country);
    localStorage.setItem("user",JSON.stringify(user));
    console.log(user)

   document.querySelector("#user_pic").value = null;
   document.querySelector("#user_name").value = null;
   document.querySelector("#user_email").value = null;
    
}


function constructor(p,n,e,c){
    this.image = p;
    this.name = n;
    this.email = e;
    this.country = c;

}