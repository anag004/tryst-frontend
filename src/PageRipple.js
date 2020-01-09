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
    const backgroundColor = "#FFF";
    
    const splash = keyframes`
        0% {
            transform: translate(${positionX - screenWidth/2}px, ${positionY - screenHeight/2}px);
        }
      
        100% {
            transform: scale(${maxDimension});
            background-color: ${backgroundColor};
        }
    `;

    const Splash = styled.div`
        position: fixed;
        background-color:  ${backgroundColor};
        animation-name: ${splash};
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        height: 1px; 
        width: 1px;
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