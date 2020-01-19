import React from 'react';
import NavBar from './TopNavBar';
import LandingScreen from './themeComponents/LandingScreen';
import SVGVerticalLine from './themeComponents/SVGVerticalLine';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear, CSSPlugin } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import TimelineDot from './themeComponents/TimelineDot';
import DateLabel from './themeComponents/DateLabel';
import SVGLeftFork from './themeComponents/SVGLeftFork';
import SVGRightFork from './themeComponents/SVGRightFork';
import TextBox from './themeComponents/TextBox';
import { Typography } from '@material-ui/core';
import ImageBox from './themeComponents/ImageBox';
import oculus_image from './images/oculus.jpg';
import electric_cars_image from './images/electric_cars.jpg';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
// Write this line so that webpack does not drop plugins
const plugins = [ CSSPlugin ];

class ThemePage extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    render() {
        return (
            <>
                <div style={{position: "absolute", top: 0, left: 0, visibility: "hidden", height: "1000%", width: "100%"}}></div>
                <NavBar threshold={10} backgroundColor="black"></NavBar>
                <LandingScreen/>
                <div> 
                    <SVGVerticalLine controller={this.controller} lineID="1" topPosition="105%"/>
                    <DateLabel
                        topDistance="104%"
                        leftDistance="52.5%"
                        labelID="1"
                        year="2016"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="1" 
                        controller={this.controller}
                        radius={10}
                        topPosition="105%"
                    />
                    <SVGRightFork
                        forkID="1"
                        topPosition="120%"
                        controller={this.controller}
                        height="15"
                        width="30"
                    />
                    <SVGLeftFork
                        forkID="2"
                        topPosition="130%"
                        controller={this.controller}
                        width="20"
                        height="15"
                    />
                    <TextBox
                        date="January 18, 2016"
                        description="The world's first high-res VR head set for personal use."
                        heading="Oculus Rift released"
                        textBoxID="1"
                        topPosition="135%"
                        leftPosition="60%"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={oculus_image}
                        imageID="1"
                        controller={this.controller}
                        topPosition="145%"
                        leftPosition="5%"
                    />
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="2" 
                        topPosition="200%"
                    />
                    <DateLabel
                        topDistance="200%"
                        leftDistance="52.5%"
                        labelID="2"
                        year="2017"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="2" 
                        controller={this.controller}
                        radius={10}
                        topPosition="200%"
                    />
                    <SVGLeftFork
                        forkID="3"
                        topPosition="220%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <TextBox
                        date="January 18, 2017"
                        heading="Electric cars"
                        description="The year saw the revolutionary masterpieces namely Tesla motors model 3 and BMW i3, the all electric vehicles being rapidly mass produced. "
                        textBoxID="2"
                        topPosition="240%"
                        leftPosition="5%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="4"
                        topPosition="210%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={electric_cars_image}
                        imageID="2"
                        controller={this.controller}
                        topPosition="220%"
                        leftPosition="60%"
                    />
                </div>
            </>
        );
    }
}
export default ThemePage;