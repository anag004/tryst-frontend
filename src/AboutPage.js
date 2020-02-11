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
        color:"white"
    },
    bodyText: {
        maxWidth: "80%", 
        margin: "auto", 
        display: "block",
        marginTop: theme.spacing(3),
        color:"white"
    }
}));

function AboutPage(props) {
    const classes = useStyles();

    return (
        <div>
            <MetaTags>
            <meta name="title_Page" content="TRYST 2020, IIT Delhi, About TRYST" />
            </MetaTags>
            <div style={{position:"fixed",top:0,width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#1e314f"}} />
            <Fade in={true} timeout={1000}>
                <Typography style={{fontFamily:['Antic Slab','serif'].join(','), marginBottom:10}} align="center" variant="h4" className={classes.title}>About Tryst</Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <div className={classes.bodyText}>
                    <Typography style={{fontFamily:['Montserrat','sans-serif'].join(',')}} variant="h6">
                        Following a dull period of the year, comes the glorious 3 days of Tryst '20. It is the arena where minded thoughts meet,where talent meetsthe triumph,the brainstorming meets the realism.<br/>
                        It is the perfect launchpad for the techies to showcase their intelligence and inventiveness. Tryst '20 one of the most acknowledged technical fest of India is intended to be an exceptional rejuvenating experience for the participants.<br/>
                        With Tryst '19 witnessing a multifold increase in it's outreach, Tryst 2020 does not plan to stop and aims to be the biggest and the best rendition of itself.
                    </Typography>
                </div>
            </Fade>
            <br/>
            <NavBar threshold={10} backgroundColor="#192841" disableOpacity={true}/>
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
                    height: "60%",
                    margin: "auto",
                        display: "block"
                    }}
                    src={`https://drive.google.com/file/d/19x8M93KWhdA6_JvbuU3KvU3u0aTRCqlZ/preview`}
                    allow="autoplay"
                    frameBorder="0"
                    allowFullScreen
                />
                </div>
        </div>
    )
} 

export default AboutPage;