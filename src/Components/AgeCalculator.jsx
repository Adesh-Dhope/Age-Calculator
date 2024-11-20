import React, { useState } from 'react';
import './AgeCalculator.css'; // Import CSS for styling

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (e) => {
    e.preventDefault();
    if (!birthDate) {
      alert('Please select a birth date');
      return;
    }
    const today = new Date();
    const birth = new Date(birthDate);

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    // Adjust for months and days
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <form onSubmit={calculateAge} className="form-container">
        <label htmlFor="birthDate">Enter your birth date:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && (
        <div className="result-container">
          <h3>Your Age: {age} years</h3>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
