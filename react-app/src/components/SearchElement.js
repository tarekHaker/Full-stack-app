
import React from 'react';

export default function Search({setInputSearch, selectedValue,setSelectedValue}) {
  return (
    <div>
      <span>Search by:</span>
      <select className="search" value={selectedValue} onChange={(e)=>{
        setSelectedValue(e.target.value)

      }}>
       <option value=""> Category</option>
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
      <input type="text" placeholder="Search by description..." className="search" 
      onChange={(e)=>{setInputSearch(e.target.value)}}
       />
      
    </div>
  );
}

