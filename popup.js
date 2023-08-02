// let btnOpen = document.querySelector(".btOpen");
// let hidden = document.querySelector(".hidden");
// let body = document.querySelector("body");


// btnOpen.onClick=()=>{
//     hidden.classList.remove("hidden");
// }

// // close.addEventListener("click",()=>{
// //     btnOpen.style.display="block";
// //     box.style.display="none";
// //     body.style.backgroundcolor="#999";
// // });

// Get the modal element
var modal = document.getElementById("modalContainer");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submission
var registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform registration logic here (e.g., send data to server)

  // Close the modal after registration
  modal.style.display = "none";
});