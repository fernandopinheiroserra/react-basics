import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';


function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      <input 
      type={"checkbox"}
      value={checked} 
      onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default Checkbox;
