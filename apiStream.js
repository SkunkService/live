// apiStream.js

document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');

    // Retrieve the class name from the userContainer element
    const className = userContainer.className;

    // Create a basic user profile element
    const userElement = document.createElement('div');
    userElement.className = 'user-element'; // Optional: Add a class for styling

    // Example content for the user profile element
    userElement.innerHTML = `
      <p>${className}'s Content</p>
      <button id="review-user">View Profile</button>
    `;

    // Add event listener for the button
    userElement.querySelector("#review-user").addEventListener("click", () => {
        window.open(`https://skunkservice.github.io/live/users/${className}`); // URL using className
    });

    // Insert the user profile element into the container
    userContainer.appendChild(userElement);
});

/*
Example Embed:
<div className="username" id="user-container"><script src="https://raw.githubusercontent.com/SkunkService/live/main/apiStream.js"></script></div>

<!-- This is the Embed Example for Use. -->
*/
