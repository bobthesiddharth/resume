// Example JavaScript code for the portfolio website

// Function to display a message when the contact button is clicked
function contactButtonClicked() {
  alert(
    "Thank you for your interest! Please feel free to reach out to me via email or phone."
  );
}

// Event listener for the contact button
const contactButton = document.querySelector(".bg-blue-500");
contactButton.addEventListener("click", contactButtonClicked);
