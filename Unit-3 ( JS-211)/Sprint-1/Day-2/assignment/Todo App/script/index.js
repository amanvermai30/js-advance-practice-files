

// here i am creating array of obj for storing data //
let taskData = JSON.parse(localStorage.getItem("localTask")) || [];

function taskObj(task){
    this.Task = task;
}



// this function will calcel the task //
let  cancelFun = () =>{
    document.querySelector("#child2").innerHTML = null
}


let addTaskToList = () =>{
    let container = document.querySelector("#child2");
    container.innerHTML = null
    let div = document.createElement("div");
    div.setAttribute("class","appendDiv");
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","input");
    div.append(input);
   

    let div2 = document.createElement("div");
    div2.setAttribute("class","appendDiv2");
    let cancel = document.createElement("button");
    cancel.innerText = "Cancel"
    cancel.addEventListener("click",cancelFun);
    let addTask = document.createElement("button");
    addTask.innerText = " Add to list";
    addTask.addEventListener("click",storeInLs);
    div2.append(cancel,addTask);

    container.append(div,div2);

}

// here i am storing task in local storage //
function storeInLs(){
    let filledTask = document.querySelector("#input").value;
    let userTask = new taskObj(filledTask);
    
    if(filledTask == ""){
        alert("write your task")
    } else {
        taskData.push(userTask);
        localStorage.setItem("localTask",JSON.stringify(taskData));
         alert("Task added to your list");
         window.location.reload();

    }
}

// I will complete this on 29/07 date //






