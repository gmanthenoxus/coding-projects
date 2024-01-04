function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

    document.getElementById('time').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();
