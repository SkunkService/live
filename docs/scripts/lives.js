// Assuming you have already initialized the TikTok SDK with your Client Key in another script (e.g., scripts/tiktok.js)

// Function to display the live streams
function displayLiveStreams(streams) {
  const liveStreamsElement = document.getElementById('live-streams');
  liveStreamsElement.innerHTML = ''; // Clear any existing content

  // Loop through each live stream in the list
  for (const stream of streams) {
    const streamElement = document.createElement('div'); // Create a DIV for each stream
    streamElement.classList.add('live-stream'); // Add a CSS class for styling (optional)

    // Add content to the stream element (example: title, thumbnail, play URL)
    streamElement.innerHTML = `
      <h2>${stream.title}</h2>
      <img src="${stream.thumbnailUrl}" alt="${stream.title} thumbnail">
      <a href="${stream.playUrl}">Watch Live</a>
    `;

    // Append the stream element to the live-streams container
    liveStreamsElement.appendChild(streamElement);
  }
}

// Fetch live streams using the TikTok SDK
tiktok.live.list().then(streams => {
  displayLiveStreams(streams);
});
