import React, { useEffect } from 'react';
import axios from 'axios';

export default function Income({ setIncome, render, income, setRender,initialBalance, setInitialBalance}) {

  

  useEffect(() => {
    axios.get('http://localhost:7000/expenses/findBalance')
      .then(({ data }) => {
        setInitialBalance(data.availableBalance);
        
      })
      .catch(err => console.log(err))
  }, [render,setInitialBalance])

  return (
    <div>
      <label>Add balance:
        <input type="number" value={income} onChange={(e) => {
          const newIncome = parseFloat(e.target.value); 
          setIncome(newIncome);
        }} />
        <button onClick={() => {
          const newInc = initialBalance + income; 
          setIncome(newInc);
          const update = { availableBalance: newInc }; 
          axios.put('http://localhost:7000/expenses/updateLatest', update)
            .then(() => {
              setRender(!render);
            })
            .catch(err => console.log(err));
        }}>add</button>
      </label>
      <h4>Available balance: {initialBalance || income || 0}</h4>
    </div>
  );
}
