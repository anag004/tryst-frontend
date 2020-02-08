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
import ImageEventsPage from './images/eventsPageBackground.jpeg';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#4CAF50' },
    success: { main: '#4CAF50' },
    info: { main: '#4CAF50' },
    warning: { main: '#4CAF50' },
    // success: { main: '#4CAF50' }
  }
});

const mainFeaturedPost = {
  title: 'Events @Tryst',
  description:
    "Tryst 2020 is all about a journey through the last decade. We bring to you Reminiscence : Denouement of the decade. And to celebrate the same we have multiple events lined up for you. From every aspect of science and engineering, you can definitely find a way to two to display your skills. With exciting awards and mind blowing prize money, be sure to have an experience like never before!",
  image: `url(${ImageEventsPage})`,
  imgText: 'main image description',
  linkText: ''
};


const useStyles = makeStyles(theme => ({
    anchor:  {
      display: "block",
      position: "relative",
      top: -45,
      visibility: "hidden",
    },
    alert: {
      position: "fixed",
      zIndex: "10",
      margin: theme.spacing(5),
      top: "80%",
    }
}))

export default function EventsPage(props) {
  const [activateRippleEffect, setActivateRippleEffect] = React.useState(false);
  const [positionX, setPositionX] = React.useState(false);
  const [positionY, setPositionY] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(false);
  const [screenHeight, setScreenHeight] = React.useState(false);
  const [transitionColor,setTransitionColor] = React.useState("green");
  const [values,setValues]=React.useState([]);
  const classes = useStyles();
  const {message} = {props};
  const [open, setOpen] = React.useState(true);

  useEffect(()=>{
    axios.get('https://backend2020.tryst-iitd.org/api/event/getCategories')
    .then(res=>{const data=res.data
      console.log(data.data)
      setValues(data.data)
    });
  },[])

  const color1="#29426c",color2="#24395d",color3="#1e314f", color4="#192841",color5="#141f33"; 
  const color=[color1,color2,color3,color4,color5,color5,color5,color5];
  const textColor=["black","white","white","black","black","white","white","black"]

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

  const handleClose = () => {
    setOpen(!open);
  }

  let alert;

  if (props.match.params.message == "success") {
    alert = <Collapse in={open}>
      <Alert className={classes.alert} onClose={handleClose}>Successful registration</Alert>
    </Collapse>
  } else if (props.match.params.message == "failed") {
    alert = <Collapse in={open}>
      <Alert severity="error" className={classes.alert} onClose={handleClose}>Failed registration</Alert>
    </Collapse>
  } else {
    alert = <></>
  }

  return (
        <ThemeProvider theme={theme}>
          {alert}
          <React.Fragment>
            <PageRipple activated={activateRippleEffect} 
                        positionX={positionX} 
                        positionY={positionY} 
                        screenHeight={screenHeight} 
                        screenWidth={screenWidth}
                        backgroundColor={transitionColor}
            />
            <NavBar threshold={10} backgroundColor="#192841"/>
            <div id="home"></div>
            <ImageBanner post={mainFeaturedPost} id="0"/>
            {Object.keys(values).map((pageSectionName,index)=>[((((pageSectionName).toUpperCase())=="GUEST LECTURES")||(((pageSectionName).toUpperCase())=="EXHIBITIONS"))?null:<div>
              <div id={"section"+(index+1)} className={classes.anchor}>
              </div>
              <PageSection 
                heading={(pageSectionName).toUpperCase()}
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
                </div>])}

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


