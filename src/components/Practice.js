import React, { useState } from 'react';
import data from '../data.json';



const Practice = () => {
  const [numbers, setNumbers] = useState(data);

  const renderNumbers = () => {
    return numbers.map((number) => (
        <div >
            <ul>
                <li key={number.id}>{number.task}</li>
                
            </ul>
        </div>)
    );
  };

  return (
    <div>
      <h1>Numbers:</h1>
      {renderNumbers()}
    </div>
  );
};

export default Practice;

