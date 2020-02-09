import React from 'react';
import NavBar from '../TopNavBar';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import TeamRegisterCard from './TeamRegisterCard';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(4), 
        align: "center",
        marginTop: theme.spacing(3)
    },

    container: {
        maxWidth: 800,
    },

    textfield: {
        margin: theme.spacing(3)
    },

    addButton: {
        left: "40%",
        marginLeft: -17,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        position: "relative"
    },
    submitButton: {
        left: "45%",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        position: "relative"
    }
}));

function Register(props) {
    const classes = useStyles();
    const [size, setSize] = React.useState(2);
    const [value, setValue] = React.useState("Individual")
    const {match,history, ...others} = props;

    console.log(match.params.eventid);

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    const handleClick = () => {
        setSize(size + 1);
    }

    const teamNumbers = [];
    for(let i = 1; i <= size; i++) {
        teamNumbers.push(i);
    }

    const handleSubmit = (event, target) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let jsonData = {};
        data.forEach((value, key) => {jsonData[key] = value;});
        console.log(JSON.stringify(jsonData));
        axios.post('/api/register/file', jsonData)
        .then(response => history.push('/events/success'))
        .catch(error => history.push('/events/failed'));

        return false;
    }

    return (
        <>
            <NavBar threshold={10} disableOpacity={true} backgroundColor="black"/>
            <Typography variant="h2" style={{marginTop: 100}} align="center">Registration</Typography>
                <RadioGroup row onChange={handleChange} style={{marginTop: 30}}defaultValue="Individual">
                    <Container className={classes.container}>
                        <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                        <FormControlLabel value="Team" control={<Radio />} label="Team" />
                    </Container>
                </RadioGroup>
            <Container className={classes.container}>
                {   value == "Team" ?
                        <form enctype="application/json" onSubmit={handleSubmit}>
                            <Card className={classes.card}>
                                <Grid container>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField name="team_name" className={classes.textfield} label="Team Name" variant="outlined" required="true"/>
                                    </Grid>
                                </Grid>
                            </Card>
                            {teamNumbers.map((number) => <TeamRegisterCard number={number}/>)}
                            <IconButton variant="extended" color="primary" className={classes.addButton} onClick={handleClick}>
                                <AddIcon/>
                            </IconButton>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
                            <TextField name="event_id" type="hidden" value={match.params.eventid}></TextField>
                            <TextField name="num_members" type="hidden" value={size}></TextField>
                        </form>
                    : 
                        <form enctype="application/json" onSubmit={handleSubmit}>
                            <Card className={classes.card}>
                                <Grid container>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} name="name_1" label="Name" variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} name="email_1" label="Email ID" variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} name="contact_1" label="Contact No." variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} name="college_1" label="College" variant="outlined" required="true"/>
                                    </Grid>
                                </Grid>
                            </Card>
                            <TextField name="num_members" type="hidden" value={1}>1</TextField>
                            <TextField name="event_id" type="hidden" value={match.params.eventid}></TextField>
                            <TextField name="team_name" type="hidden" value={"individual"}></TextField>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
                        </form>
                }
            </Container>
        </>
    )
}

export default withRouter(Register);