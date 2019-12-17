import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

export default function EventDetail(props) {
    const {heading, ...others} = props;

    return (
        <Fade in={true} timeout={1000}>
            <Typography variant="h1" {...others}>{heading}</Typography>
        </Fade>
    );
}