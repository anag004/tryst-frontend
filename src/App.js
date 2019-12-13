import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import NavBarButton from "./NavBarButton";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#4CAF50' }
  }
})

function App() {
  return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar/>
            <DummyText/>
          </React.Fragment>
        </ThemeProvider>
  );
}

export default App;
