import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

function NavBarButton(props) {
    const {children, ...others} = props;
    const classesLarge = largeButtonStyle();
    const classesSmall = smallButtonStyle();
    const trigger = useScrollTrigger();
    const largeScreen = useMediaQuery('(min-width:600px)');

    if (!trigger && largeScreen) {
        return (
            <Button className={classesLarge.root} size="large" {...others}>
                {children}
            </Button>
        );
    } else {
        return (
            <Button className={classesSmall.root} size="small" {...others}>
                {children}
            </Button>
        );
    }
}

export default NavBarButton;