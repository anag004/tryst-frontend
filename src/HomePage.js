import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        height: '100%',
        position: 'fixed',
    }
}));

export default function HomePage(props) {
    const classes = useStyles();
    return (
        <Container disableGutters="true" classes={classes}>
            <Typography variant="h1" color="secondary" align="center">
                HomePage
            </Typography>
        </Container>
    )
}