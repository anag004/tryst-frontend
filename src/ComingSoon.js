import React, { Fragment, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper, Zoom, Grow, IconButton } from '@material-ui/core';
import TopNavBar from './TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from './ScrollToTop';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});

export default function Lodging(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;

    const useStyle = makeStyles((theme) => ({
        root: {
            background: 'linear-gradient(to right, #314755,#26a0da)',
            position:"absolute",
            top:0,
            bottom:0,
            right:0,
            left:0,
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
            marginRight:12,
            marginLeft:12,
            padding:10,
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
        <div className={classes.root}>
            <ScrollToTop/>
            <TopNavBar threshold={10}/>
            <Fade in={true} timeout={1000}>
                <Container className={classes.container} maxWidth="lg">
                    <Typography variant="h1" align="center" className={classes.text}> TRYST 2020</Typography>
                    <br/>
                    <Fade in={show} timeout={800}>
                        <Typography variant="h3" align="center" className={classes.text}>We are coming soon!</Typography>
                    </Fade>
                    <br/>
                    <Typography variant="h6" align="center" className={classes.text}>Our website is under construction, follow us for updates now!</Typography>
                    <br/>
                    <br/>
                    <div align="center">
                        <div className={classes.countdownTime}>{("0"+Math.floor(time/(60000*60*24))).slice(-2)}</div> <div className={classes.countdownTime}>{("0"+Math.floor(((time/(60000*60))%(24)))).slice(-2)}</div> <div className={classes.countdownTime} >{("0"+Math.floor(((time/60000)%(60)))).slice(-2)}</div><div className={classes.countdownTime}>{("0"+Math.floor(((time/1000)%60))).slice(-2)} </div>
                        <br/>
                        <br/>
                        <div className={classes.countdownText}>Days</div><div className={classes.countdownText}>Hours</div><div className={classes.countdownText}>Min</div><div className={classes.countdownText}>Second</div>
                    </div>
                    <Container style={{position:"fixed",bottom:0,width:"100%"}}>
                        <Container align="center" >
                            <IconButton>
                                <FacebookIcon style={{fontSize:40}} />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon style={{fontSize:40}} />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon style={{fontSize:40}} />
                            </IconButton>
                        </Container>
                    </Container>
                </Container>
            </Fade>
        </div>
    );
}
/*{time%2?
                        <Zoom in={true} timeout={800}>
                            <Typography variant="h3" align="center" className={classes.text}>We are coming soon!</Typography>
                        </Zoom>
                        :<Typography variant="h3" align="center" className={classes.text}>We are coming soon!</Typography>
                    }*/ 