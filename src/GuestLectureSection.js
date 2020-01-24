import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, useMediaQuery } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
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
        color:"white",
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
    const {left_side,backgroundColor}=props;
    const classes=useStyles();
    return(
        <ThemeProvider theme={theme}>

            <Fragment>
                {left_side?
                    <Paper className={classes.paper}>
                        <Grid container spacing={4} direction={largeScreen?"row":"column"} style={{marginTop:10}}>
                            <Grid item sm={12} style={{marginLeft:30}}>
                                <Typography variant="h5" align="left" color="inherit" >Lecturer's Name</Typography>
                            </Grid>
                            <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box}>
                            <Typography style={{fontSize:"18px"}}>We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.</Typography>
                            </Grid>
                            <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box} >
                                <img className={classes.img} border="2px" src="https://source.unsplash.com/random"/>
                            </Grid>
                        </Grid>
                    </Paper>
                    :
                    // <Paper>
                    // <Paper className={classes.paper}>
                        <Grid container direction={largeScreen?"row":"column"} spacing={4} style={{marginTop:10}} className={classes.container}>
                            <Grid item sm={12} style={{marginRight:30}}>
                                <Typography variant="h5" align="right" color="inherit" >Lecturer's Name</Typography>
                            </Grid>
                            <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box} >
                                <img  className={classes.img} border="2px" src="https://source.unsplash.com/random"/>
                            </Grid>
                            <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box}>
                            <Typography style={{fontSize:"18px"}}>We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.</Typography>
                            </Grid>
                        </Grid>
                    // </Paper>
                }
            </Fragment>
        </ThemeProvider>
    )
} 