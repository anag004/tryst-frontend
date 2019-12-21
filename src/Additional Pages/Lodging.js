import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Paper, Fade } from '@material-ui/core';
import NavBar from '../TopNavBar';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "black",
        height: '100%',
        position: 'fixed',
    },
    heading:{
        margin:"auto",
        marginTop:50,
        fontWeight:"500"
    },
    paper:{
        position:"absolute",
        bottom:20,
        top:80,
        margin:40,
        padding:20,
        paddingBottom:-30,
        overflow:"scroll",
        backgroundColor:"#D5D3D6"
    }
}));
const lodging="Tryst has been hosting enthusiastic students and participants in huge numbers since its inception. We, at Tryst, aim to ensure that the overall experience of all the attendees, participants and speakers is safe and comfortable. In this process, we also provide paid accommodation to all those interested to stay within IITD campus, during Tryst. The tariffs for the accommodation are also basic and minimal. Please follow this link to book your accommodation at IIT Delhi during Tryst 2020.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. Tryst is the annual Technical and Manangement festival of IIt Delhi. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor. We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor."

export default function HomePage(props) {
    const classes = useStyles();
    return (
        <Container disableGutters="true" classes={classes}>
            <NavBar threshold={10}/>
            <Fade in={true} timeout={1000}>
                <Typography variant="h3" color="secondary" align="center" className={classes.heading}>
                    LODGING
                </Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <Paper elevation={20} component="h3" background="inherit" className={classes.paper}>
                    {lodging}
                </Paper>
            </Fade>
        </Container>
    )
}