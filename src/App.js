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
import AboutUs from './AboutUs'
import Lodging from './Additional Pages/Lodging'
import Sponsors from './Additional Pages/Sponsors';
import Team from './Additional Pages/Team';

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
              <HomePage/>
            </Route>
            
            <Route path="/login">
              <SignIn/>
            </Route>
            <Route path="/signUp">
              <SignUp/>
            </Route>
            <Route path="/aboutUs">
              <AboutUs/>
            </Route>
            <Route path="/lodging">
              <Lodging/>
            </Route>
            <Route path="/team">
              <Team/>
            </Route>
            <Route path="/sponsors">
              <Sponsors/>
            </Route>
          </Switch>
        </Router>
      </Fragment>
  );
}

export default App;

