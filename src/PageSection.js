import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { borders } from '@material-ui/system';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function getRandomNumber(lowerBound, higherBound, snapping) {
    const diff = (higherBound - lowerBound) / snapping;
    return lowerBound + diff * Math.floor(snapping * Math.random());
}

// Returns a grid of cards for demo purposes
function SimpleGrid(props) {
    const {n} = props;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    
    const maxHeight = 800;
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. Quisque at augue fringilla, tincidunt elit sit amet, vestibulum eros. Duis eu diam volutpat, ullamcorper mauris feugiat, porttitor odio. Pellentesque leo mi, pulvinar eu condimentum ut, viverra eu enim. Curabitur maximus nisl quis augue consequat, et mollis velit pretium. Nulla faucibus ac augue eget gravida.`;


    return (
        <>
            <React.Fragment>
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={4}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={4}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={4}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={6}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={3}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={3}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={3}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={6}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={3}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={8}
                />
                <EventCard
                    maxHeight={maxHeight} 
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={4}
                />
            </React.Fragment>
        </>
    );
}

function PageSection(props) {
    const { heading, headingAlignment, containerBackgroundColor, textColor, description,...others } = props;

    const useStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: containerBackgroundColor,
            color: textColor,
            padding: theme.spacing(3),
        },

        container: {
            margin: theme.spacing(3)
        }
    }));

    const classes = useStyle();
    const cards = [1, 2, 3, 4, 5, 6];

    return (
        <ThemeProvider theme={theme}>
            <Container {...others} classes={classes}>
                <Fade in={true}>
                    <Typography variant="h3" align={headingAlignment}>{heading}</Typography>
                </Fade>
                <Fade in={true}> 
                    <Typography variant="h5" align={headingAlignment}>{description}</Typography>
                </Fade>
                <Grid container spacing={2} className={classes.container} justify="space-between">
                    <SimpleGrid n="10"/>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default PageSection;