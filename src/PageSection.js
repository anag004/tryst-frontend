import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
                <Typography variant="h3" align={headingAlignment}>{heading}</Typography>
                <Typography variant="h5" align={headingAlignment}>{description}</Typography>
                <Grid container spacing={2} className={classes.container}>
                        {cards.map(() => 
                            <Grid item>
                                <EventCard
                                    cardHeading = "Bubba Grump Shrimp Co."
                                    cardDescription = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                                    cardImage = "http://source.unsplash.com/collection/146130/random"
                                />
                            </Grid>
                        )}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default PageSection;