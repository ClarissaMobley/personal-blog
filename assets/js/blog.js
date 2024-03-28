
// Add event listener to the back button
const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        window.location.href = 'index.html';
    });
}

function init() {
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));

    if (blogPost !== null) {

        for (let i = 0; i < blogPost.length; i++) {
           document.querySelector(".blogPost").innerHTML += `
           <div class="box1">
           <br><b><span id="addTitle">${blogPost[i].title}</span></b>
           <div id="border-line"></div>
           <br><i><span id="addContent">${blogPost[i].content}</span></i>
           <br/>
           <br/>
           <br/>
           Posted by: <span id="addUsername">${blogPost[i].username}</span>
           </div>`
        }

    }

}


init();

