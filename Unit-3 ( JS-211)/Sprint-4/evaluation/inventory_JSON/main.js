// Use deployed URL.


let addProduct = async ()=>{
    let name = document.querySelector("#name").value;
    let price = +document.querySelector("#price").value;
    let des = document.querySelector("#description").value;
    let date = document.querySelector("#delivery").value;
    let image = document.querySelector("#image").value;
    let items = new constructor(name,price,des,date,image);

    let res = await fetch("https://limitless-anchorage-06812.herokuapp.com/product",{
        method:"POSt",
        body:JSON.stringify(items),
        headers:{
            "Content-Type":"application/json",
        }
    });

    let data = await res.json();
    window.location.reload();
}


function constructor(n,p,d,da,i){
    this.name = n;
    this.price = p;
    this.description = d;
    this.date = da;
    this.image = i;
}



let renderData = async ()=>{

    let res = await fetch("https://limitless-anchorage-06812.herokuapp.com/product");
    let data = await res.json();
    // console.log(data)
    getData(data);
}
renderData();

let getData = (data) =>{
    let container = document.querySelector("#container");
    container.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        let avtar = document.createElement("img");
        let h3 = document.createElement("h3");
        let price = document.createElement("p");
        let date = document.createElement("p");
        let des = document.createElement("p");
        let remove = document.createElement("button");
        remove.onclick = ()=>{
            removeProduct(el.id);
        }
        let update_price = document.createElement("button");
        update_price.onclick =()=>{
            update_pro(el.id);
        }

        div.setAttribute("class","item");
        price.setAttribute("class","product_price");
        date.setAttribute("class","product_delivery");
        remove.setAttribute("class","remove_item");
        avtar.src = el.image;
        h3.innerText = el.name;
        price.innerText = el.price;
        date.innerText = `Delivery by:${el.date}`;
        des.innerText = el.description;
        remove.innerText = "Remove";
        update_price.innerText = "Update Price";
        div.append(avtar,h3,price,date,des,remove,update_price);
        container.append(div);

    })
    console.log(data);
}

let removeProduct = async (id) =>{
    let res = await fetch(`https://limitless-anchorage-06812.herokuapp.com/product/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    });
    res = await res.json();
    renderData();
    console.log(res)


}


let sortLowToHigh = async ()=>{
    let res = await fetch(`https://limitless-anchorage-06812.herokuapp.com/product?_sort=price&_order-asc`)

    res = await res.json();
    getData(res);

}

let sortHighToLow = async ()=>{
    let res = await fetch(`https://limitless-anchorage-06812.herokuapp.com/product?_sort=price&_order=desc`)

    res = await res.json();
    getData(res);

}



let update_pro = (id) =>{
    window.prompt;
    const new_price = +prompt("Enter new Price");
    console.log(new_price)

}