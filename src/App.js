import React from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import SignUp from "./Form/SignUp"
import SignIn from "./Form/SignIn"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ImageBanner from './ImageBanner';
import PageSection from './PageSection';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#4CAF50' }
  }
});
const events=[
  { image:"https://source.unsplash.com/random", Title:"Robo Fights"},
  { image:"https://source.unsplash.com/random", Title:"2"},
  { image:"https://source.unsplash.com/random", Title:"3"},
  { image:"https://source.unsplash.com/random", Title:"4"},
  { image:"https://source.unsplash.com/random", Title:"5"},
  { image:"https://source.unsplash.com/random", Title:"6"},
  { image:"https://source.unsplash.com/random", Title:"7"},
]
const mainFeaturedPost = {
  title: 'Events @Tryst',
  description:
    "We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue Reading...'
};


function App() {
  return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar/>
            <ImageBanner post={mainFeaturedPost} />
            <PageSection 
              heading="Event Section 1"
              headingAlignment="center"
              containerBackgroundColor="green"
              subheading="Here lies subheading"
              subheadingAlignment="right"
              events={events}
              textColor="white"
            />
            <PageSection 
              heading="Event Section 1"
              headingAlignment="center"
              containerBackgroundColor="green"
              subheading="Here is your subheading"
              subheadingAlignment="right"
              events={events}
              textColor="white"
            />
          </React.Fragment>
        </ThemeProvider>
  );
}

export default App;
