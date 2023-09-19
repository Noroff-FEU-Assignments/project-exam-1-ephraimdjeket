const QUERYSTRING = document.location.search;
const PARAMS = new URLSearchParams(QUERYSTRING);
const ID = PARAMS.get("id");
const URLID = mainURL + '/' + ID; // Update the URL to include the specific post ID

let featuredImageURL = ''; // Initialize the variable

fetch(URLID)
    .then(response => response.json())
    .then(post => {
        const PRODUCTCONTAINER = document.querySelector(".blog-specific-container");

        // Access the featured image URL from _embedded data
        const featuredImage = post._embedded && post._embedded['wp:featuredmedia'];

        // Check if the featured image is available and get its source URL
        featuredImageURL = featuredImage ? featuredImage[0].source_url : '';

        PRODUCTCONTAINER.innerHTML = `
            <img class="blog-specific" src="${featuredImageURL}" alt="">
            <h1 class="blog-specific-title">${post.title.rendered}</h1>
            <p class="blog-date">${post.date}</p>
            <p class="blog-specific">${post.content.rendered}</p>
        </section>`;
        document.title = `${post.title.rendered}`;
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });

