
let admin = {
    username:"perfectidkkkkk",
    email: "perfectidkkkkk"
}

let submit = async () =>{

    let user_details = JSON.parse(localStorage.getItem("user_details"));
    console.log(user_details)
    if(user_details === null){
        alert("login again");
        window.location.href = "login.html";
    }
    let user = await getProfile(user_details.username,user_details.token);
    console.log(user)

    if( user.email !== admin.email){
        alert('Not Authorised');
        return;
    }
    let items = {
        image:document.querySelector("#image").value,
        title:document.querySelector("#title").value,
        price:document.querySelector("#price").value,
        rating:document.querySelector("#rating").value
    }

    let res = await fetch("https://limitless-anchorage-06812.herokuapp.com/menu",{
        method:"POST",
        body: JSON.stringify(items),
        headers:{
            "Content-Type":"application/json"
        }
    });

    let data = await res.json();
    console.log(data);

}








let getProfile = async (username,token) =>{
  
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    res = await res.json();
    console.log(res);
}