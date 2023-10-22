import React, { useState } from 'react';
import Search from './SearchElement';
import axios from 'axios';


function ExpenseTable({ expenses, setExpenses, setRender, render }) {
  const [editableRow, setEditableRow] = useState(null);
  const [editedExpense, setEditedExpense] = useState(null);
  const [inputSearch, setInputSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); 




  const handleEditClick = (index) => {
    setEditableRow(index);
    setEditedExpense({ ...expenses[index] });
  };

  const handleSaveClick = (index) => {
    setEditableRow(null);
    axios.put(`http://localhost:7000/expenses/updateOne/${editedExpense._id}`, editedExpense)
      .then((resp) => {
        console.log(resp);
        const updatedExpenses = [...expenses];
        updatedExpenses[index] = editedExpense;
        setExpenses(updatedExpenses);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (field, value) => {
    const updatedExpense = { ...editedExpense };
    if(value) {updatedExpense[field] = value;
    setEditedExpense(updatedExpense)} else {updatedExpense[field]=0;setEditedExpense(updatedExpense)}
  };

  return (
    <div>
      <h2>Expense List</h2>
      <Search setInputSearch={setInputSearch} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {inputSearch!==''&& expenses.filter((e)=>e.description.includes(inputSearch)).map((expense, index) => (
            <tr key={index}>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                ) : (
                  expense.category
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                ) : (
                  expense.date
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                ) : (
                  expense.description
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.amount}
                    onChange={(e) => handleInputChange('amount', parseFloat(e.target.value))}
                  />
                ) : (
                  expense.amount
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button style={{ margin: "2px" }} onClick={
                      ()=>{
                        axios.delete(`http://localhost:7000/expenses/delete/${expense._id}`)
                        .then (()=>{
                          console.log("deleted");
                          setRender(!render);
                          setEditableRow(null);
                          })
                        .catch(err => console.log(err))
                      }
                    }>Delete</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}




         {
          selectedValue!=="" && expenses.filter((e)=>e.category.includes(selectedValue)).map((expense, index) => (
            <tr key={index}>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                ) : (
                  expense.category
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                ) : (
                  expense.date
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                ) : (
                  expense.description
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.amount}
                    onChange={(e) => handleInputChange('amount', parseFloat(e.target.value))}
                  />
                ) : (
                  expense.amount
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button style={{ margin: "2px" }} onClick={
                      ()=>{
                        axios.delete(`http://localhost:7000/expenses/delete/${expense._id}`)
                        .then (()=>{
                          console.log("deleted");
                          setRender(!render);
                          setEditableRow(null);
                          })
                        .catch(err => console.log(err))
                      }
                    }>Delete</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))
         }








          {(inputSearch ==='' && selectedValue==="") && expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                ) : (
                  expense.category
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                ) : (
                  expense.date
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                ) : (
                  expense.description
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <input
                    type="text"
                    value={editedExpense.amount}
                    onChange={(e) => handleInputChange('amount', parseFloat(e.target.value))}
                  />
                ) : (
                  expense.amount
                )}
              </td>
              <td>
                {editableRow === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button style={{ margin: "2px" }} onClick={
                      ()=>{
                        axios.delete(`http://localhost:7000/expenses/delete/${expense._id}`)
                        .then (()=>{
                          console.log("deleted");
                          setRender(!render);
                          setEditableRow(null);
                          })
                        .catch(err => console.log(err))
                      }
                    }>Delete</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;