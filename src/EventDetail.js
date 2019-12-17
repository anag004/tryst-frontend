import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function EventDetail(props) {
    const {heading, ...others} = props;

    return (
        <Typography variant="h1" {...others}>{heading}</Typography>
    );
}