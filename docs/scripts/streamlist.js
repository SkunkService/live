// Array of bad words to filter out
const badWords = ["fuck", "nigger", "nigga", "butted", "buttes", "puto", "puta", "verga", "poronga", "pene", "pete", "polla", "mueranse", "muere", "morid", "muerte", "muerto", "loli", "mueranse", "n1gg4", "nigg4", "n1gga","n!gga","n!gg4","n!gg3r","n1gg3r","n1gger","nigg3r","n!gger","kill", "butts", "culo", "nsfw", "sfw"];

// Safety by Word Filters for Streaming List Security
const safeFilter = true; // 'true' activates the security filters; 'false' deactivates them

// Safety Duplication
const safeDuplication = true; // 'true' activates duplication checks; 'false' deactivates them

// Function to check for bad words in title and description
function checkStreamBadWords(stream) {
    // Check for bad words in the title or description
    const hasBadWord = badWords.some(badWord => 
        stream.title.toLowerCase().includes(badWord) || 
        stream.description.toLowerCase().includes(badWord)
    );
    return !hasBadWord; // Returns true if no bad words are found
}

// Function to check for duplicate streams based on the URL
function checkDuplicationStream(stream, existingStreams) {
    // Check if the URL already exists in the displayed streams
    return !existingStreams.some(existingStream => existingStream.url === stream.url);
}

// Function to create a new stream item dynamically
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

// Array containing stream data objects
const streamList = [
    {
        title: "flamingavins's LIVE",
        description: "Streaming with TikTok",
        status: "Approved",
        category: "Chat & Interview",
        url: "https://www.tiktok.com/@flamingavins/live",
        username: "flamingavins"
    },
    {
        title: "اكبر حسابات تيك توك في العالم's LIVE",
        description: "Streaming with TikTok",
        status: "Approved",
        category: "Chat & Interview",
        url: "https://www.tiktok.com/@bouderdareda/live",
        username: "bouderdareda"
    }
];

/*
Stream List Example:
{
    title: "SkunkPlatform's LIVE",
    description: "Streaming with TikTok using Windows",
    status: "Approved",
    category: "Tech Talk",
    url: "https://www.tiktok.com/@skunkplatform/live",
    username: "skunkplatform"
}
*/

// Array to store the streams that are successfully added
const existingStreams = [];

// Automatically create each stream in the list
streamList.forEach(stream => {
    // Validate based on safety flags
    const isSafeFromBadWords = safeFilter ? checkStreamBadWords(stream) : true;
    const isNotDuplicate = safeDuplication ? checkDuplicationStream(stream, existingStreams) : true;

    // Only create stream if both safety checks pass (or are deactivated)
    if (isSafeFromBadWords && isNotDuplicate) {
        createStream(
            stream.title,
            stream.description,
            stream.status,
            stream.category,
            stream.url,
            stream.username
        );

        // Add the successfully added stream to the existingStreams list
        existingStreams.push(stream);
    } else {
        console.log(`Stream "${stream.title}" skipped due to bad words or duplication.`);
    }
});
