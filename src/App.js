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
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Change styles of components
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border: 0,
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 30px',
    marginBottom: '20px'
  }
})

// Change Material UI theme (change defualt material ui settings e.g color and typography)
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '48px',
    },
    subtitle1: {
      marginBottom: '20px'
    }
  },
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: orange[400],
    }
  }
})

// Apply style created above to button
const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Btn</Button>
}

// Function to create checkbox
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
    <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6" >
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar> 
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome To Material UI
            </Typography>
            <Typography variant="subtitle1" >
              Learn How To Use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Paper style={{ height: '75px', width : '50px', marginBottom: '20px'}}/>
              </Grid>
              <Grid item>
                <Paper style={{ height: '75px', width : '50px', marginBottom: '20px'}}/>
              </Grid><Grid item>
                <Paper style={{ height: '75px', width : '50px', marginBottom: '20px'}}/>
              </Grid>
            </Grid>
            <div className="textboxes">
              <TextField label="Enter Name" type="name" variant="outlined" color="secondary" style={{ marginRight: "40px"}} />
              <TextField label="Enter Email" type="email" variant="outlined" color="primary"  />
            </div>
            <CheckboxExample />
          <ButtonGroup style={{ marginBottom : "10px" }} >
            <Button startIcon={<SaveIcon/>}  variant="contained" color="primary">
              Save
            </Button>
            <Button startIcon={<DeleteIcon/>}  variant="contained" color="secondary">
              Delete
            </Button>
          </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>

    </ThemeProvider>
  );
}

export default App;
 