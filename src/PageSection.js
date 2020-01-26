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

const useStyle = makeStyles((theme) => ({
    root: props => ({
        backgroundColor: props.containerBackgroundColor,
        color: props.textColor,
        padding: theme.spacing(3),
        paddingTop: props.padding ? theme.spacing(props.padding) : theme.spacing(3)
    }),
}));

function PageSection(props) {
    const { heading, padding, headingAlignment, containerBackgroundColor, textColor, description, children, ...others } = props;

    const classes = useStyle(props);
    const cards = [1, 2, 3, 4, 5, 6];

    return (
        <ThemeProvider theme={theme}>
            <Container {...others} classes={classes} maxWidth={false}> 
                <Container maxWidth="md">
                    <Fade in={true}>
                        <Typography  style={{fontFamily:['Montserrat','sans-serif'].join(','),fontSize:44, marginBottom:10}} align={headingAlignment}>{heading}</Typography>
                    </Fade>
                    <Fade in={true}> 
                        <Typography variant="h5" style={{fontFamily:['Antic Slab','serif'].join(','), marginBottom:10}} align={headingAlignment}>{description}</Typography>
                    </Fade>
                    {children}
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default PageSection;
