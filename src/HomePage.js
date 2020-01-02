import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import NavBar from './TopNavBar';
import Backdrop from '@material-ui/core/Backdrop';

const useStyle = makeStyles(theme => ({
    background: {
        position: "fixed",
        width: "100%",
        height: "100%"
    },

    root: {
        color: "white",
        top: "30%",
        padding: theme.spacing(10),
    }
}))

function HomePage(props) {
    const classes = useStyle();

    return (
        <React.Fragment>
            <div id="element" className={classes.background}>
                <NavBar threshold={10} className={classes.background}/>
                <Container maxWidth={100} classes={classes}>
                    <Typography variant="h6">
                        TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights, from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+ events and participation of 40,000 students from all over the nation, team TRYST ensures there is something fun for everyone. Come aboard and have an experience of a lifetime!
                    </Typography>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default HomePage;