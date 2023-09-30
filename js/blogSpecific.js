const mainURL = 'https://cors.noroff.dev/dertzeydev.com/wp-json/wp/v2/posts';
const QUERYSTRING = document.location.search;
const PARAMS = new URLSearchParams(QUERYSTRING);
const ID = PARAMS.get("id");
const URLID = mainURL + '/' + ID;

let featuredImageURL = '';

async function fetchPostData() {
    try {
        const response = await fetch(URLID);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        document.getElementById('error-message-display').style.display = 'none';
        const post = await response.json();
        const PRODUCTCONTAINER = document.querySelector(".blog-specific-container");
        const featuredImage = post._embedded && post._embedded['wp:featuredmedia'];
        featuredImageURL = featuredImage ? featuredImage[0].source_url : '';
        PRODUCTCONTAINER.innerHTML = `
            <img class="blogSpecific" src="${featuredImageURL}" alt="">
            <h1 class="blog-specific-title">${post.title.rendered}</h1>
            <p class="blog-date">${post.date}</p>
            <p class="blog-specific">${post.content.rendered}</p>
        </section>`;
        document.title = `${post.title.rendered}`;
    } catch (error) {
        console.error('An error occurred:', error);
        document.getElementById('error-message-display').textContent = error.message;
        document.getElementById('error-message-display').style.display = 'block';
    }
}

fetchPostData();


