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
