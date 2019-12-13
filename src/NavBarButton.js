import React, { Children } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Code to style the ripples
// const rippleStyles = makeStyles({
//     root: {
//         backgroundImage: "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)",
//     },
// });

// function NavBarButton(props) {
//     let {children, ...other} = props;
//     const rippleClasses = rippleStyles();
//     return (
//         <ButtonBase {...other} variant="outlined" color="primary" TouchRippleProps={{classes: {ripple: rippleClasses.root, rippleVisible: rippleClasses.root, ripplePulsate: rippleClasses.root}}}>
//             {children}
//         </ButtonBase>
//     )
// }

const largeButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        marginRight: theme.spacing(2)
    },
  }));

const smallButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        marginRight: theme.spacing(1)
    },
}));

function NavBarButton(props) {
    const {children, ...others} = props;
    const classesLarge = largeButtonStyle();
    const classesSmall = smallButtonStyle();
    const trigger = useScrollTrigger();
    
    if (!trigger) {
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