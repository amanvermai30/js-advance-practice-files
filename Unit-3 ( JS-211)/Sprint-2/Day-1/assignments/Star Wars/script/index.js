

let getData = async ()=>{
    let char = document.querySelector("#search_char").value;
    const url = `https://swapi.dev/api/people/?search=${char}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.results)
    appendData(data.results);
}

// this function is taking care of the time //
let id;
let debounce = (delay,func)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func()
    },delay)

}

function appendData (data){
    let container = document.querySelector("#demoDiv");
    container.innerHTML = null
    data.forEach(el => {
        
        let div = document.createElement("div");
        div.setAttribute("class","child");
        div.onclick = () =>{
            localStorage.setItem("data",JSON.stringify(el))
            window.location.href = "info.html";
        }

        let name = document.createElement("h3");
        name.innerText = el.name;

        let birth = document.createElement("p");
        birth.innerText = el.birth_year;

        let gender = document.createElement("p");
        gender.innerText = el.gender;
        div.append(gender,name,birth);
        container.append(div);
    });

}