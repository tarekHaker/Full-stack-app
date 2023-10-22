import React, { useState } from 'react';

function ExpenseForm({ addExpense, income, totalExpenses,
   availableBalance, setAvailableBalance, setTotalExpenses, initialBalance,setIncome }) {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    const newTotalExpenses = totalExpenses + parseFloat(amount);
    setTotalExpenses(newTotalExpenses);
    let newAvailableBalance;
    initialBalance!==0?(newAvailableBalance = initialBalance - newTotalExpenses) :(newAvailableBalance = income - newTotalExpenses)

    let expense = {
      category,
      date,
      description,
      amount: parseFloat(amount),
      income: parseFloat(income),
      availableBalance: newAvailableBalance,
      totalExpenses: newTotalExpenses
    };

    if (expense.availableBalance) {
      const availableBalanceAfterExpense = expense.availableBalance - newTotalExpenses;
      setAvailableBalance(availableBalanceAfterExpense);
    } else {
      setAvailableBalance(newAvailableBalance);
    }

    addExpense(expense);

    setCategory('');
    setDate('');
    setDescription('');
    setAmount('');
    setIncome('');
  };

  return (
    <div>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
          <option value="Transportation">Transportation</option>
          <option value="Groceries">Groceries</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Debt Payments">Debt Payments</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Savings">Savings</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Education">Education</option>
          <option value="Childcare">Childcare</option>
          <option value="Charitable Giving">Charitable Giving</option>
          <option value="Gifts">Gifts</option>
          <option value="Other">Other</option>
        </select>
      </label><br />
      <label>Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>

      <button onClick={handleAddExpense}>Add</button>
    </div>
  );
}

export default ExpenseForm;

