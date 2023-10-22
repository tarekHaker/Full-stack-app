import React from 'react';

function ExpenseSummary({ totalExpenses, availableBalance, expenses }) {
  const categories = expenses.map((expense) => expense.category);
  const uniqueCategories = [...new Set(categories)];

  const getLastIncomeWithNotNull = (expenses) => {
    for (let i = expenses.length - 1; i >= 0; i--) {
      if (expenses[i].income > 0) {
        return expenses[i].income;
      }
    }
    return null; 
  };
  const Total = expenses.reduce((total, exp) => total + exp.amount, 0);
  
  const lastIncome = getLastIncomeWithNotNull(expenses);


  const categorySummary = uniqueCategories.map((category) => {
    const categoryExpenses = expenses.filter((expense) => expense.category === category);
    const categoryTotal = categoryExpenses.reduce((total, exp) => total + exp.amount, 0);
    const categoryPercentage = (categoryTotal / lastIncome) * 100;

    return (
      <div key={category}>
        <p>
          {category} : {categoryTotal} ({categoryPercentage.toFixed(2)}%)
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>Expense Summary</h2>
      <div> Total: {Total} </div>
      
      <div>{categorySummary}</div>
     
    </div>
  );
}

export default ExpenseSummary;
