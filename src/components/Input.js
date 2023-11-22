import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const CalculatorContainer = styled.div`
  background-color: #f2f2f2; // Light grey background
  padding: 20px;
  border-radius: 20px; // Rounded rectangle
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 columns
  grid-gap: 10px;
  width: max-content;
  margin: 20px auto;
`;

const Button = styled.button`
  height: 60px;
  width: 60px;
  background-color: #007bff; // Blue background
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px; // Rounded corners
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ZeroButton = styled(Button)`
`;

const SlashButton = styled(Button)`
`;

const CheckButton = styled(Button)`
  font-size: 16px;
`;

const Display = styled.input`
  height: 60px;
  grid-column: 1 / -1; // Display spans all columns
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

function NumberInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleCheck = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key >= 0 && event.key <= 9) {
      setInputValue(inputValue + event.key);
    } else if (event.key === 'Enter') {
      handleCheck();
    } //Add Backspace 
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [inputValue]);

  return (
    <CalculatorContainer>
      <Display value={inputValue} readOnly />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
        <Button key={number} onClick={() => handleButtonClick(number.toString())}>
          {number}
        </Button>
      ))}
      <ZeroButton onClick={() => handleButtonClick('0')}>0</ZeroButton>
      <SlashButton onClick={() => handleButtonClick('/')}>/</SlashButton>
      <CheckButton onClick={handleCheck}>Check</CheckButton>
    </CalculatorContainer>
  );
}

export default NumberInput;
