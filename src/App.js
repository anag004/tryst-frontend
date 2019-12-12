import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText"

function App() {
  return (
      <React.Fragment>
        <NavBar/>
        <DummyText/>
      </React.Fragment>
  );
}

export default App;
