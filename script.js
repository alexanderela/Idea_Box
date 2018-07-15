//Variables: header
var titleInput = document.querySelector("#idea-title-input");
var bodyInput = document.querySelector("#idea-body-input");
var saveBtn = document.querySelector(".save-idea-btn");
//Variables: ideas
var titleOutput = document.querySelector(".idea-title-output");
var bodyOutput = document.querySelector(".idea-body");
var qualityRate = document.querySelector(".quality-value");
var ideaSection = document.querySelector(".idea-list");
var newSection = document.createElement("article");




// Event Listeners
saveBtn.addEventListener("click", ideaCard);


//Functions

function ideaCard(id, title, body, quality) {
	event.preventDefault();
  this.id = id;
  this.title = titleInput.value;
  this.body = bodyInput.value;
  ideaTemplate(ideaCard);
  // storeIdea();
  }; 


function ideaTemplate() {
  console.log("helloooooo")
	var newEntry = `<article aria-label="idea entry">
						<div class="list-title">
						<h2 class="idea-title-output">${ideaCard.title}</h2>
						<img src="Icons/delete.svg" alt="delete icon" class="vote-delete-btns"></div>
						<p class="idea-body">${ideaCard.body}</p>
						<div class="voting-content">
						<img src="Icons/upvote.svg" alt="quality up-vote icon" class="vote-delete-btns">
						<img src="Icons/downvote.svg" alt="quality down-vote icon" class="vote-delete-btns">
						<p>quality: </p><span class="quality-value">swill</span></div>
						<hr class="section-break"></article>`;
	newSection.innerHTML = newEntry;
	ideaSection.prepend(newSection);
	document.getElementById("idea-form").reset();
};

function storeIdea() {

};


// Constructor functions
// Each NEW instance of the function would creat a new idea card












`<article aria-label="idea entry">
<div class="list-title">
<h2 class="idea-title-output">${titleInput.value}</h2>
<img src="Icons/delete.svg" alt="delete icon" class="vote-delete-btns"></div>
<p class="idea-body">${bodyInput.value}</p>
						<div class="voting-content">
						<img src="Icons/upvote.svg" alt="quality up-vote icon" class="vote-delete-btns">
						<img src="Icons/downvote.svg" alt="quality down-vote icon" class="vote-delete-btns">
						<p>quality: </p><span class="quality-value">swill</span></div>
						<hr class="section-break"></article>`
































// 2 prependChild

// //How to make search input search without clicking SEARCH. Event
// // listener on keyup?

// How to make clickable link/button