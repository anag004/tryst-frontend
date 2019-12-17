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
    const { activated, positionX, positionY, screenWidth, screenHeight, ...others } = props;
    const classes = useStyles();
    const maxDimension = Math.max(screenWidth, screenHeight) * Math.sqrt(2);

    const splash = keyframes`
        0% {
            top: ${positionY}px;
            left: ${positionX}px;
            width: 1px;
            height: 1px;
            border-radius: 50%;
        }
      
        100% {
            top: ${(screenHeight - maxDimension) / 2}px;
            left: ${(screenWidth - maxDimension) / 2}px;
            width: ${maxDimension}px;
            height: ${maxDimension}px;
            border-radius: 20%;
            background-color: white;
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
        border-radius: 50%;
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