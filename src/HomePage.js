import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import NavBar from './TopNavBar';
import Backdrop from '@material-ui/core/Backdrop';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import Countdown from 'react-countdown-now';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import * as THREE from 'three';
import WAVES from './vanta/vanta.waves.min.js';
import Link from '@material-ui/core/Link';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });
  

const styles = theme => ({
    background: {
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        webkitBackfaceVisibility: "hidden"
    },

    root: {
        color: "white",
        padding: theme.spacing(10),
        paddingTop: theme.spacing(15),
        maxWidth: 850
    },

    typography: {
        fontWeight: 'bolder'
    }
});

class HomePage extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
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

    render () {
        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <div className={classes.background} ref={this.vantaRef}>
                </div>
                <NavBar threshold={10}/>
                    <Container classes={classes}>
                        <Typography variant="h1" align="center">
                            TRYST '20
                        </Typography>
                        <Typography variant="h4" align="center">
                            <Countdown date="2020-03-06T00:00:00"></Countdown>
                        </Typography>
                        <br></br>
                        <Typography variant="body1" className={classes.typography}>
                            {this.props.description}
                        </Typography>
                        <Container align="center" style={{paddingTop: theme.spacing(5)}}>
                            <Typography variant="h5">Get in touch!</Typography>
                            <IconButton style={{color: "white"}} >
                            <Link 
                                href="https://www.instagram.com/trystiitd/"
                                variant="button"
                                underline="none"
                                color="inherit"
                            >
                                <InstagramIcon fontSize="large"></InstagramIcon>
                            </Link>
                            </IconButton>
                            <Link 
                                href="https://www.facebook.com/IITD.Tryst/"
                                variant="button"
                                underline="none"
                                color="inherit"
                            >
                                <IconButton style={{color: "white"}} >
                                    <FacebookIcon fontSize="large"></FacebookIcon>
                                </IconButton>
                            </Link>
                        </Container>
                    </Container>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles, {withTheme: true})(HomePage);