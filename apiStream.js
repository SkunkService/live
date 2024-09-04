// apiStream.js

document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');

    if (userContainer) {
        // Create a user profile element
        const userElement = document.createElement('div');
        userElement.className = 'user-element'; // Add a class for specific styling

        // Define inline styles for the user profile element
        userElement.style.border = '1px solid #ccc';
        userElement.style.padding = '16px';
        userElement.style.margin = '10px';
        userElement.style.borderRadius = '8px';
        userElement.style.backgroundColor = '#f9f9f9';
        userElement.style.textAlign = 'center';

        // Create and style content within the user profile element
        const profileText = document.createElement('p');
        profileText.textContent = 'Profile';
        profileText.style.fontSize = '18px';
        profileText.style.margin = '0';

        const viewProfileButton = document.createElement('button');
        viewProfileButton.textContent = 'View Profile';
        viewProfileButton.style.padding = '10px 20px';
        viewProfileButton.style.fontSize = '16px';
        viewProfileButton.style.color = '#fff';
        viewProfileButton.style.backgroundColor = '#007bff';
        viewProfileButton.style.border = 'none';
        viewProfileButton.style.borderRadius = '4px';
        viewProfileButton.style.cursor = 'pointer';

        // Add a hover effect for the button
        viewProfileButton.addEventListener('mouseover', () => {
            viewProfileButton.style.backgroundColor = '#0056b3';
        });
        viewProfileButton.addEventListener('mouseout', () => {
            viewProfileButton.style.backgroundColor = '#007bff';
        });

        // Add event listener for the button
        viewProfileButton.addEventListener('click', () => {
            window.open('https://skunkservice.github.io/live/users/profile'); // Example URL; replace with dynamic URL if needed
        });

        // Append elements to userElement
        userElement.appendChild(profileText);
        userElement.appendChild(viewProfileButton);

        // Insert the user profile element into the container
        userContainer.appendChild(userElement);
    } else {
        console.error('User container element not found.');
    }
});

/*
Example Embed:
<div className="username" id="user-container"><script src="https://raw.githubusercontent.com/SkunkService/live/main/apiStream.js"></script></div>

<!-- This is the Embed Example for Use. -->
*/
