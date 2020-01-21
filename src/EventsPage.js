import React, { useEffect } from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import DummyText from "./DummyText";
import SignUp from "./Form/SignUp"
import SignIn from "./Form/SignIn"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import ImageBanner from './ImageBanner';
import PageSection from './PageSection';
import EventCardRow from './EventCardRow'
import SimpleGrid from './SimpleGrid';
import CategorySpeedDial from './CategorySpeedDial';
import PageRipple from './PageRipple';
import NavDrawer from './NavDrawer';
import axios from 'axios';

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
  linkText: ''
};


const useStyles = makeStyles(theme => ({
    anchor:  {
      display: "block",
      position: "relative",
      top: -45,
      visibility: "hidden",
    }
}))

export default function EventsPage() {
  const [activateRippleEffect, setActivateRippleEffect] = React.useState(false);
  const [positionX, setPositionX] = React.useState(false);
  const [positionY, setPositionY] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(false);
  const [screenHeight, setScreenHeight] = React.useState(false);
  const [transitionColor,setTransitionColor] = React.useState("green");
  const [values,setValues]=React.useState([]);
  const classes = useStyles();

  useEffect(()=>{
    axios.get('data/sampleData/file.json')
    .then(res=>{const data=res.data
      console.log(data)
      setValues(data)
    });
  },[])

  const color1="white",color2="#7BC5AE",color3="#A67F78", color4="white"; 
  const color=[color1,color2,color3,color4];
  const textColor=["black","white","white","black"]

  var arr=[];
  const setArr=(n)=>{
    let x=Math.floor(n/3);
    if(n%3!=0){
      x=x+1;
    }
    arr=[];
    if(n%3!=1 || n==1){
      for (let i = 0; i < x; i++) {
        arr.push([3*i,3]);
      }
    }
    else{
      for (let i = 0; i < x-2; i++) {
        arr.push([3*i,3]);
      }
      arr.push([n-4,2]);
      arr.push([n-2,2]);
      // console.log(arr);
    }
  }

  var pageSectionNamesWithIds=[{"name":"Home","id":0}];
  
  const pushPageSectionIdAndName=(name,id)=>{
    let o ={"name":name,"id":id};
    pageSectionNamesWithIds=[o].concat(pageSectionNamesWithIds);
  }
  
  const handleClick = (event) => {
    setActivateRippleEffect(true);
    setPositionX(event.clientX); setPositionY(event.clientY);
    setScreenWidth(window.innerWidth); setScreenHeight(window.innerHeight);
    setTransitionColor(event.currentTarget.dataset.color)
  }
  var z;

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
            <div id="home"></div>
            <ImageBanner post={mainFeaturedPost} id="0"/>
            {Object.keys(values).map((pageSectionName,index)=><div>
              <div id={"section"+(index+1)} className={classes.anchor}>
              </div>
              <PageSection 
                heading={pageSectionName}
                headingAlignment="center"
                containerBackgroundColor={color[(index)]}
                textColor={textColor[(index)]}
                description={""}
                id={index+1}
              >
                {pushPageSectionIdAndName(pageSectionName,index+1)}

                {setArr((values[pageSectionName]).length)}
                {arr.map(i=><EventCardRow key={i}
                  data-color={color1}  rippleTriggerFunction={handleClick}>
                    <SimpleGrid linkTo={"/event/"} postArray={(values[pageSectionName]).slice(i[0],(i[0])+i[1])}></SimpleGrid>
                  </EventCardRow>)}
              </PageSection>
            </div>)}

              {/* <PageSection 
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
            <div id="section2" className={classes.anchor}>
            </div>
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
            
            <div id="section3" className={classes.anchor}>
            </div>
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
           
            <div id="section4" className={classes.anchor}>
            </div>
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
              </PageSection> */}
            
            <div style={{position:"fixed", bottom:40,right:40}}>
              <CategorySpeedDial actions={pageSectionNamesWithIds}/>
            </div>
          </React.Fragment>
      </ThemeProvider>
  );
}


