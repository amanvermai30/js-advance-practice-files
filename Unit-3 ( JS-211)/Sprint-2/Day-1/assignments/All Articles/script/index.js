

let allPromise = []
let array = [];
for( let i = 1; i <= 5; i++ ){
    const url = `https://jsonmock.hackerrank.com/api/articles?page=${i}`;
    let promise = fetch(url).then((res) => res.json());
    allPromise.push(promise);
}


let getData = async()=>{
    let data = await Promise.all(allPromise);

 for( let i = 0; i < data.length; i++ ){
    let result = data[i].data
    array.push(...result)

    // console.log(result)
    appendData(array)
 }
 console.log(array)

}
getData()


function appendData(data){
    let container = document.querySelector("#container");
    container.innerHTML = null
    data.forEach((el)=>{

        let title = document.createElement("h3");
        title.innerText = `Title:- ${el.title}`;

        let author = document.createElement("p");
        author.innerText = `Author:- ${el.author}`

        let readMore = document.createElement("href");
        readMore.setAttribute("class","readMore");
        readMore.innerText = `Read More:-  ${el.url}`
        readMore.onclick = () =>{
            window.location.href = el.url;
        }
         
        let comments = document.createElement("p");
        comments.innerText = ` No of Comments:- ${el.num_comments}`;

        let div = document.createElement("div");
        div.append(title,author,readMore,comments)
        container.append(div);
    })

}


function SortHL(){
    array = array.sort(function(a,b){
        return b.num_comments - a.num_comments;
    })
    console.log(array)
    appendData(array);
}

