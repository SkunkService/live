let inactivityTime = 120000; // Time in milliseconds (30 seconds)
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
    setInterval(()=>{
        blackBg.style.display = 'flex';
        alertBox.style.display = 'block';
        alertBox.hidden = false;
        blackBg.hidden = false;
    }, 1);
    const accept = document.getElementById("accept");

    setInterval(() => {accept.hidden = true}, 1);
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

(function() {
    let isConsoleOpen = false;
    const threshold = 160;

    function detectConsole() {
        console.log("[VIOLATION]: The DevTools you are trying to Open the Console. The DevTools using Console will violate the SkunkService's Promises of the Community Guidelines.");
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!isConsoleOpen) {
                isConsoleOpen = true;
                document.body.innerHTML=`<div class="container"><h1>You are using the DevTools!</h1>
                <p>Why the Website SkunkService LIVE Stream is Protected?</p>
                <p>The SkunkService is Protected the Website for LIVE. The DevTools using Console will violate the SkunkService's Promises of the Community Guidelines and Terms of Use. Keeping Safe of the Website.</p></div>`;
            }
        } else {
            isConsoleOpen = false;
        }
    }

    setInterval(detectConsole, 100); // Check every second
})();
