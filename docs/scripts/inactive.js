let inactivityTime = 30000; // Time in milliseconds (30 seconds)
let inactivityTimer;

// Function to show inactivity alert with dynamic content
function showAlert(title, message) {
    const alertBox = document.getElementById('alert');
    const blackBg = document.getElementById('black-bg');
    const alertTitle = document.getElementById('alert-title');
    const alertBody = document.getElementById('alert-body');

    // Set the title and message
    alertTitle.textContent = title;
    alertBody.textContent = message;

    // Show the alert and the black background
    blackBg.style.display = 'flex';
    alertBox.style.display = 'block';
}

// Function to hide the alert
function hideAlert() {
    const blackBg = document.getElementById('black-bg');
    const alertBox = document.getElementById('alert');

    // Hide the alert and the black background
    blackBg.style.display = 'none';
    alertBox.style.display = 'none';
}

// Event listener to hide the alert when the 'OK' button is clicked
document.getElementById('accept').addEventListener('click', hideAlert);

// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        showAlert(
            'Inactive Detected',
            'You have been inactive for too long!<br>Press OK if you want to continue this.' // <br> or \n
        );
    }, inactivityTime); // Start inactivity timer
}

// Event listeners to detect user activity
window.onload = resetInactivityTimer;
document.onmousemove = resetInactivityTimer;
document.onkeydown = resetInactivityTimer;
document.onclick = resetInactivityTimer;
document.onscroll = resetInactivityTimer;
