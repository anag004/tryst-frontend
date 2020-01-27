import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, useMediaQuery } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
// import './font.css'
const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    },
  });
const useStyles = makeStyles(th => ({
    
    box:  {
      display: "block",
      position: "relative",
    //   width:(window.screen.width)*0.48,
      height:window.screen.width>500?((window.screen.height)*0.4):"auto",
      marginLeft:20,
      marginRight:20,
      
    },
    container:{
        // color:"white",
    },
    paper:{
        margin:10,
        marginRight:0,
        paddingBottom:0,
        overflowY:"hidden",
        overflowX:"hidden",
        backgroundColor:"grey",
        // maxHeight:window.screen.height>500?(window.screen.height)*0.5:"auto",
    },  
    img:{
        width:"100%",
        height:(window.screen.height)*0.3,
    }
}))
export default function GuestLectureSection(props){

    const largeScreen = useMediaQuery('(min-width:850px)');
    const {lecturer,left_side}=props;
    const classes=useStyles();
    // const left_side=false;
    return(
        <ThemeProvider theme={theme}>

            <Fragment>
                <Paper className={classes.paper}>
                    {console.log(lecturer)}
                    {!largeScreen?
                        <Grid container spacing={4} alignItems="center" direction="column" style={{marginTop:10}}>
                            <Grid item xs={12} style={{marginRight:30}}>
                                <Typography variant="h3" align="center" style={{fontFamily:['Montserrat','sans-serif'].join(',')}}>{lecturer[1]}</Typography>
                            </Grid>
                            <Grid xs={5}/>
                            <Grid item xs={window.screen.width<500?12:6} className={classes.box} >
                                <img className={classes.img} border="2px" src={lecturer[0]}/>
                            </Grid>
                            <Grid item xs={12} className={classes.box}>
                                <Typography variant="h6" >{lecturer[2]} </Typography>
                                {/* style={{fontSize:"18px",}} */}
                            </Grid>
                        </Grid>
                    :
                        <Fade left={left_side} right={!left_side}>
                            <Grid container spacing={4} alignItems="stretch" direction="row" style={{marginTop:10}}>
                                {left_side?
                                    <>
                                        <Grid item xs={3} style={{marginRight:30}}>
                                            <Typography variant="h3" align="right" style={{fontFamily:['Montserrat','sans-serif'].join(',')}}>{lecturer[1]}</Typography>
                                        </Grid>
                                        <Grid xs={5}/>
                                        <Grid item xs={largeScreen?4:[window.screen.width<500?12:6]} className={classes.box} >
                                            <img className={classes.img} border="2px" src={lecturer[0]}/>
                                        </Grid>
                                        <Grid item xs={largeScreen?7:12} className={classes.box}>
                                            <Typography variant="h6" >{lecturer[2]} </Typography>
                                            {/* style={{fontSize:"18px",}} */}
                                        </Grid>
                                    </>
                                :
                                    <>
                                        <Grid xs={9}/>
                                        <Grid item xs={3}>
                                            <Typography variant="h3" align="left" style={{fontFamily:['Montserrat','sans-serif'].join(',')}}>{lecturer[1]}</Typography>
                                        </Grid>
                                        <Grid item xs={7} className={classes.box}>
                                            <Typography variant="h6" >{lecturer[2]} </Typography>
                                            {/* style={{fontSize:"18px",}} */}
                                        </Grid>
                                        <Grid item xs={4} className={classes.box} >
                                            <img className={classes.img} border="2px" src={lecturer[0]}/>
                                        </Grid>
                                    </>
                                }
                            </Grid>
                        </Fade>
                    }
                </Paper>   
            </Fragment>
        </ThemeProvider>
    )
} 