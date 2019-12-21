import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import NavBar from './TopNavBar';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:"black",
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        position: 'fixed',
    }
}));

export default function HomePage(props) {
    const classes = useStyles();
    return (
        <Container disableGutters="true" classes={classes}>
            <NavBar/>
            <Typography variant="h3" color="secondary" align="center" style={{margin:"auto",marginTop:40}}>
                HOME PAGE
            </Typography>
        </Container>
    )
}