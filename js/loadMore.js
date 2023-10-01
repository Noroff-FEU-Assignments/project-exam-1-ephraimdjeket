const mainURL = 'https://dertzeydev.com/wp-json/wp/v2/posts';
const CONTAINER = document.querySelector(".blog-post-cards");
let currentPage = 1;
const PER_PAGE = 10;

async function fetchPosts(page) {
    const fetchURL = `${mainURL}?page=${page}&per_page=${PER_PAGE}&_embed`;


    document.querySelector('.loader').style.display = 'block';

    try {
        const response = await fetch(fetchURL);
        if (!response.ok) {
            throw new Error(`HTTP error :) Status: ${response.status}`);
        }
        document.getElementById('error-message-display').style.display = 'none';
        const postsData = await response.json();
        let blogPostCardsHTML = '';

        postsData.forEach(post => {
            const featuredMedia = post._embedded['wp:featuredmedia'][0];
            const altText = featuredMedia.alt_text || '';
            const imageUrl = featuredMedia.source_url;

            blogPostCardsHTML += `
                <div class="blog-post-content">
                    <img class="blog-postcard-img" src="${imageUrl}" alt="${altText}">
                    <h3>${post.title.rendered}</h3>
                    <p>${post.date}</p>
                    <p class="blog-post-content-text">${post.excerpt.rendered}</p>
                    <a href="blogspecific.html?id=${post.id}" class="read-more-btn">Read more</a>
                </div>`;
        });

        CONTAINER.innerHTML += blogPostCardsHTML;


        document.querySelector('.loader').style.display = 'none';

    } catch (error) {
        console.error('An error occurred:', error);
        document.getElementById('error-message-display').textContent = error.message;
        document.getElementById('error-message-display').style.display = 'block';
        document.querySelector('.load-more-btn').disabled = true;

        // Hide the loader if there was an error
        document.querySelector('.loader').style.display = 'none';
    }
}

fetchPosts(currentPage);

document.querySelector('.load-more-btn').addEventListener('click', () => {
    currentPage++;
    fetchPosts(currentPage);
});
