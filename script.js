//Variables: header
var titleInput = document.querySelector(".alex-title-input");
var bodyInput = document.querySelector(".alex-body-input");
var saveBtn = document.querySelector(".alex-save-button");
var searchInput = document.querySelector(".alex-search-box");

//Variables: ideas
var titleOutput = document.querySelector(".alex-title-output");
var bodyOutput = document.querySelector(".alex-body-output");
var qualityRate = document.querySelector(".alex-quality-rating");
var ideaSection = document.querySelector(".alex-idea-entry");
var newSection = document.createElement("article");




// Event Listeners
saveBtn.addEventListener("click", saveIdea);


//Functions
function saveIdea(event) {
	event.preventDefault();
	var newEntry = `<article aria-label="idea entry">
						<h2 class="alex-title-output">${titleInput.value}</h2>
						<img src="Icons/delete.svg" alt="delete icon">
						<p class="alex-body-output">${bodyInput.value}</p>
						<img src="Icons/upvote.svg" alt="quality up-vote icon">
						<img src="Icons/downvote.svg" alt="quality down-vote icon">
						<p>quality: </p><span class="alex-quality-rating">swill</span>
						<hr class="section-break"></article>`;
	newSection.innerHTML = newEntry;
	ideaSection.prepend(newSection);
};








// 2 prependChild

// //How to make search input search without clicking SEARCH. Event
// // listener on keyup?

// How to make clickable link/button