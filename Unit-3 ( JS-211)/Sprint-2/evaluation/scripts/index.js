// Store the wallet amount to your local storage with key "amount"
let amountFromLs = JSON.parse(localStorage.getItem("amount")) || 0;
    let wallet1 = document.querySelector("#wallet");
    wallet1.innerText = amountFromLs;


let add_amount = () =>{
    let amount = +document.querySelector("#amount").value;
    let wallet = document.querySelector("#wallet");
    let x = amount;
    total = +wallet.innerText + x;

    localStorage.setItem("amount",JSON.stringify(total));
    window.location.reload();
}

