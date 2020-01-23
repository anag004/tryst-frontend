import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

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
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:window.screen.width>500?((window.screen.height)*0.4):"auto",
      marginLeft:20,
      marginRight:20
    },
    container:{
        
    },
    img:{
        width:"100%",
        height:"75%",
    }
}))
export default function GuestLectureSection(props){
    const {left_side,backgroundColor}=props;
    const classes=useStyles();
    return(
        <ThemeProvider theme={theme}>

            <Fragment>
                {left_side?
                    <Grid container direction="row" spacing={4} className={classes.container}>
                        <Grid item sm={12} style={{marginRight:30}}>
                            <Typography variant="h5" align="left" color="inherit" >Lecturer's Name</Typography>
                        </Grid>
                        <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box}>
                        <Typography variant="h6">We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.</Typography>
                        </Grid>
                        <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box} >
                            <img className={classes.img} border="2px" src="https://source.unsplash.com/random"/>
                        </Grid>
                    </Grid>
                    :
                    <Grid container direction="row" spacing={4} className={classes.container}>
                        <Grid item sm={12} style={{marginRight:30}}>
                            <Typography variant="h5" align="right" color="inherit" >Lecturer's Name</Typography>
                        </Grid>
                        <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box} >
                            <img  className={classes.img} border="2px" src="https://source.unsplash.com/random"/>
                        </Grid>
                        <Grid item xs={window.screen.width>500?true:"auto"} className={classes.box}>
                        <Typography variant="h6">We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.</Typography>
                        </Grid>
                    </Grid>
                }
            </Fragment>
        </ThemeProvider>
    )
} 