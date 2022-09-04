

import sidebar from "../components/sidebar.js";
document.querySelector("#sidebar").innerHTML = sidebar();


let getUser = (data) =>{
    let img = document.querySelector("#user_img");
    let name = document.querySelector("#user_name");
    let email = document.querySelector("#user_email");
    let country = document.querySelector("#user_country");

    img.src = data.image;
    name.innerText = data.name;
    email.innerText = data.email;
    if(data.country == "in"){
     country.innerText = "India";
        
    } else if(data.country == "ch"){
        country.innerText = "China";

    } else if( data.country == "nz"){
        country.innerText = "Newzeland";

    } else if(data.country == "us"){
        country.innerText = "USA";
    } else{
        country.innerText = "UK";
    }

}
let user = JSON.parse(localStorage.getItem("user"));
getUser(user);


let appendData =  (data)=>{
    let container = document.querySelector("#detailed_news")
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let des = document.createElement("h4");

    img.src = data.image;
    title.innerText = data.author;
    div.append(img,title)
    container.append(div);
    console.log(data.image)

}
let newFromLs = JSON.parse(localStorage.getItem("detailed_news"));
console.log(newFromLs);