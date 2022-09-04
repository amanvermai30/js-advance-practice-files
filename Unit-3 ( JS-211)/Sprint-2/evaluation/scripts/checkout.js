// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


// my wallet amount ----->

let wallet_amount = JSON.parse(localStorage.getItem("amount"));
let wallet = document.querySelector("#wallet");
wallet.innerText = wallet_amount;



let appendData = (data) =>{
    let container = document.querySelector("#movie");
    let title = document.createElement("h3");
    let avtar = document.createElement("img");
    let div = document.createElement("div");

    title.innerText = data.Title;
    avtar.src = data.Poster;
    div.append(title,avtar);
    container.append(div);
    
}

let movieDataFromLs = JSON.parse(localStorage.getItem("movie"));
appendData(movieDataFromLs);

let booking_confermation = () =>{
  let seats = +document.querySelector("#number_of_seats").value;
  let wallet = document.querySelector("#wallet");
  let total_cost = seats * 100;

  if( total_cost <= wallet_amount){
    alert("Booking successful!”");
    let updated_wallet_amount = wallet_amount-total_cost;
    wallet.innerText = updated_wallet_amount;
    localStorage.setItem("amount",JSON.stringify(updated_wallet_amount));

  } else{
    alert("Insufficient Balance!");
  }

  document.querySelector("#user_name").value = "";
  document.querySelector("#number_of_seats").value = "";

}

