//Variables: header
var titleInput = document.querySelector("#idea-title-input");
var bodyInput = document.querySelector("#idea-body-input");
var saveBtn = document.querySelector(".save-idea-btn");
//Variables: ideas
var titleOutput = document.querySelector(".idea-title-output");
var bodyOutput = document.querySelector(".idea-body");
var qualityRate = document.querySelector(".quality-value");
var ideaSection = document.querySelector(".idea-list");

// var newSection = document.createElement("article");


// Event Listeners
saveBtn.addEventListener("click", ideaTemplate);
ideaSection.addEventListener("click", events);
document.addEventListener("DOMContentLoaded", function() {
	for(var i = 0; i < localStorage.length; i++) {
		var retrievedCard = localStorage.getItem(localStorage.key(i));
		var parsedCard = JSON.parse(retrievedCard);
		// console.log(parsedCard);
    reloadCard(parsedCard);
	};
});

ideaSection.addEventListener("click", function(event) {
	console.log(event.target.parentNode.parentNode)
	var deleteBtn = event.target;
	var remove = event.target.parentNode.parentNode;
		// console.log(delet eBtn.className);
	if(deleteBtn.className === "vote-delete-btns delete-button") {

		remove.remove();
		// console.log(this)
		localStorage.removeItem(remove.id);
	};
});

function events(event) {
	// console.log(event.target)

	// If event.target = class name of element

}

// if index.length = 0

// 	find index of quality i have. figure out how to grab quality and then 
// console.log





//Functions
function IdeaCard() {
	this.id = Date.now();
	this.title = titleInput.value;
	this.body = bodyInput.value;
	this.quality = "swill";
}

function ideaTemplate(event) {
	event.preventDefault();
  var newCard = new IdeaCard();
  var newArticle = document.createElement("article");
	var newEntry = 
	`<article aria-label="idea entry" id="${newCard.id}">
		<div class="list-title">
			<h2 class="idea-title-output">${newCard.title}</h2>
			<button class="vote-delete-btns delete-button"></button>
		</div>
		<p class="idea-body">${newCard.body}</p>
		<div class="voting-content">
			<button class="vote-delete-btns upvote-button"></button>
			<button class="vote-delete-btns downvote-button"></button>
			<p>quality:</p><span class="quality-value"></span>
	</div>
	<hr class="section-break">
</article>`;
	newArticle.innerHTML = newEntry;
	ideaSection.prepend(newArticle);
	document.getElementById("idea-form").reset();
	storeIdea(newCard)
};



// function reloadIdea() {
// 	var retrievedCard = localStorage.getItem(localStorage.key);
// 	// var cardId = card.id;
// 	var parsedCard = JSON.parse(retrievedCard);
//     reloadCard(parsedCard);
// };

function reloadCard(card) {
	var newArticle = document.createElement("article");
	var newEntry = 
	`<article aria-label="idea entry" id="${card.id}">
		<div class="list-title">
			<h2 class="idea-title-output">${card.title}</h2>
			<button class="vote-delete-btns delete-button"></button>
		</div>
		<p class="idea-body">${card.body}</p>
		<div class="voting-content">
			<button class="vote-delete-btns upvote-button"></button>
			<button class="vote-delete-btns downvote-button"></button>
			<p>quality:</p><span class="quality-value">${card.quality}</span>
	</div>
	<hr class="section-break">
</article>`;
	newArticle.innerHTML = newEntry;
	ideaSection.prepend(newArticle);
};



function storeIdea(card) {
	var stringifiedCard = JSON.stringify(card);
	var cardId = card.id;
	localStorage.setItem([cardId], stringifiedCard);
	console.log(stringifiedCard);
};




// Constructor functions
// Each NEW instance of the function would creat a new idea card


// localStorage.setItem(); takes two arguments—a key and value (key must be string)—and stores the given value under the provided key.
// localStorage.getItem(); gets an item from storage based on the key provided.
// localStorage.removeItem(); takes a key and removes that key and its associated value from storage.
// localStorage.clear(); removes all items from storage for that domain.



// 2 prependChild

// //How to make search input search without clicking SEARCH. Event
// // listener on keyup?

// How to make clickable link/button