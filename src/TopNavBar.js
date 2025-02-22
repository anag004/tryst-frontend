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
import logo from './images/logo-white-min.png';
import clsx from 'clsx';

const normalStyle = makeStyles({
    root: {
        flexGrow: 1,
        transition: 'height 0.5s',
        height: 50,
        '@media (min-width:600px)': {
            height: 70,
        }
    }
});

const scaledStyle = makeStyles({
    root: {
        transition: 'height 0.5s',
        flexGrow: 1,
        height: 50,
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
    iconWrapper: {
        height: "inherit",
        maxHeight: "inherit"
    },
    mainIcon: {
        maxHeight: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
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

const appBarStyle = makeStyles({
    root: props => (
        props.backgroundColor ? 
        {
            backgroundColor: props.backgroundColor
        }
        : {}
    )
});

function NavBar(props) {
    const { threshold, disableOpacity, ...others } = props;
    const largeScreen = useMediaQuery('(min-width:950px)');
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
    const classesAppBar = appBarStyle(props);
    const [visible, setVisible] = React.useState(false);
    
    const toggleDrawer = () => {
        console.log("Toggle Drawer called");
        setVisible(!visible);
    }

    return (
        <React.Fragment>
            <NavDrawer visible={visible} toggleDrawer={toggleDrawer}/>
            <Slide in={true}>
                <AppBar classes={ (scrollPosition || disableOpacity) ? classesAppBar : classesAppBarTransparent } elevation={(scrollPosition || disableOpacity) ? 4 : 0} {...others}>
                    <Toolbar style={{overflow:"hidden"}} variant="dense" className={classes.toolbar}>
                            <ScaleOnScroll>
                                <div className={classes.iconWrapper}>
                                    <Link to="/home" className={classes.link}>
                                        <img src={logo} className={classes.mainIcon}></img>
                                    </Link>
                                </div>
                            </ScaleOnScroll>
                            { largeScreen
                                ? (
                                    <React.Fragment>
                                        {/* <Link to="/home" className={classes.link}>
                                            <NavBarButton>Home</NavBarButton>
                                        </Link> */}
                                        <EventDropDown/>
                                        <Link to="/exhibitions" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Exhibitions</Typography></NavBarButton>
                                        </Link>
                                        <Link to="/guestLectures" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Guest Lectures</Typography></NavBarButton>
                                        </Link>
                                        <Link to="/lodging" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Lodging</Typography></NavBarButton>
                                        </Link>
                                        <Link to="/team" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Team</Typography></NavBarButton>
                                        </Link>
                                        <Link to="/sponsors" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Sponsors</Typography></NavBarButton>
                                        </Link>
                                        <Link to="/about" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>About</Typography></NavBarButton>
                                        </Link>
                                        <a href="https://drive.google.com/uc?export=download&id=1Nxf00Q0lTjFFycx3DNtO1L8j0j90_euD" download target="_blank" className={classes.link}>
                                            <NavBarButton><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Schedule</Typography></NavBarButton>
                                        </a>
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