import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import SVGTitle from './SVGTitle';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import * as THREE from 'three';
import SponsorLogo from '../images/SponsorLogo.png';
import WAVES from '../vanta/vanta.waves.min.js';
import logo from '../images/logo-white.png';

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

const growin = keyframes`
    from {
        height: 0px;
        opacity: 0;
    }

    25% {
        opacity: 0;
        height: 30%;
    }

    100% {
        opacity: 1;
         height: 30%;
    }
`

const GrowIn = styled.div`
    animation: ${growin} 10s ease-in-out;
    animation-fill-mode: forwards;
`

const styles = theme => ({
    imageBanner: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: 1,
      minHeight: "100%"
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
      zIndex: -3,
      minHeight: "100%"
    },
    presents: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(8),
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        marginTop: theme.spacing(2)
    },
    tooltip: {
        marginTop: theme.spacing(10)
    },
    notif: {
        display: "inline-block",
        width: "70%",
        left: "10%",
        padding: theme.spacing(3),
        position: "absolute",
        zIndex: 4,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        textAlign:"center"
    }
});

class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.vantaRef = React.createRef();
    }

    componentDidMount() {
        this.vantaEffect = WAVES({
            THREE: THREE,
            el: this.vantaRef.current,
            color: 0x111111,
            shininess: 56.00,
            waveHeight: 29.00,
            waveSpeed: 0.90,
            zoom: 0.65
        })
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return (
            <Paper className={this.props.classes.imageBanner} {...this.props.others}>
                {/* Increase the priority of the hero background image */}
                <div className={this.props.classes.overlay} ref={this.vantaRef}/>
                <Grid container justify="center" alignItems="center">
                    <Fade in={true} timeout={1000}>
                        <Typography style={{fontFamily:['Maven Pro','sans-serif'].join(','),fontSize:"35px"}} className={this.props.classes.presents}>
                            TRYST 2020  <br></br>
                        </Typography>
                    </Fade>
                </Grid>

            
                <Paper className={this.props.classes.notif}>
                    <Typography variant="h4">Important notice</Typography>
                    <Typography variant="h6">
                        TRYST 2020 will not be happening from 6th to 8th March.
                    </Typography>

                    <Typography variant="body1">
This decision has been taken in light of the present circumstances in India (increasing number of cases of people getting affected by coronavirus) and keeping in mind the health concerns which have been expressed by multiple registered participants, team members, Dean and Health Experts. Since the Government has ordered to avoid mass gatherings, we would be following their guidelines to avoid the risk of Coronavirus spreading.

We appreciate your interest and we promise to host it again as soon as possible. Stay tuned for further updates. <br></br>
    <b>#We're Not Done Yet #Tryst2020 #Staysafe</b>

</Typography>
                </Paper>
  
                
                <Grid container md={12} style={{position:"relative",height:"150px"}} justify="center">
                        <Fade in={true} timeout={4000}>
                            <img src={logo} style={{height: "150px"}}></img>
                        </Fade>
                </Grid>
                
                <Grid container md={12} justify="center">
                    <Fade in={true} timeout={2000}>
                        <Typography variant="h5">
                            REMINISCENSE
                        </Typography>
                    </Fade>
                </Grid>
                {/* <Grid container md={12} justify="center">
                    <Grow in={true} timeout={4000}> 
                        <SVGTitle/>
                    </Grow>
                </Grid> */}
                <Grid container md={12} justify="center">
                    <Fade in={true} timeout={2000}>
                        <Typography variant="h4" className={this.props.classes.title}>
                            A Denouement Of The Decade
                        </Typography>
                    </Fade>
                </Grid>
                <Grid container md={12} justify="center">
                    <Fade in={true} timeout={2000}>
                        <Typography variant="h6">
                            (6-8 March)
                        </Typography>
                    </Fade>
                </Grid>
                <Grid container md={12} justify="center">
                    <Fade in={true} timeout={2000}>
                        <Typography variant="h6" className={this.props.classes.title}>
                            Sponsored by
                        </Typography>
                    </Fade>
                </Grid>
                <center>
                    <a target="_blank" href="https://graphitegtc.com/index" style={{pointerEvents: "auto !important", cursor: "pointer !important"}}>
                        <Fade in={true} timeout={4000}>
                            <img src={SponsorLogo} style={{margin: "auto", width:"80%", height: "auto", maxWidth: "600px"}}></img>
                        </Fade>
                    </a>
                </center>
                {/* <Grid container md={12} justify="center" style={{marginTop: "-5%"}}>
                    <Fade in={true} timeout={5000}>
                        <Oscillate>
                            <div align="center" className={this.props.classes.tooltip}>
                                <ArrowDownwardIcon/>
                            </div>
                        </Oscillate>
                    </Fade>
                </Grid> */}
            </Paper>
        );
    }
}

export default withStyles(styles)(LandingScreen);