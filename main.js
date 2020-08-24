// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.getElementById("modal");

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  errorModal.hidden = true;
});

let heartLists = document.querySelectorAll(".like");

function liker(e){
  let heart = e.target;
  mimicServerCall("bogusUrl", {forceFailure: true})
  .then(function(serverMessage){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.style.color = "red";
    }
    else {
      heart.innerText = EMPTY_HEART;
      heart.style.color = "";
    }
  })
  .catch(function(error){
    setTimeout(function(){ errorModal.hidden = false }, 5000)});
};

let heartGlyph = document.getElementsByClassName("like-glyph");
for (let i = 0; i < heartGlyph.length; i++){ 
heartGlyph[i].addEventListener("click", liker)
};

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
