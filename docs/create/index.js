// Anti-Spam: Limit the number of requests that can be made within a time frame
const REQUEST_INTERVAL = 60000; // 1 minute
let lastRequestTime = 0;

// Profanity filter
const containsProfanity = (text) => {
    const profaneWords = ['ez', 'nuv', 'pito', 'mierda', 'mrd', 'puto', 'puta', 'gassy', 'fuck', 'pene', 'pete'];
    return profaneWords.some(word => text.toLowerCase().includes(word));
};

// Function to send an embedded message to a Discord webhook
function sendToDiscordWebhook(embedTitle, embedDescription, embedColor) {
    const webhookURL = 'https://discord.com/api/webhooks/1251445860252913675/AhDR5MEFVKeCwxKWCH3EDQpOK4IKgR6B2lMY7FCSHZWNmoAiOCHPLvTw9UMw6ymPx1zD'; // Replace with your webhook URL

    const payload = {
        embeds: [
            {
                title: embedTitle,
                description: embedDescription,
                color: embedColor,
                timestamp: new Date(), // Adds the current timestamp
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

document.addEventListener('DOMContentLoaded', () => {
    const createRequestButton = document.getElementById('create-request-button');
    const termsMessage = document.getElementById('termsofuse-message');
    const agreeButton = document.getElementById('Agree');

    if (createRequestButton) {
        createRequestButton.addEventListener('click', () => {
            const usernameField = document.querySelector('#create-request-stream input[type="text"]:nth-of-type(1)');
            const partnerField = document.querySelector('#create-request-stream input[type="text"]:nth-of-type(2)');
            const messageText = document.getElementById('message-request-text');
            const currentTime = Date.now();

            // Anti-Link Validation: Check if the input contains a URL
            const urlPattern = /https?:\/\/[^\s]+/;
            if (urlPattern.test(usernameField.value) || urlPattern.test(partnerField.value)) {
                messageText.textContent = '❌📎 Links are not allowed in the request.';
                messageText.style.color = 'red';
                return;
            }

            // Anti-Spam Validation: Check if the request is made too frequently
            if (currentTime - lastRequestTime < REQUEST_INTERVAL) {
                messageText.textContent = '🛑 Please wait a moment before making another request.';
                messageText.style.color = 'red';
                return;
            }

            const emailPattern = /^(.+)@(.+)\..+$/;
            if (emailPattern.test(usernameField.value) || emailPattern.test(partnerField.value)) {
              messageText.textContent = '✉️ Emails are not allowed in Stream Request (Username or Partner).';
              messageText.style.color = 'red';
              return;
            }

            // Validation for empty fields and profanity
            if (usernameField.value.trim() === '' || partnerField.value.trim() === '') {
                messageText.textContent = 'Please fill in both fields.';
                messageText.style.color = 'red';
            } else if (containsProfanity(usernameField.value) || containsProfanity(partnerField.value)) {
                messageText.textContent = 'Inappropriate language detected. Please revise your input.';
                messageText.style.color = 'red';
            } else {
                // If all validations pass, send the request to the Discord webhook
                const messageContent = `New stream request:\nUsername: ${usernameField.value}\nStreaming with: ${partnerField.value}`;
                sendToDiscordWebhook('New Stream Request', messageContent, 0x00ff00); // Green color
                
                // Clear the input fields and message text
                usernameField.value = '';
                partnerField.value = '';
                messageText.textContent = '✅ Request submitted successfully!';
                messageText.style.color = '#00ff00';

                // Update the last request time
                lastRequestTime = currentTime
            }
        });
    }

    if (termsMessage && agreeButton) {
        // Check if the user has already agreed to the terms
        if (localStorage.getItem('termsAccepted') === 'true') {
            termsMessage.style.display = 'none'; // Hide terms message if already accepted
        }

        // Add event listener to the "I Agree" button
        agreeButton.addEventListener('click', () => {
            localStorage.setItem('termsAccepted', 'true'); // Store acceptance in local storage
            termsMessage.style.display = 'none'; // Hide the terms of use message
            alert('You have agreed to the Terms of Use.');
        });
    }
});
