import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [n, setN] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const handleNChange = (e) => {
    const count = Number(e.target.value);
    setN(count);
    setNumbers(Array(count).fill(""));
  };

  const handleInputChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  const sum = numbers.reduce(
    (total, num) => total + (Number(num) || 0),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Sum Calculator</h2>

      <input
        type="number"
        placeholder="Enter number of inputs"
        value={n}
        onChange={handleNChange}
      />

      <br />
      <br />

      {numbers.map((num, index) => (
        <div key={index}>
          <input
            type="number"
            placeholder={`Enter number ${index + 1}`}
            value={num}
            onChange={(e) =>
              handleInputChange(index, e.target.value)
            }
          />
          <br />
          <br />
        </div>
      ))}

      <h3>Sum = {sum}</h3>
    </div>
  );
}
export default App;