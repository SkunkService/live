// apiStream.js

document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');

    // Ensure the userContainer exists
    if (!userContainer) {
        console.error('User container element not found.');
        return;
    }

    // Retrieve the class name from the userContainer element
    const className = userContainer.className;

    if (!className) {
        console.error('Class name is not defined on user-container.');
        return;
    }

    // Create a basic user profile element
    const userElement = document.createElement('div');

    // Apply inline styles directly to the element
    userElement.style.border = '1px solid #ccc';
    userElement.style.padding = '10px';
    userElement.style.marginTop = '10px';
    userElement.style.borderRadius = '5px';
    userElement.style.backgroundColor = '#f9f9f9';
    userElement.style.textAlign = 'center';

    // Example content for the user profile element
    userElement.innerHTML = `
      <p>${className}'s Content</p>
      <button id="review-user" style="
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
      ">View Profile</button>
    `;

    // Add event listener for the button
    userElement.querySelector("#review-user").addEventListener("click", () => {
        const profileUrl = `https://skunkservice.github.io/live/users/${className}`;
        window.open(profileUrl); // URL using className
    });

    // Insert the user profile element into the container
    userContainer.appendChild(userElement);
});

/*
Example Embed:
<div className="username" id="user-container"><script src="https://raw.githubusercontent.com/SkunkService/live/main/apiStream.js"></script></div>

<!-- This is the Embed Example for Use. -->
*/
