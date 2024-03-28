
// Add event listener to the back button if it exists
const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function() {
        // Go back to index.html
        history.back();
    });
}

function init() {
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));

    if (blogPost !==null) {
        document.getElementById('addUsername').innerHTML = blogPost.username;
        document.getElementById('addTitle').innerHTML = blogPost.title;
        document.getElementById('addContent').innerHTML = blogPost.content;
    }

}

init();
