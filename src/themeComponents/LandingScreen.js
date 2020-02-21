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
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -2,
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
      zIndex: -1,
      minHeight: "100%"
    },
    presents: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(15),
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        margin: theme.spacing(2)
    },
    tooltip: {
        marginTop: theme.spacing(10)
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
                
                <Grid container md={12} style={{position:"relative",height:"150px"}} justify="center">
                        <Fade in={true} timeout={4000}>
                            <img src={logo} style={{height: "150px"}}></img>
                        </Fade>
                </Grid>
                
                <Grid container md={12} justify="center">
                    <Fade in={true} timeout={2000}>
                        <Typography variant="h4" className={this.props.classes.title}>
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
                        <Typography variant="h6" className={this.props.classes.title}>
                            Sponsored by
                        </Typography>
                    </Fade>
                </Grid>
                <Grid container md={12} style={{position:"relative",height:"100px"}} justify="center">
                        <Fade in={true} timeout={4000}>
                            <img src={SponsorLogo} style={{height: "100px"}}></img>
                        </Fade>
                </Grid>
                <Grid container md={12} justify="center" style={{marginTop: "-5%"}}>
                    <Fade in={true} timeout={5000}>
                        <Oscillate>
                            <div align="center" className={this.props.classes.tooltip}>
                                <ArrowDownwardIcon/>
                            </div>
                        </Oscillate>
                    </Fade>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(LandingScreen);