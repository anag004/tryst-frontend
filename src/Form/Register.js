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
import Fade from '@material-ui/core/Fade';

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
                        <form action="">
                            {teamNumbers.map((number) => <TeamRegisterCard number={number}/>)}
                            <IconButton variant="extended" color="primary" className={classes.addButton} onClick={handleClick}>
                                <AddIcon/>
                            </IconButton>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
                        </form>
                    : 
                        <form>
                            <Card className={classes.card}>
                                <Grid container>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} label="Name" variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} label="Email ID" variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} label="Contact No." variant="outlined" required="true"/>
                                    </Grid>
                                    <Grid item xs  style={{minWidth: 300}}>
                                        <TextField className={classes.textfield} label="College" variant="outlined" required="true"/>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Submit</Button>
                        </form>
                }
            </Container>
        </>
    )
}

export default Register;