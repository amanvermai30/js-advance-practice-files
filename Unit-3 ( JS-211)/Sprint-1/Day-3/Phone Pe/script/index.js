
let payment = ()=>{
   
    let mobile_no = +document.querySelector("#mobile-no").value;
    let amount = +document.querySelector("#amount").value;
    let container = document.querySelector("#container-2");

        container.innerHTML = null
    let div1 = document.createElement("div");
    div1.setAttribute("class","appendDiv-1");
    let p1 = document.createElement("p");
    p1.innerText = `Mobile No:- ${mobile_no}`;

    let p2 = document.createElement("p");
    p2.innerText = `Amount:- ${amount}`;
    div1.append(p1,p2);

    let div2 = document.createElement("div");
    div2.setAttribute("class","appendDiv-2");
    let input1 = document.createElement("input");

    let h3 = document.createElement("h3");
    h3.innerText = "Please Enter Your Pin"; 

    input1.setAttribute("type","number");

    let input2 = document.createElement("input");
    input2.setAttribute("type","number");

    let input3 = document.createElement("input");
    input3.setAttribute("type","number");

    let input4 = document.createElement("input");
    input4.setAttribute("type","number");

    div2.append(input1,input2,input3,input4);

    let btn = document.createElement("button");
    btn.innerText = "Pay";
    btn.onclick = () =>{
        div2.innerHTML = null;
        let img = document.createElement("img");
        img.src = "https://www.legalpillers.com/wp-content/uploads/2020/09/success.gif";
        div2.append(img)
        h3.innerText = "Payment Successfully"
    }

    container.append(div1,h3,div2,btn);
    console.log(mobile_no)
    
}