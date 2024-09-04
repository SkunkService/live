let inactivityTime = 60000; // Time in milliseconds (30 seconds)
let inactivityTimer;

// Function to show inactivity alert with dynamic content
function showAlertI(title, message) {
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
    const accept = document.getElementById("accept");

    accept.hidden = true;
}

// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        showAlertI(
            'Inactive Detected',
            'You have been inactive for too long!\nRestart your Website to Continue.' // <br> or \n
        );
    }, inactivityTime); // Start inactivity timer
}

// Event listeners to detect user activity
window.onload = resetInactivityTimer;
document.onmousemove = resetInactivityTimer;
document.onkeydown = resetInactivityTimer;
document.onclick = resetInactivityTimer;
document.onscroll = resetInactivityTimer;
