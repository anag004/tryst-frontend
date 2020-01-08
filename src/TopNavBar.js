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
import { Link } from "react-router-dom";
import NavDrawer from './NavDrawer';
import NavBarMenuButton from './NavBarMenuButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const normalStyle = makeStyles({
    root: {
        transition: 'font-size 0.5s',
        fontSize: 20,
        '@media (min-width:600px)': {
            fontSize: 40,
        }
    }
});

const scaledStyle = makeStyles({
    root: {
        transition: 'font-size 0.5s',
        fontSize: 20,
    }
});    

function ScaleOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    const classesNormal = normalStyle();
    const classesScaled = scaledStyle();

    if (!trigger) {
        return  (
            <Box classes={{ root: classesNormal.root }}>
                {children}
            </Box>
        );   
    } else {
        return (
            <Box classes={{ root: classesScaled.root }}>
                {children}
            </Box>
        );
    }
}

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    link:{
        textDecoration:"none",
    },
    toolbar:{
        overflowX:"auto"
    }
}));

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

function NavBar(props) {
    const { threshold, disableOpacity, ...others } = props;
    const largeScreen = useMediaQuery('(min-width:850px)');
    const [scrollPosition, setScrollPosition] = React.useState(null);

    const handleScroll = (event) => {
        const currScrollPosition = window.pageYOffset > threshold;
        if (currScrollPosition != scrollPosition) {
            setScrollPosition(currScrollPosition);
        }
    }

    window.addEventListener('scroll', handleScroll);

    const classes = useStyles();
    const classesAppBarTransparent = appBarStyleTransparent();
    const classesAppBarOpaque = {};
    const [visible, setVisible] = React.useState(false);
    
    const toggleDrawer = () => {
        console.log("Toggle Drawer called");
        setVisible(!visible);
    }

    return (
        <React.Fragment>
            <NavDrawer visible={visible} toggleDrawer={toggleDrawer}/>
            <Slide in={true}>
                <AppBar classes={ (scrollPosition || disableOpacity) ? {} : classesAppBarTransparent } elevation={(scrollPosition || disableOpacity) ? 4 : 0} {...others}>
                    <Toolbar variant="dense" className={classes.toolbar}>
                            {/* ScaleOnScroll animates NavBar font here */}
                            <Typography variant="h6" className={classes.title}>
                                	<ScaleOnScroll>
                                        TRYST
                                    </ScaleOnScroll>
                            </Typography>
                            { largeScreen
                                ? (
                                    <React.Fragment>
                                        <Link to="/home" className={classes.link}>
                                            <NavBarButton>Home</NavBarButton>
                                        </Link>
                                        <EventDropDown/>
                                        <Link to="/lodging" className={classes.link}>
                                            <NavBarButton>Lodging</NavBarButton>
                                        </Link>
                                        <Link to="/team" className={classes.link}>
                                            <NavBarButton>Team</NavBarButton>
                                        </Link>
                                        <Link to="/sponsors" className={classes.link}>
                                            <NavBarButton>Sponsors</NavBarButton>
                                        </Link>
                                    </React.Fragment>
                                )
                                : <NavBarMenuButton onClick={toggleDrawer}/>
                            }
                    </Toolbar>
                </AppBar>
            </Slide>
        </React.Fragment>
    )
}

export default NavBar;