import React from 'react';
import NavBar from '../TopNavBar';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
    card: {
        padding: theme.spacing(4), 
        align: "center"
    },

    container: {
        marginTop: theme.spacing(3),
        maxWidth: 800,
    },

    textfield: {
        margin: theme.spacing(3)
    }
})

class Register extends React.Component {
    render() {
        const handleChange = (event) => {
            console.log(event.target.value);
        }

        return (
            <>
                <NavBar threshold={10} disableOpacity={true} backgroundColor="black"/>
                <Typography variant="h2" style={{marginTop: 100}} align="center">Registration</Typography>
                    <RadioGroup row onChange={handleChange} defaultValue="Individual">
                        <Container className={this.props.classes.container}>
                            <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                            <FormControlLabel value="Team" control={<Radio />} label="Team" />
                        </Container>
                    </RadioGroup>
                <Container className={this.props.classes.container}>
                    <Card className={this.props.classes.card}>
                        <Typography variant="h4">Team Member</Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField className={this.props.classes.textfield} label="Name" variant="outlined" required="true"/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField className={this.props.classes.textfield} label="Email ID" variant="outlined" required="true"/>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </>
        )
    }
}

export default withStyles(styles)(Register);