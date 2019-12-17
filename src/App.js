import React from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import SignUp from "./Form/SignUp"
import SignIn from "./Form/SignIn"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ImageBanner from './ImageBanner';
import PageSection from './PageSection';
import EventCardRow from './EventCardRow'
import SimpleGrid from './SimpleGrid';
import CategorySpeedDial from './CategorySpeedDial'

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

const pageSectionNamesWithIds=[
  {
    name:"Section4",
    id:"4"
  },
  {
    name:"Section3",
    id:"3"
  },
  {
    name:"Section2",
    id:"2"
  },
  {
    name:"Section1",
    id:"1"
  },
  {
    name: "Home",
    id: "0"
  } 
]
function App() {
  return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar threshold={10}/>
            <ImageBanner post={mainFeaturedPost} id="0"/>
            <PageSection 
              heading="Event Section 1"
              headingAlignment="center"
              containerBackgroundColor="white"
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="1"
            >
                <EventCardRow>
                    <SimpleGrid n="3"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="2"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="3"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 2"
              headingAlignment="center"
              containerBackgroundColor="#7BC5AE"
              textColor="white"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="2"
            >
                <EventCardRow>
                    <SimpleGrid n="3" backgroundColor="#D1EDE1"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="2" backgroundColor="#D1EDE1"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="3" backgroundColor="#D1EDE1"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 3"
              headingAlignment="center"
              containerBackgroundColor="#A67F78"
              textColor="white"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="3"
            >
                <EventCardRow>
                    <SimpleGrid n="3" backgroundColor="#E1DCD9"/>
                </EventCardRow>
                <EventCardRow>
                  <SimpleGrid n="3" backgroundColor="#E1DCD9"/>
                </EventCardRow>
                <EventCardRow>
                  <SimpleGrid n="3" backgroundColor="#E1DCD9"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 4"
              headingAlignment="center"
              containerBackgroundColor="white"
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="4"
            >
                <EventCardRow>
                    <SimpleGrid n="3"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="2"/>
                </EventCardRow>
                <EventCardRow>
                    <SimpleGrid n="3"/>
                </EventCardRow>
            </PageSection>
            <div style={{position:"fixed", bottom:40,right:40}}>
              <CategorySpeedDial actions={pageSectionNamesWithIds}/>
            </div>
          </React.Fragment>
      </ThemeProvider>
  );
}

export default App;
