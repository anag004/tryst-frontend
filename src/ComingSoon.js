import React, {useEffect, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, IconButton, Link } from '@material-ui/core';
import TopNavBar from './TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import * as THREE from 'three';
import WAVES from './vanta/vanta.waves.min.js';
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});
const TrystDate=new Date(2020, 2, 6);
var today=new Date();
        
const styles =theme =>({
    root: {
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        maxWidth:1000
    },
    background: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1
    },

    container:{
        margin:"auto",
        marginTop:60,
    },
    text:{
        color:"white",
        
    },
    countdownTime :{
        fontSize:40,
        color:"white",
        display:"inline",
        marginRight:10,
        marginLeft:10,
        padding:8,
        borderStyle:"groove",
        borderWidth:"2px",
        borderRadius:"10px",
    },
    countdownText :{
        marginTop:20,
        fontSize:28,
        color:"white",
        display:"inline",
        padding:8,
    },
    
    
});

class ComingSoon extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
        this.state={
            time:TrystDate.getTime()- today.getTime(),
            // show:true
        }
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
        today=new Date();
        this.setState({
            time:TrystDate.getTime()- today.getTime(),
            // show:this.state.show
        })
        this.interval=setInterval(()=>{
            this.setState({
                time:this.state.time-1000,
                // show:!this.state.show 
            })
        },1000);
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
        clearInterval(this.interval);
    }
    
    render(){
        const {classes} = this.props;
        return (
            <ThemeProvider theme={theme} >
                <div className={classes.background} ref={this.vantaRef}>
                </div>
                <TopNavBar threshold={10} backgroundColor="black"/>
                <Container classes={classes}>
                <Fade in={true} timeout={1000}>
                    <Container className={classes.container} maxWidth="lg">
                        <Typography variant="h3" align="center"  style={{fontFamily:['Montserrat','sans-serif'].join(','),marginTop:30}} className={classes.text}> TRYST '20</Typography>
                        {/* <br/> */}
                        <Typography variant="h1" align="center" style={{fontFamily:['Faster One','cursive'].join(',')}}  className={classes.text}>Coming Soon!</Typography>
                        <br/>
                        <Typography variant="h5" align="center" className={classes.text}> {this.props.description} </Typography>
                        <br/>
                        <br/>
                        <div align="center">
                            <div className={classes.countdownTime}>
                                {("0"+Math.floor(this.state.time/(60000*60*24))).slice(-2)}
                            </div>
                            <div className={classes.countdownTime}>
                                {("0"+Math.floor(((this.state.time/(60000*60))%(24)))).slice(-2)}
                            </div>
                            {window.screen.width<600?
                                <div style={{marginTop:50}}>
                                    <div className={classes.countdownTime}>
                                        {("0"+Math.floor(((this.state.time/60000)%(60)))).slice(-2)}
                                    </div>
                                    <div className={classes.countdownTime}>
                                        {("0"+Math.floor(((this.state.time/1000)%60))).slice(-2)} 
                                    </div>
                                </div>
                            :
                                <Fragment>
                                    <div className={classes.countdownTime} >
                                        {("0"+Math.floor(((this.state.time/60000)%(60)))).slice(-2)}
                                    </div>
                                    <div className={classes.countdownTime}>
                                        {("0"+Math.floor(((this.state.time/1000)%60))).slice(-2)}
                                    </div>
                                </Fragment>
                            }
                            <br/>
                            <br/>
                            {window.screen.width>600?<Fragment><div className={classes.countdownText}>Days</div><div className={classes.countdownText}>Hours</div><div className={classes.countdownText}>Min</div><div className={classes.countdownText}>Second</div></Fragment>:<Fragment></Fragment>}
                        </div>
                        <br/><br/>
                        <Container style={{position:"relative",bottom:0,left: -10,width:"100%"}}>
                            <Container align="center" >
                                <Typography variant="h5" className={classes.text}>Get in touch!</Typography>
                                <IconButton style={{color: "white"}}>
                                    <Link 
                                    href="https://www.instagram.com/trystiitd/"
                                    target="_blank"
                                    variant="button"
                                    underline="none"
                                    color="inherit"
                                    >
                                        <InstagramIcon style={{fontSize:40}} />
                                    </Link>
                                </IconButton>
                                <IconButton style={{color: "white"}}>
                                    <Link 
                                    href="https://www.facebook.com/IITD.Tryst/"
                                    target="_blank"
                                    variant="button"
                                    underline="none"
                                    color="inherit"
                                    >
                                        <FacebookIcon style={{fontSize:40}} />
                                    </Link>
                                </IconButton>
                            </Container>
                        </Container>
                    </Container>
                </Fade>
                </Container>
            </ThemeProvider>
        );
    }
}
export default withStyles(styles, {withTheme: true})(ComingSoon);