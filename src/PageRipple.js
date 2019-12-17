import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Ripple from '@material-ui/core/ButtonBase/Ripple';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles'; 
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';

export default function PageRipple(props) {
    const { activated, positionX, positionY, ...others } = props;

    const useStyles = makeStyles(theme => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        
        rippleBox: {
            borderRadius: '20%',
            height: "2000px",
            width: "2000px",
            backgroundColor: '#FFF',
        },
    }));

    const classes = useStyles();

    if (activated) {
        return (
            <Backdrop open={true} className={classes.backdrop}>
                <Zoom in={true} timeout={500}>
                    <Box className={classes.rippleBox}></Box>
                </Zoom>
            </Backdrop>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}