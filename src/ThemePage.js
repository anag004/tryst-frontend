import React from 'react';
import NavBar from './TopNavBar';
import LandingScreen from './themeComponents/LandingScreen';
import SVGVerticalLine from './themeComponents/SVGVerticalLine';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear, CSSPlugin, Elastic } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import TimelineDot from './themeComponents/TimelineDot';
import DateLabel from './themeComponents/DateLabel';
import SVGLeftFork from './themeComponents/SVGLeftFork';
import SVGRightFork from './themeComponents/SVGRightFork';
import TextBox from './themeComponents/TextBox';
import { Typography } from '@material-ui/core';
import ImageBox from './themeComponents/ImageBox';
import jack_image from './images/iPhone.jpg';
import life_image from './images/SyntheticLife.jpg';
import spotify_image from './images/Spotify.jpg';
import twitch_image from './images/Twitch.jpg';
import electric_cars_image from './images/electric_cars.jpg';
import fusion_image from './images/fusion_image.jpg';
import metal_printing_image from './images/3dprint.jpg';
import { Timeline } from 'gsap/gsap-core';
import NavigationIcon from '@material-ui/icons/Navigation';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import higgs_image from './images/HiggsBoson.jpg';
import avengers_image from './images/Avengers.jpg';
import mangal_image from './images/mangalyaan.jpg';
import gravitation_image from './images/GravWaves.jpg';
import echo_image from './images/Amazonecho.jpg';
import spacex_image from './images/SpaceX.jpg';
// TODO This image does not exist currently
import india_image from './images/oculus.jpg';
import iphone_image from './images/iPhone4.jpg';
import proxima_image from './images/ProximaB.jpg';
import homo_image from './images/Fossil.jpg';
import cambridge_image from './images/CambridgeAnalytica.jpg';
import babies_image from './images/CrisprBabies.jpg';
import blackhole_image from './images/Black hole.jpg';
import larry_image from './images/Larry.png';
import { createMuiTheme } from "@material-ui/core";
import crissCross from "./images/criss-cross.png";
import crissCrossDark from "./images/criss-cross-dark.png";
import herringBone from "./images/herringbone.png";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
// Write this line so that webpack does not drop plugins
const plugins = [ CSSPlugin ];

const styles = theme => ({
    paper: {
        position: "absolute",
        top: "70%",
        left: "50%",
        marginLeft: -130,
        display: "inline-block",
        backgroundColor: "white",
        padding: theme.spacing(4),
        transform: "scale(0)"
    }
});

class ThemePage extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        const tween = new TimelineMax()
                        .add(TweenMax.to("#trystContainer", 1, {scale: 1, ease: Elastic.easeInOut}))
                        .add(TweenMax.to("#trystYear", 1, {opacity: 1, ease: Linear.easeNone}))
                        .add(TweenMax.to("#trystTitle", 1, {opacity: 1, ease: Linear.easeNone}))
                        .add(TweenMax.to("#trystDate", 1, {scale: 1, ease: Elastic.easeInOut}));

        new ScrollMagic.Scene({
            triggerElement: "#dotScroll5",
            duration: 100,
            offset: -100
        })
        .setTween(tween)
        .addTo(this.controller);
    }

    render() {
        return (
            <>
                <div style={{position: "absolute", top: 0, left: 0, visibility: "hidden", width: "100%"}}></div>
                <NavBar threshold={10} backgroundColor="black"></NavBar>
                <LandingScreen/>
                {/* First section */}
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        // background: "#83C4CF",
                        // background: "-webkit-linear-gradient(top left, #83C4CF, #D2F5FA)",
                        // background: "-moz-linear-gradient(top left, #83C4CF, #D2F5FA)",
                        // background: "linear-gradient(to bottom right, #E94B3CFF, #D2F5FA)",
                        // background: "#E94B3CFF",
                        background: "url(" + crissCross + ")",
                        backgroundRepeat: "repeat",
                    }}
                >  
                    <SVGVerticalLine controller={this.controller} lineID="1" topPosition="5%"/>
                    <DateLabel
                        topDistance="4%"
                        leftDistance="52.5%"
                        labelID="1"
                        year="2010"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="1" 
                        controller={this.controller}
                        radius={10}
                        topPosition="5%"
                    />
                    <SVGRightFork
                        forkID="1"
                        topPosition="20%"
                        controller={this.controller}
                        height="15"
                        width="30"
                    />
                    <SVGLeftFork
                        forkID="2"
                        topPosition="30%"
                        controller={this.controller}
                        width="20"
                        height="15"
                    />
                    <ImageBox
                        url={life_image} 
                        imageID="1_2"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="55%"
                        heading={"Craig Venter creates synthetic life form"}
                    />
                    <ImageBox
                        url={iphone_image}
                        imageID="1"
                        controller={this.controller}
                        topPosition="45%"
                        leftPosition="5%"
                        heading={"iPhone 4 was first unveiled"}
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        // background: "#FAF494",
                        // background: "-webkit-linear-gradient(top left, #FAF494, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #FAF494, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #FAF494, #FFFFFF)"
                        background: "url(" + crissCrossDark + ")",
                        backgroundRepeat: "repeat",
                    }}
                >  
                    {/* Second section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="2" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="2"
                        year="2011"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="2" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="3"
                        topPosition="20%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Launch of Twitch"
                        imageID="2_2"
                        topPosition="30%"
                        leftPosition="5%"
                        url={twitch_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="4"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={spotify_image}
                        imageID="2"
                        heading={"Spotify comes to the US"}
                        controller={this.controller}
                        topPosition="20%"
                        leftPosition="55%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + crissCrossDark + ")",
                        backgroundRepeat: "repeat",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="3" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="3"
                        year="2012"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="3" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="5"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Premiere of Avengers (2012)"
                        imageID="3_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={avengers_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="6"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={higgs_image}
                        heading="Detection of Higgs Boson, the god particle confirmed"
                        imageID="3"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="4" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="4"
                        year="2013"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="4" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="7"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    {/* <ImageBox
                        heading="Avengers Premiere"
                        imageID="4_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={avengers_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="7"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    /> */}
                    <ImageBox
                        url={mangal_image}
                        heading="ISRO launches mangalyan, the Mars Orbiter Mission"
                        imageID="4"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="5" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="5"
                        year="2014"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="5" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="9"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Ligo detects gravitational waves"
                        imageID="5_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={gravitation_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="10"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={echo_image}
                        heading="Launch of amazon echo"
                        imageID="5"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="6" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="6"
                        year="2015"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="6" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="11"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="SpaceX successfully landed its Falcon 9 rocket"
                        imageID="6_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={spacex_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="12"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={india_image}
                        heading="Digital India was launched"
                        imageID="6"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="7" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="7"
                        year="2016"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="7" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="13"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Apple kills the headphone jack"
                        imageID="7_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={jack_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="14"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={proxima_image}
                        heading="Astronomers announced that a Earth-like planet orbits Proxima Centauri"
                        imageID="7"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="8" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="8"
                        year="2017"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="8" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="15"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Oldest Homo sapiens fossil claim rewrites our species' history"
                        imageID="8_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={homo_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="16"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={cambridge_image}
                        heading="Facebook Cambridge Analytical Data Scandal"
                        imageID="8"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#A6FA94",
                        background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="9" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="9"
                        year="2018"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="9" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="17"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="First CRISPR babies born"
                        imageID="9_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={babies_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="18"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={metal_printing_image}
                        heading="First 3d metal printing"
                        imageID="9"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "160%",
                        width: "100%",
                        background: "#FFFFFF",
                        background: "-webkit-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        background: "-moz-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        background: "linear-gradient(to bottom right, #FFFFFF, #9D9D9D)"
                    }}
                >  
                    {/* Last section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="last" 
                        topPosition={-10}
                        height="90%"
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="last"
                        year="2019"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="last" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="last"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="NASA releases first Black hole image"
                        url={blackhole_image}
                        imageID="last"
                        topPosition="20%"
                        leftPosition="55%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="last_2"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={larry_image}
                        heading={"Page and Brin leave Google"}
                        imageID="last"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                     <TimelineDot 
                        dotID="last_2" 
                        controller={this.controller}
                        radius={10}
                        topPosition="60%"
                    />
                    <Card className={this.props.classes.paper} id="trystContainer">
                        <Typography variant="h4" id="trystYear" align="center"
                            style={{
                                position: "relative",
                                // top: "66%",
                                // left: "50%",
                                // marginLeft: -30,
                                opacity: "0"
                            }}
                        >2020
                        </Typography>
                        <br/>
                        <Typography variant="h1" align="center" id="trystTitle" align="center"
                            style={{
                                position: "relative",
                                // left: "0%",
                                // marginLeft: -100,
                                opacity: "0"
                            }}
                        >
                            Tryst
                        </Typography>
                        <br/>
                        <Typography variant="h5" id="trystDate" align="center"
                            style={{
                                position: "relative",
                                // top: "83%",
                                // left: "50%",
                                // marginLeft: -50,
                                transform: "scale(0)",
                            }}
                        >6-8 March</Typography>
                    </Card>
                </div>
            </>
        );
    }
}
export default withStyles(styles)(ThemePage);