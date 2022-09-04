import navbar from "../components/nabar.js";
import categories from "../components/categories.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#categories").innerHTML = categories();



let appendData = (data) =>{
    let container = document.querySelector("#dataAppend");
    data.forEach(function(el){
        if( el.Categories == "Shirts"){

            let div = document.createElement("div");
            let name = document.createElement("p");
            name.innerText = el.Name;

            let price = document.createElement("p");
            price.innerText = el.Price

            let avtar = document.createElement("img");
            avtar.src = el.Image;

            div.append(avtar,name,price);
            container.append(div);
        }

    })

}



let getDataFromLs = JSON.parse(localStorage.getItem("localData"));
appendData(getDataFromLs);