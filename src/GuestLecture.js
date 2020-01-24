import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import GuestLectureSection from './GuestLectureSection'
import NavBar from './TopNavBar';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });
  const useStyles = makeStyles(th => ({
    background:  {
      marginTop:80,
      marginRight:20,
    //   
    },
    container:{
        position:"relative",
        // top:0,
        // backgroundColor:"grey"
    },
    img:{
        width:"100%",
        height:"50%",
    },
    topContainer:{
        position:"absolute",
        top:0,
        backgroundColor:"black"
    }
}))
export default function GuestLecture(props){
    // const {left_side,backgroundColor}=props;
    const classes=useStyles();
    return(
        <ThemeProvider theme={theme}>
            <div className={classes.topContainer}>
            <div className={classes.container}>
                <NavBar threshold={10} backgroundColor="black"/>
                <div className={classes.background}>
                    <GuestLectureSection left_side={true} backgroundColor="black"/>
                    <GuestLectureSection left_side={false} backgroundColor="black"/>
                    <GuestLectureSection left_side={true} backgroundColor="black"/>
                </div>
            </div>
            </div>
        </ThemeProvider>
    )
} 