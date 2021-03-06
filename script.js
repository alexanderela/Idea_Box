//Variables: header
var titleInput = document.querySelector("#idea-title-input");
var bodyInput = document.querySelector("#idea-body-input");
var saveBtn = document.querySelector(".save-idea-btn");

//Variables: ideas
var titleOutput = document.querySelector(".idea-title-output");
var bodyOutput = document.querySelector(".idea-body");
var qualityRate = document.querySelector(".quality-value");
var ideaSection = document.querySelector(".idea-list");


// Event Listeners
saveBtn.addEventListener("click", ideaTemplate);

document.addEventListener("DOMContentLoaded", function() {
	for (var i = 0; i < localStorage.length; i++) {
		var retrievedCard = localStorage.getItem(localStorage.key(i));
		var parsedCard = JSON.parse(retrievedCard);
    reloadCard(parsedCard);
	};
});

ideaSection.addEventListener("click", function(event) {
	var deleteBtn = event.target;
	var key = deleteBtn.parentNode.parentNode.id;
	if (deleteBtn.className === "vote-delete-btns delete-button") {
		deleteBtn.parentNode.parentNode.parentNode.remove(deleteBtn);
		localStorage.removeItem(key);
	};
});
	

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
			<p>quality:</p>
			<span class="quality-value">${newCard.quality}</span>
		</div>
		<hr class="section-break">
	</article>`;
	
	newArticle.innerHTML = newEntry;
	ideaSection.prepend(newArticle);
	document.getElementById("idea-form").reset();
	storeIdea(newCard)
};

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
			<p>quality:</p>
			<span class="quality-value">${card.quality}</span>
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
};















// 	var retrievedCard = localStorage.getItem(key);
// 	var parsedCard = JSON.parse(retrievedCard);
	
// 	var upvoteBtn = event.target;

// 	// var qualityText = key.querySelector(".quality-value");
// 	var qualityText = key.firstChild.nextSibling.nextSibling.lastChild;
	
// 	if (upvoteBtn.className === "vote-delete-btns upvote-button" && parsedCard.quality == "swill") {
// 		console.log(parsedCard.quality);
// 		parsedCard.quality = "plausible";
// 		console.log(parsedCard.quality);
// 		qualityText.innerText = "plausible";
// 		storeIdea(parsedCard);


// 	} else if (upvoteBtn.className === "vote-delete-btns upvote-button" && parsedCard.quality == "plausible") {
// 		parsedCard.quality = "genius";
// 		qualityText.innerText = "genius";
// 	};
