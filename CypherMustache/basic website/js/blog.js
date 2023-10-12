document.addEventListener('DOMContentLoaded', function () {

    let articlesGrid = document.querySelector('.article-grid');
    let articlesContent = document.querySelector('.articles-content');

    let articlesData = {
        "articles": [
            {
                "title": "Article 1",
                "img": "./images/article1.jpg"
            },
            {
                "title": "Article 2",
                "img": "./images/article2.jpg"
            },
            {
                "title": "Article 3",
                "img": "./images/article3.jpg"
            }
            // Add more articles as needed
        ]
    };

    for (let article of articlesData.articles) {
        let articleTile = document.createElement('div');
        articleTile.classList.add('article-tile');

        let articleImage = document.createElement('img');
        articleImage.src = article.img;
        articleTile.appendChild(articleImage);

        let articleTitle = document.createElement('h3');
        articleTitle.textContent = article.title;
        articleTile.appendChild(articleTitle);

        articleTile.addEventListener('click', function () {
            window.location.hash = article.title.replace(/ /g, '').toLowerCase();
            loadArticleContent(article.title);
        });

        articlesGrid.appendChild(articleTile);
    }

    function loadArticleContent(articleTitle) {
        let articleFilePath = `./articles/${articleTitle.replace(/ /g, '').toLowerCase()}.html`;

        fetch(articleFilePath)
            .then(response => response.text())
            .then(data => {
                articlesContent.innerHTML = data;

                let backButton = document.createElement('div');
                backButton.textContent = '← Back to articles';
                backButton.classList.add('arrow');
                backButton.addEventListener('click', function () {
                    window.location.hash = ''; // Remove the hash
                    articlesGrid.style.display = 'grid';
                    articlesContent.innerHTML = '';
                });

                articlesContent.insertAdjacentElement('afterbegin', backButton);
                articlesGrid.style.display = 'none';
            })
            .catch(error => {
                console.error('Error fetching article:', error);
                articlesContent.innerHTML = '<p>Error loading article.</p>';
            });
    }

    // Load article content on hash change or direct access with hash
    window.addEventListener('hashchange', function () {
        if (window.location.hash) {
            let articleName = window.location.hash.slice(1); // Remove the '#'
            loadArticleContent(articleName);
        } else {
            articlesGrid.style.display = 'grid';
            articlesContent.innerHTML = '';
        }
    });

    // Check hash on page load
    if (window.location.hash) {
        let articleName = window.location.hash.slice(1);
        loadArticleContent(articleName);
    }

});
