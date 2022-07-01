import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function FetchData({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${login}`
    )
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  

  if(data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>      
    );
  }
}

function App() {
  return <FetchData login="fernandopinheiroserra" />
}

export default App;
