// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Select modal and modal message
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Select all heart elements
const hearts = document.querySelectorAll(".like-glyph");

// Add click event listeners to hearts
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // If heart is empty
    if (heart.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          // Change to full heart on success
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-Heart");
        })
        .catch((error) => {
          // Display modal with error message on failure
          modalMessage.textContent = error;
          modal.classList.remove("hidden");

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    } else {
      // If heart is full
      mimicServerCall()
        .then(() => {
          // Change to empty heart on success
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        })
        .catch((error) => {
          // Display modal with error message on failure
          modalMessage.textContent = error;
          modal.classList.remove("hidden");

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    }
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
