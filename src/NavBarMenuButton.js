import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";

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
        // transform: 'scale(0.7)'
    },
}));

export default function NavBarMenuButton(props) {
    const {...others} = props;
    const classesLarge = largeButtonStyle();
    const classesSmall = smallButtonStyle();
    const trigger = useScrollTrigger();
    const largeScreen = useMediaQuery('(min-width:600px)');

    if (!trigger && largeScreen) {
        return (
            <IconButton
                classes={classesLarge}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                {...others}
            >
                <MenuIcon fontSize="large"/>
            </IconButton>
        );
    } else {
        return (
            <IconButton
                classes={classesSmall}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                {...others}
            >
                <MenuIcon fontSize="small"/>
            </IconButton>
        );
    }
}