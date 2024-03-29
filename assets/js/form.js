const form = document.getElementById('form');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

// Function to save blog post to local storage
function saveBlogPost() {
    const blogHistory = JSON.parse(localStorage.getItem("blogPost")) || [];

    // Create new blog post object
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    };

    // Add new blog post at the beginning of the list
    blogHistory.unshift(blogPost);

    localStorage.setItem('blogPost', JSON.stringify(blogHistory));

    return blogPost;
}

// Add event listener to submit form
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const blogPost = saveBlogPost();

    if (blogPost.username === '' || blogPost.title === '' || blogPost.content === '') {
        alert('Please fill out all fields.');
    } else {
        window.location.href = 'blog.html';
    }
});