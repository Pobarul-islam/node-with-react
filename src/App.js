import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className="App">
     <h3>My data count: {users.length}</h3>
    </div>
  );
}

export default App;
