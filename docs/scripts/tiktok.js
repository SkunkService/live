console.log("[WARN]: Could not be working for Stream List!\n[WARN]: Will not be longer for API.");

// Añadir evento al botón de aceptar para ocultar la alerta
document.getElementById('accept').addEventListener('click', () => {
    const alertBox = document.getElementById('alert');
    alertBox.style.display = 'none'; // Oculta la alerta
    function showAlert(title, message) {
        const alertTitle = document.getElementById('alert-title');
        const alertBody = document.getElementById('alert-body');
        const alertBox = document.getElementById('alert');

        alertTitle.textContent = title;
        alertBody.textContent = message;
        alertBox.style.display = 'block';
    }

    showAlert('Warning Pop-Out', 'You need to Block that the Pop-Out might be taken for null using in URL: https://skunkservice.github.io/live/null.');
});
