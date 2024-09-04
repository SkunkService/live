document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('embed-container');

    // Apply styles directly using JavaScript to container
    container.style.width = '600px';
    container.style.height = '400px';
    container.style.border = '2px solid #6441a5'; // Twitch brand color
    container.style.borderRadius = '10px';
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9f9f9';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    container.style.overflow = 'auto';

    // Create a div element to hold the embedded content
    const embedContent = document.createElement('div');
    embedContent.innerHTML = `
        <p id="stream-start">Stream Starting Soon...</p>
        <img id="stream-icon" class="square" src="https://static.twitch.tv/branding/twitch-logo-light.svg" alt="Twitch Logo">
        <button id="open-stream">Watch Stream</button>
    `;

    // Append the content to the container
    container.appendChild(embedContent);

    // Style the image and button
    const streamIcon = document.getElementById('stream-icon');
    const openStreamButton = document.getElementById('open-stream');

    streamIcon.style.width = '100px'; // Adjust width as needed
    streamIcon.style.height = '100px'; // Adjust height as needed
    streamIcon.style.borderRadius = '50%'; // Circular image
    streamIcon.style.marginBottom = '10px'; // Space below the image

    openStreamButton.style.backgroundColor = '#6441a5'; // Twitch brand color
    openStreamButton.style.color = '#fff'; // Text color
    openStreamButton.style.border = 'none'; // Remove default border
    openStreamButton.style.borderRadius = '5px'; // Rounded corners
    openStreamButton.style.padding = '10px 20px'; // Button padding
    openStreamButton.style.cursor = 'pointer'; // Pointer cursor on hover
    openStreamButton.style.fontSize = '16px'; // Font size
    openStreamButton.style.transition = 'background-color 0.3s'; // Smooth color transition

    openStreamButton.addEventListener('mouseover', function() {
        openStreamButton.style.backgroundColor = '#553b7a'; // Darker purple on hover
    });

    openStreamButton.addEventListener('mouseout', function() {
        openStreamButton.style.backgroundColor = '#6441a5'; // Original Twitch color
    });

    // Update text content after 1 second
    setTimeout(function() {
        document.getElementById("stream-start").textContent = "Join the Stream!";
    }, 1000);

    // Open a new window when the button is clicked
    openStreamButton.addEventListener("click", function() {
        alert("Watch Out!\n\nThe Link there might be Malicious or Not Secure.\n\nPress OK if you want to Continue Open Website.");
        const username = container.className; // Use the className for Twitch username
        window.open(`https://twitch.tv/${username}`);
    });
});

/* 
Example Embed:
<div id="embed-container" className="twitchusername">
    <script src="https://raw.githubusercontent.com/SkunkService/live/main/apiTwitch.js"></script>
</div>

- Replace `twitchusername` with the actual Twitch username in the className attribute.
- This script will handle displaying and interacting with Twitch stream embeds.
*/
