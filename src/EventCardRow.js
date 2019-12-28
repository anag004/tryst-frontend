import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1)
    }
}));

export default function EventCardRow(props) {
    const {children, rippleTriggerFunction, ...others} = props;
    const classes = useStyles();

    return (
        <div style={{ paddingLeft:0, paddingRight:20 }}>
            <Grid container spacing={2} className={classes.container} {...others}>
                {
                    React.Children.map(children, child => 
                        React.cloneElement(child, { rippleTriggerFunction: rippleTriggerFunction })
                    )
                }
            </Grid>
        </div>
    )
}
