document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    
    expenseForm.addEventListener('submit', (event) => {
      event.preventDefault();
   
      const description = document.getElementById('expense-desc').value;
      const category = document.getElementById('category').value;
      const amount = parseFloat(document.getElementById('amount').value);
   
      if (description === '' || category === '' || isNaN(amount) || amount <= 0) {
        alert('Please fill in all fields with valid data.');
        return;
      }
   
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
      `;
   
      expenseList.appendChild(newRow);
      expenseForm.reset();
    });
  });