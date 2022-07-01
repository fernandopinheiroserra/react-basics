import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val])

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2])

  return (
    <>
      <label>
        Favorite Phrase:
        <input 
          value={val} 
          onChange={e => setVal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input 
          value={val2} 
          onChange={e => setVal2(e.target.value)}
        />
      </label>
    </>
  );
}

export default App;
