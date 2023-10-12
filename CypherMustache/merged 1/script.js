const articles = [
    {
        "title": "Article 1 Title",
        "date": "2023-10-01",
        "image": "article1.jpg",
        "content": "Path to article1.md"
    },
    {
        "title": "Article 2 Title",
        "date": "2023-09-15",
        "image": "article2.jpg",
        "content": "Path to article2.md"
    }
]

// Function to fetch and display articles
async function displayArticles() {
    try {
        // console.log("displayArticles")
        // const response = await fetch('./articles/articles.json');
        // console.log(response)
        // const articles = await response.json();


        // Sort articles by date (most recent first)
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));

        const articleGrid = document.querySelector('.article-grid');

        // Loop through articles and create squared tiles
        articles.forEach(article => {
            const articleTile = document.createElement('div');
            articleTile.classList.add('article-tile');
            articleTile.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h2>${article.title}</h2>
                <p>${article.date}</p>
                <a href="${article.content}" class="read-more-link">Read More</a>
            `;
            articleGrid.appendChild(articleTile);
        });
    } catch (error) {
        console.error('Error loading articles:', error);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendUserMessage(userMessage);
            // Dummy bot reply (replace with your bot logic)
            setTimeout(function () {
                appendBotMessage("I'm just a dummy bot. You said: " + userMessage);
            }, 1000);
            userInput.value = '';
        }
    }

    function appendUserMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
        chatMessages.appendChild(messageContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function appendBotMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        const messageElement = document.createElement('div');
        messageElement.classList.add('bot-message');
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
        chatMessages.appendChild(messageContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

