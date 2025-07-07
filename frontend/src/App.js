import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  fetch('https://sy2wqvdvwe.us-east-1.awsapprunner.com/users')
    .then((res) => {
      console.log('Response status:', res.status);
      return res.json();
    })
    .then((data) => {
      console.log('Fetched users:', data);
      setUsers(data);
    })
    .catch((err) => {
      console.error('Fetch error:', err);
    });
}, []);

  return (
    <div className="App">
      <h1>User List from AWS RDS</h1>
      <ul>
        {users.length === 0 ? (
          <li>No users found</li>
        ) : (
          users.map((u) => (
            <li key={u.id}>
              {u.name} - {u.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
