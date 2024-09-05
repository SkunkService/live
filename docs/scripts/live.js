document.addEventListener('DOMContentLoaded', () => {
    // Handle profile streamer buttons
    const openProfileStreamer = document.querySelectorAll('.profile-stream'); // Ensure these elements are clickable buttons

    openProfileStreamer.forEach(button => {
        button.addEventListener('click', () => {
            let username = button.getAttribute('username');
            if (username) {
                window.open(`https://skunkservice.github.io/live/users/${username}`, '_blank');
            } else {
                console.error('Username attribute is missing for button:', button);
            }
        });
    });

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

    // Select all buttons with IDs starting with 'nastream-button'
    const naButtons = document.querySelectorAll('[id^="nastream-button"]');

    // Add click event listener to each 'nastream-button'
    naButtons.forEach(button => {
        button.addEventListener('click', () => {
            showAlert("Stream is Not Available.", "You are trying to open a stream. This stream is invalid for Username.");
        });
    });

    const searchInput = document.getElementById('searchInput');
    const liveStreams = document.querySelectorAll('.live-stream');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();

            liveStreams.forEach(stream => {
                const title = stream.querySelector('h2') ? stream.querySelector('h2').textContent.toLowerCase() : '';
                const description = stream.querySelector('p') ? stream.querySelector('p').textContent.toLowerCase() : '';

                if (title.includes(query) || description.includes(query)) {
                    stream.style.display = '';
                } else {
                    stream.style.display = 'none';
                }
            });
        });
    }

    console.log("Warning: The Stream List Restricted is not allowed for use. This may violate SkunkService's guidelines. Do not attempt this restriction.");
});

console.log("Warning: The Stream List Restricted is not allowed for use. It will takes for violate that the SkunkService's Guildelines. Do not attempt this Restriction.");
