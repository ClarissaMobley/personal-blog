const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

function saveBlogPost() {
    // Save related form datat as an object
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    };
    // Use .setItem() to store object in local storage
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
}

function renderBlogPost() {
    const lastPost = JSON.parse(localStorage.getItem('blogPost'));
    if (lastPost !== null) {
        document.getElementById('last-username').innerHTML = lastPost.username;
        document.getElementById('last-title').innerHTML = lastPost.title;
        document.getElementById('last-content').innerHTML = lastPost.content;
    }
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Save the blog post
    saveBlogPost();
    
    // Redirect to the "blog.html" page
    window.location.href = "blog.html";
});