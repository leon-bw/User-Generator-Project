const button = document.querySelector(".card__btn");


function fetchUser() {

    fetch("https://randomuser.me/api") 
        .then((Response) => Response.json())
        .then((data) => {
            displayUser(data.results[0]);
            
        })

}


function displayUser(user) {
    const userDetails = document.querySelector("#user");
    if (user.gender === "female") {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "cornflowerblue";
    }

    userDetails.innerHTML = `
    <div id="user">
        <div class="card__details">
            <img src="${user.picture.large}" alt="profile_picture" class="card__img">
            <p><strong>Name: </strong>${user.name.first} ${user.name.last}</p>
            <p><strong>Email: </strong>${user.email}</p>
            <p><strong>Number: </strong>${user.phone}</p>
            <p><strong>Location: </strong>${user.location.city}, ${user.location.country}</p>
            <p><strong>Age: </strong>${user.dob.age}</p>
        </div>
    </div>`
}


/*
// Name
data.results[0].name.first
data.results[0].name.last
// Email
data.results[0].email
// Number
data.results[0].phone
// Location
data.results[0].location.country
data.results[0].location.city
// Age
data.results[0].dob.age
// Gender
data.results[0].gender
*/



// Event Listeners

button.addEventListener("click", fetchUser)

document.addEventListener("DOMContentLoaded", fetchUser)