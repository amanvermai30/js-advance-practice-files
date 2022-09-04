


let appendData = (data) =>{
    container = document.querySelector("#container");
    container.innerHTML = null
    data.forEach(function(el,index){

    let div = document.createElement("div");
    div.setAttribute("class","appendDiv");
    let h3 = document.createElement("h3");
    h3.innerText = el.Task;
    div.append(h3);
   

    let div2 = document.createElement("div");
    div2.setAttribute("class","appendDiv2");
    let remove = document.createElement("button");
    remove.innerText = "remove"
    remove.onclick = () =>{
        removeFun(index);
    }
    let markComplete = document.createElement("button");
    markComplete.innerText = " Mark as complete";
    markComplete.onclick = () =>{
        markCompleteFun(div)
    }
    div2.append(remove,markComplete);

    container.append(div,div2);
    })
 
}


let dataFromLs = JSON.parse(localStorage.getItem("localTask"));
// console.log(dataFromLs)
appendData(dataFromLs);


let markCompleteFun = (div) =>{
    alert("Mark as complete")
    div.style.backgroundColor = " rgb(92, 197, 92)";
    
  }

  // remove function //
  let removeFun = (index) =>{
    alert("Your task has been removed")
    dataFromLs = dataFromLs.slice(0,index).concat(dataFromLs.slice(index+1,dataFromLs.length))
    localStorage.setItem("localTask",JSON.stringify(dataFromLs))
    appendData(dataFromLs);

  }




  // here i am doing task reminder part //

  let id;
  let submit = () =>{
    let time = document.querySelector("#time").value;
    let [h,m] = time.split(":");
    console.log(`${h} & ${m}` )

    id = setInterval(()=>{
        let current = new Date();
        let hours = current.getHours();
        let min = current.getMinutes();
        let sec = current.getSeconds();
        let currentTime = document.querySelector("#current_time");
        currentTime.innerText = `${hours}:${min}:${sec}`;

        if( h === hours && m === min){
            console.log("t")
            clearInterval(id)
        }

    },1000)
  }

