console.log("[WARN]: Could not be working for Stream List!\n[WARN]: Will not be longer for API.");

function showAlert(title, message) {
    const alertBox = document.getElementById('alert');
    const blackBg = document.getElementById('black-bg');
    const alertTitle = document.getElementById('alert-title');
    const alertBody = document.getElementById('alert-body');

    alertTitle.textContent = title;
    alertBody.textContent = message;

    blackBg.style.display = 'flex';
    alertBox.style.display = 'block';
}

document.getElementById('accept').addEventListener('click', () => {
    const blackBg = document.getElementById('black-bg');
    const alertBox = document.getElementById('alert');
    
    blackBg.style.display = 'none';
    alertBox.style.display = 'none';
});

// Call showAlert function where needed
showAlert('Warning Pop-Out', 'You need to Block that the Pop-Out might be taken for null using in URL: https://skunkservice.github.io/live/null.');
