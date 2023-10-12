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

// Function to send a user message to the chat
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message) {
        appendMessage("user", message); // Display user message

        // Simulated response for demonstration purposes
        setTimeout(() => {
            const response = "This is a chatbot response.";
            appendMessage("bot", response); // Display bot response
        }, 1000);

        userInput.value = ""; // Clear the input field
    }
}

// Function to append a message to the chat
function appendMessage(sender, text) {
    const chatMessages = document.querySelector(".chat-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);

    // Scroll to the most recent message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Event listener for the Enter key
const userInput = document.getElementById("user-input");
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

// Initialize articles display
displayArticles();
