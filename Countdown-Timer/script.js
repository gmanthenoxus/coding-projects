let countdown;
let targetTime;

function startCountdown() {
    const durationInput = document.getElementById('duration');
    const durationMinutes = parseInt(durationInput.value, 10);

    if (isNaN(durationMinutes) || durationMinutes <= 0) {
        alert('Please enter a valid positive number for the duration.');
        return;
    }

    // Set the target time based on user input
    const now = new Date();
    targetTime = new Date(now.getTime() + durationMinutes * 60 * 1000);

    // Call updateTimer every second
    countdown = setInterval(updateTimer, 1000);

    // Initial call to updateTimer to display the time immediately
    updateTimer();
}

function updateTimer() {
    const now = new Date();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        // Countdown is complete
        clearInterval(countdown);
        document.getElementById('timer').textContent = 'Countdown Complete!';
    } else {
        // Calculate remaining hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Format the time and update the display
        const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
        document.getElementById('timer').textContent = formattedTime;
    }
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function updateCountdown() {
    // Specify the target date and time (YYYY-MM-DD HH:mm:ss)
    const targetDate = new Date('2024-12-31T23:59:59');

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference in seconds
    const timeDifference = Math.floor((targetDate - currentDate) / 1000);

    if (timeDifference > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (60 * 60 * 24));
        const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeDifference % (60 * 60)) / 60);
        const seconds = timeDifference % 60;

        // Display the countdown in the format "DD:HH:MM:SS"
        document.getElementById('timer2').textContent = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    } else {
        // If the target date has passed
        document.getElementById('timer2').textContent = 'Countdown expired!';
    }
}

function formatTime(time) {
    // Helper function to add leading zero if the time is a single digit
    return time < 10 ? `0${time}` : time;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately when the page loads
updateCountdown();
