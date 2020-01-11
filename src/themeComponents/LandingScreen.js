import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import SVGTitle from './SVGTitle';

const useStyles = makeStyles(theme => ({
    imageBanner: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -2,
      height: '600px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: `linear-gradient(
        rgba(0, 0, 0, 0.9),
        rgba(0,0, 0, 0.3)
      )`,
      zIndex: -1
    },
    presents: {
        margin: theme.spacing(5),
        marginTop: theme.spacing(20),
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        margin: theme.spacing(2)
    }
}));

export default function LandingScreen(props) {
    const {...others} = props;
    const classes = useStyles();

    return (
        <Paper className={classes.imageBanner} {...others}>
            {/* Increase the priority of the hero background image */}
            <div className={classes.overlay} />
            <Grid container justify="center" alignItems="center">
                <Fade in={true} timeout={1000}>
                    <Typography variant="h5" className={classes.presents}>
                        Tryst presents
                    </Typography>
                </Fade>
            </Grid>
            <Grid container md={12} justify="center">
                <Fade in={true} timeout={2000}>
                    <Typography variant="h4" className={classes.title}>
                        The
                    </Typography>
                </Fade>
            </Grid>
            <Grid container md={12} justify="center">
                <SVGTitle/>
            </Grid>
            <Grid container md={12} justify="center">
                <Fade in={true} timeout={2000}>
                    <Typography variant="h4" className={classes.title}>
                        Decade
                    </Typography>
                </Fade>
            </Grid>
        </Paper>
    );
}