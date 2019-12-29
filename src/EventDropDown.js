import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';

const largeButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: theme.spacing(2),
    },
  }));

const smallButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: theme.spacing(1),
    },
}));

const linkStyle = makeStyles(theme => ({
    link: {
        textDecoration: "none"
    },
}));

const arrowStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        border: '0px', 
        paddingLeft: theme.spacing(0.5)
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '0px solid #d3d4d5',
        borderRadius: '0px',
    },
    })(props => (
    <Menu
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        {...props}
    />
    ));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
        },
    },
    }))(MenuItem);

function EventDropDown(props) {
    const {children, ...others} = props;
    const classesLarge = largeButtonStyle();
    const classesSmall = smallButtonStyle();
    const trigger = useScrollTrigger();
    const largeScreen = useMediaQuery('(min-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const linkClasses = linkStyle();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = event => {
        setAnchorEl(null);
    }

    if (!trigger && largeScreen) {
        return (
            <div>
                <Button className={classesLarge.root} size="large" onClick={handleClick} {...others}> 	
                    Events
                </Button>
                <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem>
                    <Link className={linkClasses.link} to="/events">
                        <StyledMenuItem onClick={handleClose}>All events</StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#section1">
                        <StyledMenuItem onClick={handleClose}>Event Section 1</StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#section2">
                        <StyledMenuItem onClick={handleClose}>Event Section 2</StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#section3">
                        <StyledMenuItem onClick={handleClose}>Event Section 3</StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#section4">
                        <StyledMenuItem onClick={handleClose}>Event Section 4</StyledMenuItem>
                    </Link>
                </StyledMenu>
            </div>
        );
    } else {
        return (
            <div>
                <Button className={classesSmall.root} size="small" onClick={handleClick} {...others}> 	
                    Events
                </Button>
                <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem>
                    <StyledMenuItem onClick={handleClose}>All events</StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>Event Section 1</StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>Event Section 2</StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>Event Section 3</StyledMenuItem>
                    <Link>
                        <StyledMenuItem onClick={handleClose}>Event Section 4</StyledMenuItem>
                    </Link>
                </StyledMenu>
            </div>
        );
    }
}

export default EventDropDown;