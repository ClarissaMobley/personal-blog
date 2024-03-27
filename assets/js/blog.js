// Function to handle the back button click event
function goBack() {
    window.history.back();
}

// Add an event listener to the back button element
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', goBack);