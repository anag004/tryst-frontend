import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(3)
    }
}));

export default function EventCardRow(props) {
    const {children, ...others} = props;
    const classes = useStyles();
    
    return (
        <Grid container spacing={2} className={classes.container} {...others}>
            {children}
        </Grid>
    )
}
