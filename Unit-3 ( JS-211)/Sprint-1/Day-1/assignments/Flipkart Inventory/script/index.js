// importing navbar and categories from componets //

import navbar from "../components/nabar.js";
import categories from "../components/categories.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#categories").innerHTML = categories();

// slide show part //

let image = [
    `https://i.pinimg.com/originals/97/78/d3/9778d3097e8ce5c393481dd7531a2af1.png`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258355.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258399.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258359.jpg`,
    `https://i0.wp.com/rrslide.com/wp-content/uploads/edd/2021/04/Slide1-min-59.jpg`,
    `https://epicentrk.ua/upload/medialibrary/1a2/chto-pokupali-ukraintsy-v-chernuyu-pyatnitsu-2018.jpg`,
    `https://www.titanium.lv/wp-content/uploads/2021/08/pokupki.jpg`,
    `https://todaynewsspot.com/wp-content/uploads/2020/01/pcquest.jpg`,
    `https://smallbizclub.com/wp-content/uploads/2018/11/Potential-Risks-of-Online-Shopping.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258349.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258375.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258359.jpg`,
    `https://media.slidesgo.com/storage/51700/conversions/A3RcpE0jol-OKVs75_-8ZAIWreHt-K3QoBZx8b_8YPv2LIQ4Yv6qUSV41-d50RlBYbyowzykQGK5pRJC0vdw9adncXZOLfwzHIkcCv217d9RjdFo3OjQ5GAJKhUHY7BtMIGwkeyy8v99kj_3KmuVrZn5vKwSfiTZBX7tJMKcczoSwn-4U1zaeV1CnIaoeCEhgiU9sA=s1600-thumb.jpg`,
    `https://media.slidesgo.com/storage/51702/conversions/-jdUf0bm0u9s3tE8ceoBOL30QMwor8TFEMRHCaPjIrh-j8B7d5g7rKgnpEOHT1GovebsGiUb-5HN1-isYUkNIEu-0mKOf0IR1qVHfDJ7ecgADYmyva_C1VucDQUcteolM7QCi6lJ6WARlvT7h-efGIAhvoJSAk9brNJFrJA4X23I13Pg2H0RB8aqnMi24hv2fsqyMQ=s1600-thumb.jpg`,
    `https://media.slidesgo.com/storage/51708/conversions/7w7gICTIuX4cZ_CkvbfWoUICBvigTSHLL6L5S-NJ-o0hP4q9MQvuVuxDGehwc9R313b7f4e0cdLvAE9V5chRTD-ThpcZ8mxba6DoGBpYJ76TG9SgyptSyBUNpldJS9EX6q2uOgwyfJA7JZ9Kxk0s5BTfT1W7p767zJyddsOYr9GWtDAArjvn-H5Ko9K1z1Y25g52xw=s1600-thumb.jpg`,
    `https://media.slidesgo.com/storage/51701/conversions/O5vPF9-PkpvJhPI3S7_Hhoyxr8-Uos-Q2AVRnoASHf7hcBw3y5E7eDZRH0VVYtvqlVj-XDTyDsphOq5WW8TjraBzxgQHqQT8waTEJ3PXmwcG4zT2vhk_ynioZSm2Vtgbtc-2Pe-gpT4R9-Mn_bKTndTFqJclmGFi8YXypDF5jMZv0BnPAYBulkYbqAq-4PpzjOIUgw=s1600-thumb.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258371.jpg`,
    `https://imgscf.slidemembers.com/docs/1/1/442/online_shopping_powerpoint_themes_441526.jpg`
]

let index = 0;
let id;
let avtar;

let slidShow = () => {
    let container = document.querySelector("#slide_show");

    id = setInterval(() => {

        if (index === image.length) {
            index = 0;
        }
        container.innerHTML = null;
        avtar = document.createElement("img");
        avtar.src = image[index]
        container.append(avtar);
        index++;
    }, 2000)



}

// stop function //

let stop = () =>{
    console.log("w")
    clearInterval(id);
}

slidShow();

// ********** this part is about next img ( press btn of next) ***********// 
let nextFun = () =>{

    clearInterval(id);
    if( index == image.length){
        index = 0;
    }

    avtar.src = image[index];
    index++;
    slidShow()
}
document.querySelector("#nextBtn").addEventListener("click",nextFun);

// ****** this part is about previous img ( when i will click on pre btn it will give pre img)
// ********

let preFun = () =>{

    clearInterval(id);
    if( index == 0){
        index = image.length-1;
    }
    avtar.src = image[index];
    index--;
    slidShow()
}
document.querySelector("#preBtn").addEventListener("click",preFun);

// continue and stop function //

let play = true;
let setPlayPause = () =>{
    play = !play;
    if(play){
        let btn = document.querySelector("#play");
        btn.innerText = "Stop"; 
        slidShow()
    } else {
        let btn = document.querySelector("#play");
        btn.innerText = "Slide Show"; 
        stop();

    }
    
}

document.querySelector("#play").addEventListener("click",setPlayPause);


// taking data from user and storing it in local storage //

function product_obj(name,price,img,categories){
    this.Name = name;
    this.Price = price;
    this.Image = img;
    this.Categories = categories;

}

let productArray =JSON.parse(localStorage.getItem("localData")) || [];
let data = () =>{
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let img = document.querySelector("#image").value;
    let categories = document.querySelector("#categories_op").value; 

    if( name == "" || price == "" || img == "" || categories == ""){
        alert("Please fill product details");
    } else {
       let product = new product_obj(name,price,img,categories);
        productArray.push(product);
        window.location.reload()
        localStorage.setItem("localData",JSON.stringify(productArray));
    }
    
}

// on click submit data will store.//
let submit = () =>{
    data();
   
}

document.querySelector("#submit").addEventListener("click",submit)
