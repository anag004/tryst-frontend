import React from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import SignUp from "./Form/SignUp"
import SignIn from "./Form/SignIn"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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
            <SignIn/>
            <SignUp/>
          </React.Fragment>
        </ThemeProvider>
  );
}

export default App;
