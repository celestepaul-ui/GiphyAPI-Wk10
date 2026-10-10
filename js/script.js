console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=gsNL1fghdmaXLOJ2Ii4jAmHX923c62ep&q=smile&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function getGiphys() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    let images = [data];
}

// getGiphys()

let giphyContainer = document.querySelector("#gif-container");

console.log(giphyContainer);

const button = document.querySelector("#fetch-gif-btn");

console.log(button);

// Attach a click event listener to the button. 
// If you use async/await, mark the listener's 
// function async.

button.addEventListener("click", function () {
    // loop through images array
    // for each URL, create an image element (<image>)
    // add it to the continer using:
    // gifContainer.innerHTML += `<img src="${IMAGE_URL_GOES_HERE}" class="col-3 mb-3">`;





    // **** leave this alone for now
    // answerButtons.forEach(function (btn) {
    //     btn.classList.remove("selected");
    // });

    // button.classList.add("selected");

    // answers[question.id] = button.dataset.answer;

    // console.log("You clicked:", button.dataset.answer);
});

