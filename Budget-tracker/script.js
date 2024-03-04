const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const addBtn = document.getElementById('add-btn');
const transactionHistory = document.getElementById('transaction-history');

let transactions = [];

addBtn.addEventListener('click', addTransaction);

function addTransaction() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (description === '' || isNaN(amount) || amount === 0) {
        alert('Please enter a valid description and amount');
        return;
    }

    const transaction = {
        id: generateId(),
        description,
        amount,
        type,
        date: new Date().toLocaleDateString()
    };

    transactions.push(transaction);
    renderTransactions();
    clearInputs();
}

function generateId() {
    return Math.floor(Math.random() * 1000000);
}

function renderTransactions() {
    transactionHistory.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionElement = document.createElement('div');
        transactionElement.classList.add('transaction');
        transactionElement.innerHTML = `
            <p><strong>Description:</strong> ${transaction.description}</p>
            <p><strong>Amount:</strong> ${transaction.type === 'income' ? '+' : '-'}$${Math.abs(transaction.amount)}</p>
            <p><strong>Date:</strong> ${transaction.date}</p>
        `;
        transactionHistory.appendChild(transactionElement);
    });
}

function clearInputs() {
    descriptionInput.value = '';
    amountInput.value = '';
    typeSelect.value = 'income';
}
