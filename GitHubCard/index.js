import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/**
 * Making a card using passed in data
 * @param {string} data - Data to convert into a card
 */
const cardMaker = (data) => {
	//Defining Varables
	const cardHolder = document.querySelector(".cards"),
		card = document.createElement("div"),
		cardInfo = document.createElement("div"),
		profileFollowers = document.createElement("p"),
		profileFollowing = document.createElement("p"),
		cardUserName = document.createElement("p"),
		cardLocation = document.createElement("p"),
		profileBio = document.createElement("p"),
		cardImage = document.createElement("img"),
		cardName = document.createElement("h3"),
		profileAddress = document.createElement("a"),
		cardBodyInfo = [
			cardName,
			cardUserName,
			cardLocation,
			profileAddress,
			profileFollowers,
			profileFollowing,
			profileBio,
		];
	//Assigning Data To Varables
	card.className = "card";
	cardImage.src = data["avatar_url"];
	cardInfo.classList.add("card-info");
	//Looping Through The Body Elements
	cardBodyInfo.forEach((element) => {
		switch (element) {
			case cardName: {
				cardName.classList.add(`name`);
				cardName.textContent = data["name"];
			}
			case cardUserName: {
				cardUserName.classList.add("username");
				cardUserName.textContent = `Username: ${data["login"]}`;
			}
			case cardLocation: {
				cardLocation.textContent = `Location: ${
					data["location"] ? data["location"] : "Area 51"
				}`;
			}
			case profileAddress: {
				profileAddress.setAttribute("src", data["url"]);
			}
			case profileFollowers: {
				profileFollowers.textContent = `Followers: ${data["followers"]}`;
			}
			case profileFollowing: {
				profileFollowing.textContent = `Following: ${data["following"]}`;
			}
			case profileBio: {
				profileBio.textContent = data["bio"]
					? data["bio"]
					: "Too good for bios! Also loves Jamaria...";
			}
		}
		cardInfo.appendChild(element);
	});
	cardHolder.appendChild(card);
	card.appendChild(cardImage);
	card.appendChild(cardInfo);
};
const arrayOfUsers = [
	"https://api.github.com/users/BrityHemming",
	"https://api.github.com/users/tetondan",
	"https://api.github.com/users/dustinmyers",
	"https://api.github.com/users/justsml",
	"https://api.github.com/users/luishrd",
	"https://api.github.com/users/bigknell",
	`https://api.github.com/users/JamariaSims`,
	`https://api.github.com/users/BrandonWorobi`,
	`https://api.github.com/users/irasanchez`,
	`https://api.github.com/users/ray-rafe`,
];
for (let i = 0; i < arrayOfUsers.length; i++) {
	axios
		.get(arrayOfUsers[i])
		.then((response) => {
			cardMaker(response.data);
		})
		.catch((e) => {
			window.alert(e);
		});
}
