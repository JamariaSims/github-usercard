import axios from "axios";

const jokes = [
	"What do you call a fake noodle? An Impasta.",

	"I would avoid the sushi if I was you. It’s a little fishy.",

	"Want to hear a joke about paper? Nevermind it’s tearable.",

	"Why did the cookie cry? Because his father was a wafer so long!",

	"I used to work in a shoe recycling shop. It was sole destroying.",

	"What do you call a belt with a watch on it? A waist of time.",

	"How do you organize an outer space party? You planet.",

	"I went to a seafood disco last week... and pulled a mussel.",

	"Do you know where you can get chicken broth in bulk? The stock market.",

	"I cut my finger chopping cheese, but I think that I may have greater problems.",

	"My cat was just sick on the carpet, I don’t think it’s feline well.",

	"Why did the octopus beat the shark in a fight? Because it was well armed.",
	"A bartender broke up with her boyfriend, but he kept asking her for another shot.",

	"I had a pun about insanity but then I lost it.",

	"He couldn’t work out how to fix the washing machine so he threw in the towel.",

	"Why does the man want to buy nine rackets? Cause tennis too many.",

	"Why don’t cannibals eat clowns? Because they taste funny.",

	"If I got paid in lots of Pennes I would make loads of pasta.",

	"I thought I saw a spider on my laptop, but my friend said it was just a bug.",

	"A doctor broke his leg while auditioning for a play.Luckily he still made the cast.",
];

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
	cardBodyInfo.forEach((element, index) => {
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
				profileBio.textContent = data["bio"] ? data["bio"] : jokes[index];
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
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
	arrayOfUsers.push(`https://api.github.com/users/${i}`);
}
for (let i = 0; i < arrayOfUsers.length; i++) {
	setTimeout(() => {
		axios
			.get(arrayOfUsers[i])
			.then((response) => {
				cardMaker(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, 5000);
}
