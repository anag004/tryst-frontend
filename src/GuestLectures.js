import React, { useEffect } from 'react';
import './App.css';
import NavBar from "./TopNavBar";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import PageSection from './PageSection';
import EventCardRow from './EventCardRow'
import SimpleGrid from './SimpleGrid';
import PageRipple from './PageRipple';
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
});
const useStyles = makeStyles(theme => ({
    anchor:  {
      display: "block",
      position: "relative",
      top: -45,
      visibility: "hidden",
    }
}))
export default function GuestLectures() {
    const [activateRippleEffect, setActivateRippleEffect] = React.useState(false);
    const [positionX, setPositionX] = React.useState(false);
    const [positionY, setPositionY] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(false);
    const [screenHeight, setScreenHeight] = React.useState(false);
    const [transitionColor,setTransitionColor] = React.useState("green");
    const [values,setValues]=React.useState([]);
    const classes = useStyles();

    useEffect(()=>{
        axios.get('/data/sampleData/file1.json')
        .then(res=>{const data=res.data
        //   console.log(data.data)
          setValues(data.data)
        });
      },[])
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
                <NavBar threshold={10} backgroundColor="black"/>
                <div style={{position:"fixed",width:"100%",height:"100%",zIndex:"-1",backgroundColor:"grey"}} />
                <br/><br/>
                <PageSection 
                    heading="Guest Lectures"
                    headingAlignment="center"
                    containerBackgroundColor=""
                    textColor="white"
                    description={""}
                    id={0}
                >
                    {setArr(values.length)}
                    {/*assume that values contain  */}
                    {arr.map(i=><EventCardRow key={i}
                        data-color="white"  rippleTriggerFunction={handleClick}>
                          <SimpleGrid linkTo={"/guestLecture/"} postArray={(values).slice(i[0],(i[0])+i[1])}></SimpleGrid>
                        </EventCardRow>)}
                </PageSection>
            </React.Fragment>
        </ThemeProvider>
    );
}