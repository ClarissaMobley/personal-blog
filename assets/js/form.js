    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');


    function saveBlogPost() {
        const blogPost = {
            username: username.value,
            title: title.value,
            content: content.value.trim(),
        };

        localStorage.setItem('blogPost', JSON.stringify(blogPost));
    }


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        saveBlogPost();

        window.location.href = 'blog.html';

        // Clear the form fields after submit
        username.value = '';
        title.value = '';
        content.value = '';
    });