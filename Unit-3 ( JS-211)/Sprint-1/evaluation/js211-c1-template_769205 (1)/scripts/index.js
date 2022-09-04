/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/
let product_array = JSON.parse(localStorage.getItem("mobile_data")) || [];
let getData = () =>{
    let brandName = document.querySelector("#mobile_brand").value;
    let mobileName = document.querySelector("#mobile_name").value;
    let mobilePrice = document.querySelector("#mobile_price").value;
    let img = document.querySelector("#mobile_image").value;
    let product_obj = new createObj(brandName,mobileName,mobilePrice,img);
    if( brandName == "" || mobileName == "" || mobilePrice == "" || img == ""){
        alert("Please fill details");
    } else {
        product_array.push(product_obj);
        localStorage.setItem("mobile_data",JSON.stringify(product_array));
        window.location.reload();
    }
    console.log(product_array)

}


let submitFun = () =>{
    console.log("working")
    getData()
}

function createObj(br,na,pr,i){
    this.brand = br;
    this.name = na;
    this.price = pr;
    this.image = i;
}



