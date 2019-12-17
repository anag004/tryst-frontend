import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { borders } from '@material-ui/system';
import SimpleGrid from './SimpleGrid';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function PageSection(props) {
    const { heading, headingAlignment, containerBackgroundColor, textColor, description, children, ...others } = props;

    const useStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: containerBackgroundColor,
            color: textColor,
            padding: theme.spacing(3),
        },
    }));

    const classes = useStyle();
    const cards = [1, 2, 3, 4, 5, 6];

    return (
        <ThemeProvider theme={theme}>
            <Container {...others} classes={classes} maxWidth={false}> 
                <Container maxWidth="md">
                    <Fade in={true}>
                        <Typography variant="h3" align={headingAlignment}>{heading}</Typography>
                    </Fade>
                    <Fade in={true}> 
                        <Typography variant="h5" align={headingAlignment}>{description}</Typography>
                    </Fade>
                    {children}
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default PageSection;
