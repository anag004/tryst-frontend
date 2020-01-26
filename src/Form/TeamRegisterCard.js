import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(4), 
        align: "center",
        marginTop: theme.spacing(3)
    },

    textfield: {
        margin: theme.spacing(1)
    },

    heading: {
        marginBottom: theme.spacing(1)
    }
}));

function TeamRegisterCard(props) {
    const {number, ...other} = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.heading}>Team Member #{number}</Typography>
            <Grid container>
                <Grid item xs  style={{minWidth: 200}}>
                    <TextField className={classes.textfield} label="Name" variant="outlined" required="true"/>
                </Grid>
                <Grid item xs  style={{minWidth: 200}}>
                    <TextField className={classes.textfield} label="Email ID" variant="outlined" required="true"/>
                </Grid>
                <Grid item xs  style={{minWidth: 200}}>
                    <TextField className={classes.textfield} label="Contact No." variant="outlined" required="true"/>
                </Grid>
                <Grid item xs  style={{minWidth: 200}}>
                    <TextField className={classes.textfield} label="College" variant="outlined" required="true"/>
                </Grid>
            </Grid>
        </Card>
    )
}

export default TeamRegisterCard;