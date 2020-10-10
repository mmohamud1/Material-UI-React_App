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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #66efcd, #ef66cd)',
    border: 0,
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 30px',
    marginBottom: '20px'
  }
})

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Btn</Button>
}


const CheckboxExample = () => {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)

  return (
    <div>
      <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} inputProps={{ 'aria-label' : 'primary checkbox' }} />} label="Checkbox 1" /> 
      <FormControlLabel control={<Checkbox checked2={checked2} onChange={(e) => setChecked2(e.target.checked2)} inputProps={{ 'aria-label' : 'secondary checkbox' }} />} label="Checkbox 2" />  
    </div>
  )
}

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <div className="textboxes">
          <TextField label="Enter Name" type="name" variant="outlined" color="secondary" style={{ marginRight: "40px"}} />
          <TextField label="Enter Email" type="email" variant="outlined" color="primary"  />
        </div>
        <CheckboxExample />
      <ButtonGroup style={{ paddingBottom : "40px"}} >
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
