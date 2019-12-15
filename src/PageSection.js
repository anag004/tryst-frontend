import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
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
        }
    }));

    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <Container {...others} classes={classes}>
                <Typography variant="h3" align={headingAlignment}>{heading}</Typography>
                <Typography variant="h5" align={headingAlignment}>{description}</Typography>
            </Container>
        </ThemeProvider>
    );
}

export default PageSection;