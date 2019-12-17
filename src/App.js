import React from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
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
    name:"Workshops",
    id:"1"
  },
  {
    name:"Competitions",
    id:"2"
  },
  {
    name:"Lectures",
    id:"3"
  },
  {
    name:"More",
    id:"4"
  },
    
    
]
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
              containerBackgroundColor="white"
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="2"
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
              heading="Event Section 3"
              headingAlignment="center"
              containerBackgroundColor="white"
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="3"
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
