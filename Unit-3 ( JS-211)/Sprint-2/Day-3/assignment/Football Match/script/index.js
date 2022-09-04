

// for pagination ------->

// step:-1 fetch the data

let base_url = `https://jsonmock.hackerrank.com/api/football_matches?`;



let change_team1 = ()=>{
    let team1 = document.querySelector("#team-1").value;
    if(base_url.includes(`&team1=${team1}`)){
        return;
    }
    if(base_url.includes(``)){
        base_url +=`&team1=${team1}`;
    }
    // console.log(base_url.replace(`&team1`,`team2`))
    console.log(base_url)
}



// let change_team1 = () =>{
//     let team1 = document.querySelector("#team-1").value;
//     base_url = `https://jsonmock.hackerrank.com/api/football_matches?team1=${team1}`;
    
// }



