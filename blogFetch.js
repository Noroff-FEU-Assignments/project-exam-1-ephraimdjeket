const mainURL = 'https://dertzeydev.com/wp-json/wp/v2/posts';
const imgURL = 'https://dertzeydev.com/wp-json/wp/v2/media';

Promise.all([fetch(mainURL), fetch(imgURL)])
    .then(([postsResponse, imagesResponse]) => {
        return Promise.all([postsResponse.json(), imagesResponse.json()]);
    })
    .then(([postsData, imagesData]) => {
        const CONTAINER = document.querySelector(".blog-post-cards");
        let blogPostCardsHTML = '';

        postsData.forEach(post => {
            const featuredMediaId = post.featured_media;

            const imageData = imagesData.find(image => image.id === featuredMediaId);

            const imageUrl = imageData ? imageData.source_url : '';

            blogPostCardsHTML += `
                <div class="blog-post-content">
                    <img class="blog-postcard-img" src="${imageUrl}" alt="DeFi logo on a laptop">
        
                    <h3>${post.title.rendered} </h3>
                    <p>${post.date}</p> 
                    <!-- Use post.title.rendered to access the title -->
                    <p class="blog-post-content-text">${post.excerpt.rendered}</p> <!-- Use post.excerpt.rendered to access the excerpt -->
                    <a href="#" class="read-more-btn">Read more</a>
                </div>
            `;
        });

        CONTAINER.innerHTML = blogPostCardsHTML;
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });

