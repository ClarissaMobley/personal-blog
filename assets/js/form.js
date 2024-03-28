    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usernameValue = username.value;
        const titleValue = title.value;
        const contentValue = content.value;

        localStorage.setItem('addUsername', usernameValue);
        localStorage.setItem('addTitle', titleValue);
        localStorage.setItem('addContent', contentValue);

        window.location.href = 'blog.html';

        // Clear the form fields after submit
        username.value = '';
        title.value = '';
        content.value = '';
        
    });