const mainURL = 'https://dertzeydev.com/wp-json/wp/v2/posts';
const CONTAINER = document.querySelector(".blog-post-cards");
let currentPage = 1;
const PER_PAGE = 10;

function fetchPosts(page) {
    const fetchURL = `${mainURL}?page=${page}&per_page=${PER_PAGE}&_embed`;

    fetch(fetchURL)
        .then(response => {
            if (!response.ok) {

            }
            return response.json();
        })
        .then(postsData => {
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
        })
        .catch(error => {
            console.log('An error occurred:', error);
            document.querySelector('.load-more-btn').disabled = true;
        });
}

fetchPosts(currentPage);

document.querySelector('.load-more-btn').addEventListener('click', () => {
    currentPage++;
    fetchPosts(currentPage);
});
