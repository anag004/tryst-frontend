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
import Lodging from './Additional Pages/Lodging';
import Sponsors from './Additional Pages/Sponsors';
import Team from './Additional Pages/Team';
import ComingSoon from './ComingSoon';

const homeText = "TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights, from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+ events and participation of 40,000 students from all over the nation, team TRYST ensures there is something fun for everyone. Come aboard and have an experience of a lifetime!";
const lodgingText = "Coming Soon! Stay tuned for lodging updates. Contact us if you have any questions.";
const eventsText = "Coming Soon! Amazing events coming soon. Contact us if you have any questions.";
const sponsorsText = "Coming Soon! We have great sponsors this time who make Tryst possible. Stay tuned to know more about them. Contact us if you have any questions.";

class App extends React.Component {
  componentDidMount() {
    
    // const scriptThree = document.createElement("script");
    // scriptThree.async = true;
    // scriptThree.src = "three.min.js";

    // scriptThree.onload = function() {
    //   const scriptVanta = document.createElement("script");
    //   scriptVanta.async = true;
    //   scriptVanta.src = "vanta.waves.min.js";
    //   document.head.appendChild(scriptVanta);
    // }
  
    // document.head.appendChild(scriptThree);  
  }

  render() {  
    return (
        <Fragment>
          <Router>
            <Switch>
              <Route path="/home">
                <HomePage description={homeText}/>
              </Route>
              <Route path="/events">
              <HomePage description={eventsText}/>
              </Route>
              <Route path="/" exact>
                <HomePage description={homeText}/>
              </Route>
              <Route path="/lodging">
                <HomePage description={lodgingText}/>
              </Route>
              <Route path="/team">
                <Team/>
              </Route>
              <Route path="/sponsors">
                <HomePage description={sponsorsText}/>
              </Route>
            </Switch>
          </Router>
        </Fragment>
    );
  }
}

export default App;

