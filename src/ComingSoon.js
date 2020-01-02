import React, {useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, IconButton } from '@material-ui/core';
import TopNavBar from './TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});
const useStyle = makeStyles((theme) => ({
    root: {
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
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
        padding:15,
    },
    
    
}));

export default function Lodging(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;

    var TrystDate=new Date(2020, 2, 7);
    var today=new Date();

    
    const [time,setTime]=React.useState(TrystDate.getTime()- today.getTime());
    const [show,setShow]=React.useState(true);
    const classes = useStyle();
    
    
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(time=>time-1000)
            setShow(show=>!show)
            },1000);
            return()=>clearInterval(timer)
        },[]
    )
    return (
        <ThemeProvider theme={theme} >
            <div id="element" className={classes.background}>
            </div>
            <TopNavBar threshold={10}/>
            <Container classes={classes}>
            <Fade in={true} timeout={1000}>
                <Container className={classes.container} maxWidth="lg">
                    <Typography variant="h1" align="center" className={classes.text}> TRYST '20</Typography>
                    <br/>
                    <Fade in={show} timeout={800}>
                        <Typography variant="h3" align="center" className={classes.text}>Coming Soon!</Typography>
                    </Fade>
                    <br/>
                    <Typography variant="h6" align="center" className={classes.text}>Follow us for updates now!</Typography>
                    <br/>
                    <br/>
                    <div align="center">
                        <div className={classes.countdownTime}>{("0"+Math.floor(time/(60000*60*24))).slice(-2)}</div> <div className={classes.countdownTime}>{("0"+Math.floor(((time/(60000*60))%(24)))).slice(-2)}</div> <div className={classes.countdownTime} >{("0"+Math.floor(((time/60000)%(60)))).slice(-2)}</div><div className={classes.countdownTime}>{("0"+Math.floor(((time/1000)%60))).slice(-2)} </div>
                        <br/>
                        <br/>
                        <div className={classes.countdownText}>Days</div><div className={classes.countdownText}>Hours</div><div className={classes.countdownText}>Min</div><div className={classes.countdownText}>Second</div>
                    </div>
                    <Container style={{position:"fixed",bottom:0,left: -10,width:"100%"}}>
                        <Container align="center" >
                            <Typography variant="h5" className={classes.text}>Get in touch!</Typography>
                            <IconButton style={{color: "white"}}>
                                <FacebookIcon style={{fontSize:40}} />
                            </IconButton>
                            <IconButton style={{color: "white"}}>
                                <InstagramIcon style={{fontSize:40}} />
                            </IconButton>
                            <IconButton style={{color: "white"}}>
                                <TwitterIcon style={{fontSize:40}} />
                            </IconButton>
                        </Container>
                    </Container>
                </Container>
            </Fade>
            </Container>
        </ThemeProvider>
    );
}
