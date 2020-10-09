import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
      <Button size="large" style={{ fontSize: 30 }} variant="contained" color="secondary">
        Hello World
      </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
