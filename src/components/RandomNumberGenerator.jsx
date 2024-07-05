import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Altura total da viewport */
  background-color: ${(props) => props.backgroundColor};
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 200px;
  height: 40px;
  font-size: 18px;
  text-align: center;
`;

const Button = styled.button`
  background: #FF00FF;
  color: #FFFFFF;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #F92672;
  }
`;

const ResultPara = styled.p`
  margin: 30px auto;
  color: #ffffff;
  text-align: center;
  font-size: 24px;
`;

const RandomNumberGenerator = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result, setResult] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#BD00FF');

  const generateNumber = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);

    if (isNaN(minVal) || isNaN(maxVal)) {
      setResult('Please enter valid numbers.');
      return;
    }

    if (minVal >= maxVal) {
      setResult('Minimum must be less than maximum.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setResult(`The result is: ${randomNumber}`);

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBackgroundColor(`rgb(${r},${g},${b})`);
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <h1>Generate a Random Number</h1>
      <div className="input-container">
        <Input
          type="number"
          className="input-min"
          placeholder="Minimum"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <br />
        <Input
          type="number"
          className="input-max"
          placeholder="Maximum"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <br />
        <Button onClick={generateNumber}>Generate Number</Button>
      </div>
      <ResultPara id="resultPara">{result}</ResultPara>
    </Container>
  );
};

export default RandomNumberGenerator;
