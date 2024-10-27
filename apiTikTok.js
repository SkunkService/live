document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('embed-skunkstream'); // Fetch Element Called embed-skunkstream
    
    // Apply styles directly using JavaScript to container
    container.style.width = '600px';
    container.style.height = '400px';
    container.style.border = '2px solid #4CAF50';
    container.style.borderRadius = '10px';
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9f9f9';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    container.style.overflow = 'auto';
    
    // Create a div element to hold the embedded content
    const embedContent = document.createElement('div');
    embedContent.innerHTML = `
        <p id="stream-start">Stream Starting Website...</p>
        <img id="stream-icon" class="square" src="https://github.com/SkunkService/live/blob/main/docs/live.png?raw=true" alt="Icon didn't Respond!">
        <button id="open-stream">Open</button>
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

    openStreamButton.style.backgroundColor = '#4CAF50'; // Button color
    openStreamButton.style.color = '#fff'; // Text color
    openStreamButton.style.border = 'none'; // Remove default border
    openStreamButton.style.borderRadius = '5px'; // Rounded corners
    openStreamButton.style.padding = '10px 20px'; // Button padding
    openStreamButton.style.cursor = 'pointer'; // Pointer cursor on hover
    openStreamButton.style.fontSize = '16px'; // Font size
    openStreamButton.style.transition = 'background-color 0.3s'; // Smooth color transition

    openStreamButton.addEventListener('mouseover', function() {
        openStreamButton.style.backgroundColor = '#45a049'; // Darker green on hover
    });

    openStreamButton.addEventListener('mouseout', function() {
        openStreamButton.style.backgroundColor = '#4CAF50'; // Original green color
    });

    // Update text content after 1 second
    setTimeout(function() {
        document.getElementById("stream-start").textContent = "Let's Watch a Stream!";
    }, 1000);

    // Open a new window when the button is clicked
    openStreamButton.addEventListener("click", function() {
        alert("Watch Out!\n\nThe Link there is it Malicious or Is not A Secure in Website.\n\nPress OK if you want to Continue Open Website.");
        const username = container.className; // Use the className for TikTok username
        window.open(`https://tiktok.com/@${username}/live`);
    });
});

// Example Embed: <div id="embed-container" className="username"><script src="https://raw.githubusercontent.com/SkunkService/live/main/apiTikTok.js"></div>
