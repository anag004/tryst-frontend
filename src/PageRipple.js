import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Ripple from '@material-ui/core/ButtonBase/Ripple';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles'; 
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
import { keyframes } from 'styled-components';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));    

export default function PageRipple(props) {
    const { activated, positionX, positionY, ...others } = props;
    const classes = useStyles();

    const splash = keyframes`
        0% {
            top: 50%;
            left: 50%;
            width: 1%;
            height: 1%;
            border-radius: 50%;
        }
      
        100% {
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            border-radius: 20%;
        }
    `;

    const Splash = styled.div`
        position: fixed;
        background-color: white;
        animation-name: ${splash};
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        border-radius: 20%;
    `;

    if (activated) {
        return (
            <Backdrop open={true} className={classes.backdrop}>
                <Splash></Splash>
            </Backdrop>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}