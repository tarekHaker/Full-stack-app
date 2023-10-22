import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import ExpenseSummary from './ExpenseSummary';
import '../App.css';
import Income from './Income';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [availableBalance, setAvailableBalance] = useState(null);
  const [render, setRender] = useState(false);
  const [initialBalance, setInitialBalance] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:7000/expenses/')
      .then(({ data }) => {
        setExpenses(data);
      })
     
      .catch(err => console.log(err));
  }, [render]);

  const addExpense = async (expense) => {
    try {
      setExpenses([...expenses, expense]);
      const newTotalExpenses = totalExpenses + expense.amount;
      setTotalExpenses(newTotalExpenses);

      
       await axios.post('http://localhost:7000/expenses/post', expense);
     
      setRender(!render); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Income income={income} setIncome={setIncome} render={render} setRender={setRender}
       initialBalance={initialBalance} setInitialBalance={setInitialBalance}  />
      <h1>Monthly Expense Management</h1>
      <ExpenseForm
        addExpense={addExpense}
        income={income}
        setIncome={setIncome}
        totalExpenses={totalExpenses}
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}
        setTotalExpenses={setTotalExpenses}
        initialBalance={initialBalance}
      />
      <ExpenseTable expenses={expenses} setExpenses={setExpenses} setRender={setRender} render={render}  />
      <ExpenseSummary totalExpenses={totalExpenses} availableBalance={availableBalance} expenses={expenses} />
    </div>
  );
}

export default App;
