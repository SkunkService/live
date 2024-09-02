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

console.log("Warning: The Stream List Restricted is not allowed for use. It will takes for violate that the SkunkService's Guildelines. Do not attempt this Restriction.");
