document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the class 'live-button'
    const buttons = document.querySelectorAll('.live-button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the URL from the data-url attribute
            const url = button.getAttribute('data-url');
            // Open the URL in a new tab or window
            window.open(url, '_blank');
        });
    });
});

// Anti-Spam: Limit the number of requests that can be made within a time frame
const REQUEST_INTERVAL = 60000; // 1 minute
let lastRequestTime = 0;

// Example filter functions
const containsProfanity = (text) => {
    const profaneWords = ['ez', 'nuv', 'pito', 'mierda', 'mrd', 'puto', 'puta', 'gassy', 'fuck', 'pene', 'pete'];
    return profaneWords.some(word => text.includes(word));
};

const containsInvalidKeywords = (text) => {
    const allowedKeywords = ['tiktok', 'twitch', 'stream']; // List of allowed keywords
    return !allowedKeywords.some(keyword => text.toLowerCase().includes(keyword));
};

// Function to send an embedded message to a Discord webhook
function sendToDiscordWebhook(embedTitle, embedDescription, embedColor) {
    const webhookURL = 'https://discord.com/api/webhooks/1251445860252913675/AhDR5MEFVKeCwxKWCH3EDQpOK4IKgR6B2lMY7FCSHZWNmoAiOCHPLvTw9UMw6ymPx1zD'; // Replace with your webhook URL

    const payload = {
        embeds: [
            {
                title: embedTitle,
                description: embedDescription,
                color: embedColor, // Hex color code (e.g., 0x00ff00 for green)
                timestamp: new Date(), // Optional: adds the current timestamp
            }
        ]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully.');
        } else {
            console.error('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to handle button click
document.getElementById('create-request-button').addEventListener('click', () => {
    const usernameField = document.querySelector('#create-request-stream input[type="text"]:nth-of-type(1)');
    const launchingField = document.querySelector('#create-request-stream input[type="text"]:nth-of-type(2)');
    const messageText = document.getElementById('message-request-text');
    const currentTime = Date.now();

    // Anti-Link Validation: Check if the input contains a URL
    const urlPattern = /https?:\/\/[^\s]+/;
    if (urlPattern.test(usernameField.value) || urlPattern.test(launchingField.value)) {
        messageText.textContent = 'Links are not allowed in the request.';
        messageText.style.color = 'red'; // Change text color to red for error
        return; // Exit function if URL is found
    }

    // Anti-Spam Validation: Check if the request is made too frequently
    if (currentTime - lastRequestTime < REQUEST_INTERVAL) {
        messageText.textContent = 'Please wait a moment before making another request.';
        messageText.style.color = 'red'; // Change text color to red for error
        return; // Exit function if spam detected
    }

    if (usernameField.value.trim() === '' || launchingField.value.trim() === '') {
        // Input fields are empty
        messageText.textContent = 'Please fill in both fields.';
        messageText.style.color = 'red'; // Optional: Change text color to red for error
    } else {
        // Input fields have value
        const messageContent = `New stream request:\nUsername: ${usernameField.value}\nStreaming with: ${launchingField.value}`;
        sendToDiscordWebhook('New Stream Request', messageContent, 0x00ff00); // Green color
        
        // Clear the input fields and message text
        usernameField.value = '';
        launchingField.value = '';
        messageText.textContent = '';

        // Update the last request time
        lastRequestTime = currentTime;
    }
});
