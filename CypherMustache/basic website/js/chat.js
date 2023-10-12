document.addEventListener('DOMContentLoaded', function () {

    let chatWindow = document.querySelector('.messages');
    let userInputField = document.getElementById('userInput');
    let sendButton = document.getElementById('sendButton');

    userInputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendUserMessage();
        }
    });

    sendButton.addEventListener('click', sendUserMessage);

    function sendUserMessage() {
        if (userInputField.value.trim() !== "") {
            // Disable the input and send button to prevent sending messages
            userInputField.disabled = true;
            sendButton.disabled = true;

            sendMessage(userInputField.value, 'user');
            userInputField.value = '';

            // Simulating a delay for the bot response
            setTimeout(() => {
                sendMessage("Auto reply: " + userInputField.value, 'bot');

                // Re-enable the input and send button
                userInputField.disabled = false;
                sendButton.disabled = false;
                userInputField.focus();
            }, 1000); // Adjust the delay as needed
        }
    }

    function sendMessage(message, sender) {
        let messageElem = document.createElement('div');
        messageElem.textContent = message;
        messageElem.classList.add('message', sender);
        chatWindow.appendChild(messageElem);

        chatWindow.parentElement.scrollTop = chatWindow.parentElement.scrollHeight;
    }
});
