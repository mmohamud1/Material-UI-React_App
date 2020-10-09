import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';


const CheckboxExample = () => {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)

  return (
    <div>
      <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} inputProps={{ 'aria-label' : 'secondary checkbox' }} />} label="Checkbox 1" /> 
      <FormControlLabel control={<Checkbox checked2={checked2} onChange={(e) => setChecked2(e.target.checked2)} inputProps={{ 'aria-label' : 'secondary checkbox' }} />} label="Checkbox 2" />  
    </div>
  )
}

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <TextField label="Enter Name" type="name" variant="outlined" color="secondary" style={{ paddingBottom : "40px"}}/>
        <CheckboxExample />
      <ButtonGroup >
        <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="primary">
          Save
        </Button>
        <Button startIcon={<DeleteIcon/>} size="large" variant="contained" color="secondary">
          Delete
        </Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
