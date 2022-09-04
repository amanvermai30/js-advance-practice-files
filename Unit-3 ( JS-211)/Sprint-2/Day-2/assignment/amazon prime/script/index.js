// my first movie api => https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=d52d380b5dc3c54902e1f52643636ebd

// my second movie api => http://www.omdbapi.com/?apikey=76929ce1&s=${query}



let getData = async () =>{
    let query = document.querySelector("#query").value;
    const url = ` https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d52d380b5dc3c54902e1f52643636ebd`
    
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    append(data.results);
}

let id;
let debouncing = (delay,fun)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
     fun()
    },delay)
}


function append(data){
    let demo = document.querySelector("#demo");
    demo.innerHTML = null
    let container = document.createElement("div");
        container.setAttribute("id","container");
    data.forEach((el)=>{  
        let div = document.createElement("div");
        div.setAttribute("class","child");

        let title = document.createElement("p");
        title.innerText = ` ${el.original_title}`;
        div.append(title);
        div.onclick = () =>{
            localStorage.setItem("movie_data",JSON.stringify(el));
            window.location.href = "movie.html"
        }
        container.append(div);
        demo.append(container);
        console.log(el)
        
    })
}


//       https://image.tmdb.org/t/p/w500 /pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg 
