//Variables: header
var titleInput = document.querySelector(".form-inputs");
var bodyInput = document.querySelector(".alex-body-input");
var saveBtn = document.querySelector(".save-idea-btn");
//Variables: ideas
var titleOutput = document.querySelector(".alex-title-output");
var bodyOutput = document.querySelector(".idea-body");
var qualityRate = document.querySelector(".quality-value");
var ideaSection = document.querySelector(".idea-list");
var newSection = document.createElement("article");




// Event Listeners
saveBtn.addEventListener("click", saveIdea);


//Functions
function saveIdea(event) {
	event.preventDefault();
	var newEntry = `<article aria-label="idea entry">
						<h2 class="alex-title-output">${titleInput.value}</h2>
						<img src="Icons/delete.svg" alt="delete icon">
						<p class="idea-body">${bodyInput.value}</p>
						<img src="Icons/upvote.svg" alt="quality up-vote icon">
						<img src="Icons/downvote.svg" alt="quality down-vote icon">
						<p>quality: </p><span class="quality-value">swill</span>
						<hr class="section-break"></article>`;
	newSection.innerHTML = newEntry;
	ideaSection.prepend(newSection);
};








// 2 prependChild

// //How to make search input search without clicking SEARCH. Event
// // listener on keyup?

// How to make clickable link/button