function createStream(title, description, status, category, url, username) {
    // Create the main container div
    const streamContainer = document.createElement('div');
    streamContainer.classList.add('live-stream');

    // Create the title element
    const streamTitle = document.createElement('h2');
    streamTitle.textContent = title;

    // Create the description element
    const streamDescription = document.createElement('p');
    streamDescription.textContent = description;

    // Create the status element
    const streamStatus = document.createElement('p');
    streamStatus.textContent = `Status: ${status}`;

    // Create the category element
    const streamCategory = document.createElement('p');
    streamCategory.textContent = category;

    // Create the watch stream button
    const watchButton = document.createElement('button');
    watchButton.classList.add('live-button');
    watchButton.textContent = 'Watch Stream';
    watchButton.setAttribute('data-url', url);
    watchButton.onclick = () => window.open(url, '_blank');

    // Create the profile button if a username is provided
    if (username) {
        const profileButton = document.createElement('button');
        profileButton.classList.add('live-button', 'profile-stream');
        profileButton.textContent = 'Profile';
        profileButton.setAttribute('username', username);
        streamContainer.appendChild(profileButton);
    }

    // Append all elements to the stream container
    streamContainer.appendChild(streamTitle);
    streamContainer.appendChild(streamDescription);
    streamContainer.appendChild(streamStatus);
    streamContainer.appendChild(streamCategory);
    streamContainer.appendChild(watchButton);

    // Append the stream container to the live-streams grid
    document.getElementById('live-streams').appendChild(streamContainer);
}
