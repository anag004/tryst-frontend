import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import SVGTitle from './SVGTitle';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const oscillate = keyframes`
    from {
        transform: translate(0px, 2px);
    }

    to {
        transform: translate(0px, -2px);
    }
`;

const Oscillate = styled.div`
    animation: ${oscillate} 1s ease-in-out infinite;
    animation-direction: alternate-reverse;
`;

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
    },
    tooltip: {
        marginTop: theme.spacing(10)
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
                <Grow in={true} timeout={4000}> 
                    <SVGTitle/>
                </Grow>
            </Grid>
            <Grid container md={12} justify="center">
                <Fade in={true} timeout={2000}>
                    <Typography variant="h4" className={classes.title}>
                        Decade
                    </Typography>
                </Fade>
            </Grid>
            <Grid container md={12} justify="center">
                <Fade in={true} timeout={5000}>
                    <Oscillate>
                        <div align="center" className={classes.tooltip}>
                            <ArrowDownwardIcon/>
                        </div>
                    </Oscillate>
                </Fade>
            </Grid>
        </Paper>
    );
}