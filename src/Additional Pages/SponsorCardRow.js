import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1)
    }
}));

export default function SponsorCardRow(props) {
    const {children, ...others} = props;
    const classes = useStyles();
    
    return (
        <div style={{ paddingLeft:0, paddingRight:20 }}>
            <Grid container maxWidth="sm" spacing={2} className={classes.container} {...others}>
                {children}
            </Grid>
        </div>
    )
}
