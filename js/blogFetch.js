const mainURL = 'https://dertzeydev.com/wp-json/wp/v2/posts';
const fetchURL = 'https://dertzeydev.com/wp-json/wp/v2/posts?per_page=12&_embed';

fetch(fetchURL)
    .then(response => response.json())
    .then(postsData => {
        const CONTAINER = document.querySelector(".blog-post-cards");
        let blogPostCardsHTML = '';

        postsData.forEach(post => {
            const featuredMedia = post._embedded['wp:featuredmedia'][0];
            const altText = featuredMedia.alt_text || ''; // Get alt text, or an empty string if it's not available.
            const imageUrl = featuredMedia.source_url;

            blogPostCardsHTML += `
                <div class="blog-post-content">
                    <img class="blog-postcard-img" src="${imageUrl}" alt="${altText}">
                    <h3>${post.title.rendered}</h3>
                    <p>${post.date}</p>
                    <p class="blog-post-content-text">${post.excerpt.rendered}</p>
                    <a href="blogspecific.html?id=${post.id}" class="read-more-btn">Read more</a>
                </div>
            `;
        });

        CONTAINER.innerHTML = blogPostCardsHTML;
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });






