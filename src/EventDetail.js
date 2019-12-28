import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import TopNavBar from './TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});

export default function EventDetail(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;

    const useStyle = makeStyles((theme) => ({
        root: {
            padding:theme.spacing(3)
        }
    }));

    // const paperStyle = makeStyles((theme) => ({
    //     root: {
    //         maxWidth: 850,
    //     }
    // }));

    const post = {
        category:"Tryst Event Category 1",
        title: 'Event',
        description:
          "Learn to build and deploy smart AI ",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        postDescription:{
            about:"We are hosting some amazing events this year",
            details:"the event will be held a s folows on this date and this time",
            prize:"The prizes for the event are as follows",
            register:"Follow below to register"
        },
    };

    const classes = useStyle();
    // const paperClasses = paperStyle();

    return (
        <ThemeProvider theme={theme}>
            <TopNavBar threshold={10}/>
            <Fade in={true}  timeout={1000}>
                <ImageBanner post={post}/>
            </Fade>
            <Fade in={true} timeout={1000}>
                <Container classes={classes} maxWidth="sm">
                    <Typography variant="h4">Description</Typography>
                    <br/>
                    <Typography variant="body1">
                        This is an awesome event in which two people design an AI together. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Maecenas tristique tempus varius. Donec ac ante nec lectus bibendum eleifend. Etiam bibendum, augue eu ultrices ullamcorper, lacus tortor condimentum justo, eget vestibulum nulla magna egestas massa. Maecenas sapien lacus, placerat in ipsum vel, ultricies dapibus mi. Fusce sagittis turpis quis justo lacinia pulvinar. Duis porta mollis turpis at commodo. Nunc imperdiet cursus nibh, at feugiat turpis mollis at. Maecenas venenatis risus id ex scelerisque iaculis. Integer sed arcu ultrices, gravida tellus eget, rhoncus tortor. Donec condimentum quis lectus nec fringilla. Proin viverra mauris at tellus molestie lacinia. 
                    </Typography>
                    <br></br>
                    <Typography variant="h4">Rules</Typography>
                    <br></br>
                    All of the rules below are binding and failure to follow will result in immediate disqualification. 
                    <Typography variant="body1">
                        <ol>
                            <li>We do not talk about Fight Club. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Maecenas tristique tempus varius. Donec ac ante nec lectus bibendum eleifend. </li>
                            <li>We do <b>not</b> talk about Fight Club. Etiam bibendum, augue eu ultrices ullamcorper, lacus tortor condimentum justo, eget vestibulum nulla magna egestas massa.</li>
                            <li>We do <i>not</i> talk about Fight Club. Maecenas sapien lacus, placerat in ipsum vel, ultricies dapibus mi. </li>
                            <li>We do <u>not</u> talk about Fight Club.  Fusce sagittis turpis quis justo lacinia pulvinar. Duis porta mollis turpis at commodo</li>
                        </ol>
                    </Typography>
                    <Typography variant="h4">Prizes</Typography>
                    <br></br>
                    Some amazing prizes to make you rich
                    <Typography variant="body1">
                        <ul>
                            <li><i>First prize: </i> 35000 INR</li>
                            <li><i>Second prize: </i> 20000 INR</li>
                            <li><i>Third prize: </i> 10000 INR</li>
                        </ul>
                    </Typography>
                    <Typography variant="body2">
                        <b> 
                            Contact urnasemper@gmail.com for any queries.
                        </b>
                    </Typography>
                </Container>
            </Fade>
            
        </ThemeProvider>
    );
}