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
              <EventDetail heading="Super Event"/>
            </Route>
            <Route path="/events">
              <EventsPage/>
            </Route>
            <Route path="/">
              <EventsPage/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;

