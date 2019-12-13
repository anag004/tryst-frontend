import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBarButton from './NavBarButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { green, purple } from '@material-ui/core/colors';

function ScaleOnScroll(props) {
    const { children, initialSize, finalSize } = props;
    const trigger = useScrollTrigger();

    const normalStyle = makeStyles({
        root: {
            transition: 'font-size 0.5s',
            fontSize: initialSize
        }
    });
    
    const scaledStyle = makeStyles({
        root: {
            transition: 'font-size 0.5s',
            fontSize: finalSize
        }
    });    

    if (!trigger) {
        const classes = normalStyle();
        return  (
            <Box classes={{ root: classes.root }}>
                {children}
            </Box>
        );   
    } else {
        const classes = scaledStyle();
        return (
            <Box classes={{ root: classes.root }}>
                {children}
            </Box>
        );
    }

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    }
}));

function NavBar(props) {
    const classes = useStyles();
    return (
        <Slide in={true}>
            <AppBar>
                <Toolbar variant="dense">
                        {/* ScaleOnScroll animates NavBar font here */}
                        <Typography variant="h6" className={classes.title}>
                            	<ScaleOnScroll initialSize={40} finalSize={20}>
                                    TRYST
                                </ScaleOnScroll>
                        </Typography>
                        <NavBarButton>Home</NavBarButton>
                        <NavBarButton>Events</NavBarButton>
                        <NavBarButton>About Us</NavBarButton>
                        <NavBarButton>Login</NavBarButton>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default NavBar;