// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let wallet_amount = JSON.parse(localStorage.getItem("amount"));
let wallet = document.querySelector("#wallet");
wallet.innerText = wallet_amount;



let getData = async () =>{
    let query = document.querySelector("#search").value;
    const url = `https://www.omdbapi.com/?apikey=76929ce1&s=${query}`
    let res = await fetch(url);
    let data = await res.json();
    appendData(data.Search);
}


let id;
let debouncing = (delay,fun) =>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
      fun();
    },delay)
}

function appendData(data){
    let container = document.querySelector("#movies");
    container.innerHTML = null
    data.forEach((el)=>{
        let div = document.createElement("div");
        let avtar = document.createElement("img");
        let title = document.createElement("h3");
        let button = document.createElement("button");

        avtar.src = el.Poster;
        title.innerText = `Title:- ${el.Title}`;
        button.innerText = "Book Now";

        div.setAttribute("class","movie_tab");
        button.setAttribute("class","book_now");
        button.onclick = ()=>{
            localStorage.setItem("movie",JSON.stringify(el));
            window.location.href = "checkout.html";
            console.log(el);
        }
        div.append(avtar,title,button);
        container.append(div);

    })
}
