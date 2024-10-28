/*
To use this script, add the following HTML to your body:

<div class="skunkstream-profile username" id="skunkstream-profile-1"></div>
<div class="skunkstream-profile username" id="skunkstream-profile-2"></div>
<!-- Add more embeds as needed -->

Then, include the script below in the <body> at the end, after the elements you want to target:

<script src="https://cdn.jsdelivr.net/gh/SkunkService/live@main/apiStream.js"></script>
*/

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with an id starting with "skunkstream-profile-"
    const userContainers = document.querySelectorAll('[id^="skunkstream-profile-"]');

    // Check if there are any matching elements
    if (userContainers.length === 0) {
        console.error('No user container elements found with the specified id prefix.');
        return;
    }

    // Iterate through each matching element
    userContainers.forEach(userContainer => {
        // Retrieve the element's id and className
        const id = userContainer.id;
        const className = userContainer.className;

        if (!className) {
            console.error(`Class name is not defined on user container with ID ${id}.`);
            return;
        }

        // Create the profile element
        const userElement = document.createElement('div');

        // Apply inline styles
        userElement.style.border = '1px solid #ccc';
        userElement.style.padding = '10px';
        userElement.style.marginTop = '10px';
        userElement.style.borderRadius = '5px';
        userElement.style.backgroundColor = '#f9f9f9';
        userElement.style.textAlign = 'center';

        // Example content for the profile element
        userElement.innerHTML = `
          <p>${className}'s Content</p>
          <button id="review-user-${id}" style="
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          ">View Profile</button>
        `;

        // Add event listener for the button
        userElement.querySelector(`#review-user-${id}`).addEventListener("click", () => {
            const profileUrl = `https://skunkservice.github.io/live/users/${className}`;
            window.open(profileUrl);
        });

        // Insert the profile element into the user container
        userContainer.appendChild(userElement);
    });
});
