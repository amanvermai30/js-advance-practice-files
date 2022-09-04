



let appendData = (data) => {
    let child1 = document.querySelector(".info1");
    let child2 = document.querySelector(".info2");
    let h1 = document.querySelector("h1");
    h1.innerText = data.name;
    let birth = document.createElement("p");
    birth.innerText = ` Birth Year : ${data.birth_year}`;

    let gender = document.createElement("p");
    gender.innerText = `Gender :  ${data.gender}`;

    let height = document.createElement("p");
    height.innerText = `Height : ${data.height}`;


    let eye_color = document.createElement("p");
    eye_color.innerText = ` Eye Color : ${data.eye_color}`

    let mass = document.createElement("p");
    mass.innerText = `Mass : ${data.mass}`;

    let hair_color = document.createElement("p");
    hair_color.innerText = `Hair Color : ${data.eye_color}`;

    child1.append(birth, gender, height);
    child2.append(eye_color,mass,hair_color);
}

let dataFromLs = JSON.parse(localStorage.getItem("data"));
console.log(dataFromLs)
appendData(dataFromLs);