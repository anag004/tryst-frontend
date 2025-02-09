import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper, Button, useMediaQuery, Link } from '@material-ui/core';
import ImageBanner from '../ImageBanner';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from '../ScrollToTop';
import { MetaTags } from 'react-meta-tags';
import NavBar from '../TopNavBar';
import LodgingImage from '../images/Lodging.jfif'

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#FFFFFF' }
    }
});

const useStyle = makeStyles((theme) => ({
    root: {
        padding:theme.spacing(3)
    }, 
}));

export default function Lodging(props) {
    const largeScreen = useMediaQuery('(min-width:500px)');
    const {heading, containerBackgroundColor,textColor, ...others} = props;
    const post = {
        category:"Lodging",
        title: "Lodging @Tryst",
        description:
          "Stay on campus while you enjoy what Tryst has to offer",
        image: `url(${LodgingImage})`,
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
            <ImageBanner post={post}/>
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
                            <li><i>Day One: </i> 500 INR</li>
                            <li><i>Day Two: </i> 1000 INR</li>
                            <li><i>Day Three: </i> 1000 INR</li>
                            <li><i>Total for 3D 2N: </i> 2500 INR</li>
                        </ul>
                        <b>The prices are inclusive of 3 meals a day.</b>
                    </Typography>
                    <br/>
                    <u>
                        <Link href="https://drive.google.com/open?id=1gxjAvStEVq6G0pGfB89ocyZ3PTwMP-z4" target="_blank">
                            <Typography variant="body1" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}}>
                                Bank Details for payment Transfer 
                            </Typography>
                        </Link>
                    </u>
                    <br/>
                    <Typography variant="body1" style={{fontFamily:['Montserrat','sans-serif'].join(','), color:"white"}}>
                        For any queries, contact:<br/>
                        <ul>
                            <i> 
                                <li>Ronak: 9166739069</li>
                                <li>Jatin: 9041839881</li>
                            </i>
                        </ul>
                    </Typography>
                </Container>
            </Fade>
            <div style={{position:"fixed", bottom:40,right:largeScreen?40:20}}>
                <Button variant="outlined" color="secondary" href="https://forms.gle/UPpgXuds6uKr5Am5A" target="__blank" size="large">Register</Button>
            </div>
        </ThemeProvider>
    );
}