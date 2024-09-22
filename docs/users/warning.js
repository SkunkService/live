// Function to show the modal with a title and message
function showModal(title, message) {
    document.getElementById('msg-title').innerText = title;
    document.getElementById('msg').innerText = message;

    // Play sound from the Dropbox URL
    const audio = new Audio('https://www.dropbox.com/scl/fi/9iwxpc58j3yr49b8j5oxb/new-message-31-183617.mp3?raw=1');
    audio.play().catch(error => {
        console.error('Audio playback failed:', error);
    });

    document.getElementById('black-background').hidden = false; // Show modal
    document.getElementById('black-background').style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById('black-background').hidden = true; // Hide modal
    document.getElementById('black-background').style.display = "none";
}

// Event listener for the "OK" button in the modal
document.getElementById('ok').addEventListener('click', closeModal);

// Event listener for the "Why the User is Advising?" link
document.getElementById('info-advising').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor action
    showModal('User Advisory', 'This user advises against any violations of the Terms of Service and Privacy Policy.');
});
