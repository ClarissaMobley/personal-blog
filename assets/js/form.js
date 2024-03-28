    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');


    function saveBlogPost() {
     const blogHistory = JSON.parse(localStorage.getItem("blogPost")) || []

     
        const blogPost = {
            username: username.value,
            title: title.value,
            content: content.value.trim(),
        };
        
        blogHistory.push(blogPost)

        localStorage.setItem('blogPost', JSON.stringify(blogHistory));
    }


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        saveBlogPost();

        window.location.href = 'blog.html';

    });