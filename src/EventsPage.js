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
import CategorySpeedDial from './CategorySpeedDial';
import PageRipple from './PageRipple';
import NavDrawer from './NavDrawer';

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

export default function EventsPage() {
  const [activateRippleEffect, setActivateRippleEffect] = React.useState(false);
  const [positionX, setPositionX] = React.useState(false);
  const [positionY, setPositionY] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(false);
  const [screenHeight, setScreenHeight] = React.useState(false);
  const [transitionColor,setTransitionColor] = React.useState("green");

  const color1="white",color2="#7BC5AE",color3="#A67F78", color4="white"; 

  const handleClick = (event) => {
    setActivateRippleEffect(true);
    setPositionX(event.clientX); setPositionY(event.clientY);
    setScreenWidth(window.innerWidth); setScreenHeight(window.innerHeight);
    setTransitionColor(event.currentTarget.dataset.color)
  }

  return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <PageRipple activated={activateRippleEffect} 
                        positionX={positionX} 
                        positionY={positionY} 
                        screenHeight={screenHeight} 
                        screenWidth={screenWidth}
                        backgroundColor={transitionColor}
            />
            <NavBar threshold={10}/>
            <ImageBanner post={mainFeaturedPost} id="0"/>
            <PageSection 
              heading="Event Section 1"
              headingAlignment="center"
              containerBackgroundColor={color1}
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="1"
            >
                <EventCardRow data-color={color1}  rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" linkTo="/event/1"/>
                </EventCardRow>
                <EventCardRow data-color={color1} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="2" linkTo="/event/1"/>
                </EventCardRow>
                <EventCardRow data-color={color1} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" linkTo="/event/1"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 2"
              headingAlignment="center"
              containerBackgroundColor={color2}
              textColor="white"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="2"
            >
                <EventCardRow data-color={color2} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" backgroundColor="#D1EDE1" linkTo="/event/2"/>
                </EventCardRow>
                <EventCardRow data-color={color2} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="2" backgroundColor="#D1EDE1" linkTo="/event/2"/>
                </EventCardRow>
                <EventCardRow data-color={color2} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" backgroundColor="#D1EDE1" linkTo="/event/2"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 3"
              headingAlignment="center"
              containerBackgroundColor={color3}
              textColor="white"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="3"
            >
                <EventCardRow data-color={color3} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" backgroundColor="#E1DCD9" linkTo="/event/3"/>
                </EventCardRow>
                <EventCardRow data-color={color3} rippleTriggerFunction={handleClick}>
                  <SimpleGrid n="3" backgroundColor="#E1DCD9" linkTo="/event/3"/>
                </EventCardRow>
                <EventCardRow data-color={color3} rippleTriggerFunction={handleClick}>
                  <SimpleGrid n="3" backgroundColor="#E1DCD9" linkTo="/event/3"/>
                </EventCardRow>
            </PageSection>
            <PageSection 
              heading="Event Section 4"
              headingAlignment="center"
              containerBackgroundColor={color4}
              textColor="black"
              description="This is the first event category at tryst. Lorem ipsum dolor sit amet. "
              id="4"
            >
                <EventCardRow data-color={color4}  rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" linkTo="/event/4"/>
                </EventCardRow>
                <EventCardRow data-color={color4} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="2" linkTo="/event/4"/>
                </EventCardRow>
                <EventCardRow data-color={color4} rippleTriggerFunction={handleClick}>
                    <SimpleGrid n="3" linkTo="/event/4"/>
                </EventCardRow>
            </PageSection>
            <div style={{position:"fixed", bottom:40,right:40}}>
              <CategorySpeedDial actions={pageSectionNamesWithIds}/>
            </div>
          </React.Fragment>
      </ThemeProvider>
  );
}


