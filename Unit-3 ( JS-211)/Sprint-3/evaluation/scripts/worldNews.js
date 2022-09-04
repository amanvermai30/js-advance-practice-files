

// this part is my sidebar //
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

/// **********************************************







// onclick countryNews //
window.onload = async ()=>{
    const url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${user.country}`;
    let res = await fetch(url);
    let data = await res.json();
    appendCountryNews(data.articles);

}

let CountryNews = async (query)=>{
  const url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${query}`;
   let res = await fetch(url);
   let data = await res.json();
//    console.log(data);
   appendCountryNews(data.articles);
}

let appendCountryNews = (data) =>{
    let container = document.querySelector("#news_result");
    container.innerHTML = null
  data.forEach((el)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let author = document.createElement("p");

    img.src = el.urlToImage;
    title.innerText = `Title:- ${el.title}`;
    author.innerText = `Author:- ${el.author}`;
    div.setAttribute("class","news");
    div.onclick = () =>{
        detailed_news(el);
    }
    div.append(img,title,author);
    container.append(div);

  })
}


let detailed_news = (data) =>{
    localStorage.setItem("detailed_news",JSON.stringify(data));
    window.location.href = "news.html";
}