import React, { useState, useEffect, forwardRef } from 'react';
import styled from '@emotion/styled';
import Input from './Input';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const NumberSquare = styled.div`
  width: 60px; // Size of the square
  height: 60px;
  background-color: #f0f0f0; // Background color of the square
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px; // Space between squares
  border-radius: 10px; // Rounded corners
  font-size: 24px; // Larger font size
  font-weight: bold; // Bold font
`;

const InfoButton = styled.button`
  position: absolute;
  width: 30px; // Size of the square
  height: 30px;
  top: 150px;
  right: 10px;
  background-color: #007bff; // Initial color
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; // Color change on hover
  }
`;

const InfoText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const handleNumberSubmit = (number) => {
  // Handle the submitted number here
};

const Sequence = forwardRef((props, ref) => {
    const [sequence, setSequence] = useState([]);
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
      setShowInfo(!showInfo);
    };

    useEffect(() => {
      if (ref.current) {
        const position = ref.current.offsetTop; // Get the top position of the element
        window.scrollTo({
          top: position - 60, // Adjust 'someOffset' as needed to account for any fixed headers or other UI elements
          behavior: "smooth",
        });
      }
    }, [ref]);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/number-sequence')
        .then(response => response.json())
        .then(data => setSequence(data));
    }, []);
  
    return (
      <div ref={ref}>
        <CenteredContainer>
          {sequence.map((number, index) => (
            <NumberSquare key={index}>{number}</NumberSquare>
          ))}
          {/* Add your options for the next number here */}
        </CenteredContainer>
        <Input onSubmit={handleNumberSubmit} />
        <InfoButton onClick={toggleInfo}>i</InfoButton>
        <InfoText show={showInfo}>
          This is some help text displayed in the center of the screen
        </InfoText>
      </div>
    );
})

export default Sequence;