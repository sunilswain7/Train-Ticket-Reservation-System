import React, { useState } from 'react';
import './login.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "Mohith" && password === "123456") {
      alert("Login successful");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <header>
        <div className="header1">
          <nav>
            <ul>
              <li><a href="welcome.html">Home</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="terms.html">Terms</a></li>
              <li><a href="help.html">Help</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li style={{ marginLeft: '700px' }}><b>RailConnect</b></li>
            </ul>
          </nav>
        </div>
      </header>
      <h2 style={{ textAlign: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Rail Connect</h2>
      <h2 style={{ textAlign: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="input" 
          type="text" 
          name="uname" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          size="30" 
          style={{ backgroundColor: 'bisque' }} 
          placeholder="User Name" 
        /><br /><br />
        <input 
          className="input" 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          size="30" 
          style={{ backgroundColor: 'bisque' }} 
          placeholder="Password" 
        />
        <div className="error-message">{errorMessage}</div>
        <button type="submit" className="submit_button">Submit</button>
        <button type="button" className="cancel_button">Cancel</button>
      </form>
    </div>
  );
}

export default App;

