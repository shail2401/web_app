const financeForm = document.getElementById('financeForm');
const resultDiv = document.getElementById('result');

financeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const remainingAmount = income - (expenses + savings);
    let financialStatus;
    if (remainingAmount > 0) {
        financialStatus = "Your savings are in good shape.";
    } else if (remainingAmount === 0) {
        financialStatus = "Your spending and savings are almost equal";
    } else {
        financialStatus = "You are spending more than your income";
    }
    resultDiv.textContent = financialStatus;
});

