import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

const App = () =>  {
  return (
    <div className="App">
      <Button>
        Hello World
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
