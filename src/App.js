import React from 'react';
import './App.css';
import EventsPage from './EventsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EventDetail from './EventDetail';


function App() {
  return (
        <Router>
          <Switch>
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
            <Route path="/">
              <EventsPage/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;

