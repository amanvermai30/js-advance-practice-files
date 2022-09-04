

let appendData = (data) =>{
    let container = document.querySelector("#mobile_list");
    data.forEach((el,index)=>{
    
        let img = document.createElement("img");
        img.src = el.image;

        let brand = document.createElement("h3");
        brand.innerText = el.brand;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;
        console.log(typeof el.price)

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.setAttribute("class","remove")
        button.onclick = () =>{
            removeFun(index);
        }

        let div = document.createElement("div");
        div.setAttribute("class","mobile");

        div.append(img,brand,name,price,button);
        container.append(div);
    })

}



let dataFromLs = JSON.parse(localStorage.getItem("mobile_data"));
appendData(dataFromLs);

function removeFun(index){
    dataFromLs.splice(index,1);
    localStorage.setItem("mobile_data",JSON.stringify(dataFromLs));
    window.location.reload()
}


// function sorting

let sort_lth = () =>{
    document.querySelector("#mobile_list").innerHTML = null
    dataFromLs.sort(function(a,b){
        return a - b;
    })
    appendData(dataFromLs)
}
document.querySelector("#sort_lth").addEventListener("click",sort_lth);



