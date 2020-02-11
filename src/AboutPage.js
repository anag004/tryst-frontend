import React from 'react';
import NavBar from './TopNavBar';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import MetaTags from 'react-meta-tags'

const useStyles = makeStyles((theme) => ({
    video: {
        margin: "auto", 
        display: "block",
        marginTop: theme.spacing(3)
    },
    title: {
        marginTop: theme.spacing(15),
        margin: "auto", 
        display: "block",
    },
    bodyText: {
        maxWidth: "80%", 
        margin: "auto", 
        display: "block",
        marginTop: theme.spacing(3),
    }
}));

function AboutPage(props) {
    const classes = useStyles();

    return (
        <div>
            <MetaTags>
                <meta name="description" content="Tryst 2020 is all about a journey through the last decade. We bring to you Reminiscence : Denouement of the decade. And to celebrate the same we have multiple events lined up for you. From every aspect of science and engineering, you can definitely find a way to two to display your skills. With exciting awards and mind blowing prize money, be sure to have an experience like never before!" />
            </MetaTags>
            <Fade in={true} timeout={1000}>
                <Typography align="center" variant="h4" className={classes.title}>About Tryst</Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <div className={classes.bodyText}>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </div>
            </Fade>
            <NavBar threshold={10} backgroundColor="black" disableOpacity={true}/>
            <div
                className={classes.video}
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
                >
                <iframe
                    style={{
                    position: "absolute",
                    top: "0",
                    left: "10%",
                    width: "80%",
                    height: "80%",
                    margin: "auto",
                        display: "block"
                    }}
                    src={`https://www.youtube.com/embed/sNwukK7Y8wQ`}
                    frameBorder="0"
                />
                </div>
        </div>
    )
} 

export default AboutPage;