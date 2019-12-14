import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NavBarButton from './NavBarButton';
import EventDropDown from './EventDropDown';

function ScaleOnScroll(props) {
    const { children, initialSize, finalSize } = props;
    const trigger = useScrollTrigger();

    const normalStyle = makeStyles({
        root: {
            transition: 'font-size 0.5s',
            fontSize: 20,
            '@media (min-width:600px)': {
                fontSize: initialSize,
            }
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
}

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    }
}));

function NavBar(props) {
    const { threshold, ...others } = props;

    const handleScroll = (event) => {
        const currScrollPosition = window.pageYOffset > threshold;
        if (currScrollPosition != scrollPosition) {
            setScrollPosition(currScrollPosition);
        }
    }

    const [scrollPosition, setScrollPosition] = React.useState(null);

    window.addEventListener('scroll', handleScroll);

    const appBarStyleTransparent = makeStyles({
        root: {
            backgroundColor: 'transparent'
        }
    });

    const appBarStyleOpaque = makeStyles({
        root: {
            transition: 'all 0.5s'
        }
    });

    const appBarTransition = makeStyles({
        root: {
            transition: 'all 0.5s'
        }
    });

    const classes = useStyles();
    const classesAppBarTransparent = appBarStyleTransparent();
    // const classesAppBarOpaque = appBarStyleOpaque();
    const classesAppBarOpaque = {};
    const classesAppBarTransition = appBarTransition();

    return (
        <Slide in={true}>
            <AppBar classes={ scrollPosition ? {} : classesAppBarTransparent } className={classesAppBarTransition} {...others}>
                <Toolbar variant="dense">
                        {/* ScaleOnScroll animates NavBar font here */}
                        <Typography variant="h6" className={classes.title}>
                            	<ScaleOnScroll initialSize={40} finalSize={20}>
                                    TRYST
                                </ScaleOnScroll>
                        </Typography>
                        <NavBarButton>Home</NavBarButton>
                        <EventDropDown/>
                        <NavBarButton>About Us</NavBarButton>
                        <NavBarButton>Login</NavBarButton>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default NavBar;