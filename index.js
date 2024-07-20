// Function to start the countdown timer
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset the timer
        }
    }, 1000);
}

// Initialize the countdown timer
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("countdown");
    const duration = 600; // Duration in seconds (10 minutes in this example)
    startCountdown(duration, display);
});
