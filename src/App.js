import React from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ImageBanner from './ImageBanner';
import PageSection from './PageSection';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#4CAF50' }
  }
});

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
            <NavBar threshold={10}/>
            <ImageBanner post={mainFeaturedPost} />
            <PageSection 
              heading="Event Section 1"
              headingAlignment="center"
              containerBackgroundColor="white"
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
            />
          </React.Fragment>
        </ThemeProvider>
  );
}

export default App;
