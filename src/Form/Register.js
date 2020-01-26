import React from 'react';
import NavBar from '../TopNavBar';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
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
        left: "50%",
        marginLeft: -17,
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
                <RadioGroup row onChange={handleChange} defaultValue="Individual">
                    <Container className={classes.container}>
                        <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                        <FormControlLabel value="Team" control={<Radio />} label="Team" />
                    </Container>
                </RadioGroup>
            <Container className={classes.container}>
                {teamNumbers.map((number) => <TeamRegisterCard number={number}/>)}
                <IconButton variant="extended" color="primary" className={classes.addButton} onClick={handleClick}>
                    <AddIcon/>
                </IconButton>
            </Container>
        </>
    )
}

export default Register;