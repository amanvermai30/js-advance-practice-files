


const img_url = ` https://image.tmdb.org/t/p/w500`


function append(data){
    let container = document.querySelector("#append-container");
    let avtar = document.createElement("img");
        avtar.src = `${img_url+data.poster_path}`;
        

    let title = document.createElement("h1");
    title.setAttribute("class","title")
    title.innerText = ` ${data.original_title}`;

    let release_date = document.createElement("p");
    release_date.innerText = `Release Date:- ${data.release_date}`;
    release_date.setAttribute("class","release");
    let rating = document.createElement("p");
    rating.innerText = `Rating:- ${data.vote_average}`;
    rating.setAttribute("class","rating")
    container.append(title,rating,release_date,avtar);
    console.log(data)
}

let dataFromLs = JSON.parse(localStorage.getItem("movie_data"));
append(dataFromLs);