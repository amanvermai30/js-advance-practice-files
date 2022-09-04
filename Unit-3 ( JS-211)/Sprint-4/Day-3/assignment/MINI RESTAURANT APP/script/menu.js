
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let getData = async ()=>{

    let res = await fetch("https://limitless-anchorage-06812.herokuapp.com/menu");
    let data = await res.json();
    console.log(data)
}
getData();