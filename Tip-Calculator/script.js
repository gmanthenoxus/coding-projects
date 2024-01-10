function calculateTip() {
    // Get the bill amount and tip percentage from input fields
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Check if the input is valid
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }

    // Calculate the tip
    const tipAmount = (billAmount * tipPercentage) / 100;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
}
