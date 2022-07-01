import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Fernando");
  const [Status, setStatus] = useState("Open");
  return (
   <>
    <div>
      <h1>{year}</h1>
      <button onClick={() => setYear(year + 1)}>Next Year</button>
    </div>
    <div>
      <h1>Manager on Duty: {manager}</h1>
      <button onClick={() => setManager("Mechael")}>New Manager</button>
    </div>
    <div>
      <h1>Status: {Status}</h1> 
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("BAck in five!")}>BRB</button>
    </div>
   </>
  );
}

export default App;
