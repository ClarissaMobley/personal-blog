// Add event listener to the back button if it exists
const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function() {
        // Go back to index.html
        history.back();
    });
}

const username = localStorage.getItem('addUsername');
const title = localStorage.getItem('addTitle');
const content = localStorage.getItem('addContent');

document.getElementById('addUserName').textContent = username;
document.getElementById('addTitle').textContent = title;
document.getElementById('addContent').textContent = content;