function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const age = calculateDifferenceInYears(birthdate, currentDate);

    resultText.textContent = `Your age is ${age} years.`;
    resultContainer.style.display = 'block';
}

function calculateDifferenceInYears(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Accounting for leap years
    const age = Math.floor(diffInMilliseconds / millisecondsInYear);
    return age;
}
