import React, { Fragment } from 'react';
import './App.css';
import EventsPage from './EventsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EventDetail from './EventDetail';
import HomePage from './HomePage';
import SignIn from './Form/SignIn';
import SignUp from './Form/SignUp';


function App() {
  return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/event/1">
              <EventDetail heading="Super Event" containerBackgroundColor="white" textColor="black"/>
            </Route>
            <Route path="/event/2">
              <EventDetail heading="Super Event" containerBackgroundColor="#7BC5AE" textColor="white"/>
            </Route>
            <Route path="/event/3">
              <EventDetail heading="Super Event" containerBackgroundColor="#A67F78" textColor="white"/>
            </Route>
            <Route path="/events">
              <EventsPage/>
            </Route>
            <Route path="/event/4">
              <EventDetail heading="Super Event" containerBackgroundColor="white" textColor="black"/>
            </Route>
            <Route path="/" exact>
              <EventsPage/>
            </Route>
            
            <Route path="/login">
              <SignIn/>
            </Route>
            <Route path="/signUp">
              <SignUp/>
            </Route>
          </Switch>
        </Router>
      </Fragment>
  );
}

export default App;

