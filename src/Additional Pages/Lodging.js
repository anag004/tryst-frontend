import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from '../ImageBanner';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from '../ScrollToTop';
import { MetaTags } from 'react-meta-tags';
import NavBar from '../TopNavBar';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});

const useStyle = makeStyles((theme) => ({
    root: {
        padding:theme.spacing(3)
    }, 
}));

export default function Lodging(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;

    const post = {
        category:"Lodging",
        title: "Lodging @Tryst",
        description:
          "Stay on campus while you enjoy what Tryst has to offer",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
    };

    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <MetaTags>
                <meta name="title_Page" content="TRYST 2020, IIT Delhi, Lodgings" />
            </MetaTags>
            <ScrollToTop/>
            <NavBar threshold={10} backgroundColor="#192841"/>
            <div style={{position:"fixed",width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#29426c"}} />
            <Fade in={true}  timeout={1000}>
                <ImageBanner post={post}/>
            </Fade>
            <Fade in={true} timeout={1000}>
                <Container classes={classes} maxWidth="sm">
                    <Typography variant="h4" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}} align="center">Affordable. Convenient. Unique</Typography>
                    <br/>
                    <Typography variant="body1" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}}>
                        Stay in one of the 13 hostels at IITD and experience IITD's unique hostel culture. Never be more than 5 minutes away from the action. All for a fraction of the cost of a hotel. 
                    </Typography>
                    <br></br>
                    {/* <Typography variant="h4">Eligibility</Typography>
                    <br></br>
                    You must satisfy the following criteria to be eligible for a reservation
                    <Typography variant="body1">
                        <ol>
                            <li>We do not talk about Fight Club. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Maecenas tristique tempus varius. Donec ac ante nec lectus bibendum eleifend. </li>
                            <li>We do <b>not</b> talk about Fight Club. Etiam bibendum, augue eu ultrices ullamcorper, lacus tortor condimentum justo, eget vestibulum nulla magna egestas massa.</li>
                            <li>We do <i>not</i> talk about Fight Club. Maecenas sapien lacus, placerat in ipsum vel, ultricies dapibus mi. </li>
                            <li>We do <u>not</u> talk about Fight Club.  Fusce sagittis turpis quis justo lacinia pulvinar. Duis porta mollis turpis at commodo</li>
                        </ol>
                    </Typography> */}
                    <Typography variant="h4" style={{fontFamily:['Montserrat','sans-serif'].join(','), fontSize:"40px", color:"white"}}>Rates</Typography>
                    <br></br>
                    <Typography variant="body" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}}>Dirt cheap rates</Typography>
                    <Typography variant="body1" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}}>
                        <ul>
                            <li><i>Day One </i> 500 INR</li>
                            <li><i>Day Two: </i> 1000 INR</li>
                            <li><i>Day Three: </i> 1000 INR</li>
                            <li><i>Total for 3D 2N: </i> 2500 INR</li>
                        </ul>
                    </Typography>
                    {/* <Typography variant="body2">
                        <b> 
                            Contact urnasemper@gmail.com to make resevations.
                        </b>
                    </Typography> */}
                </Container>
            </Fade>
            
        </ThemeProvider>
    );
}