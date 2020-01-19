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
                    />
                    <TextBox
                        date="January 18, 2010"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        heading="Curiosity lands on Mars"
                        textBoxID="1"
                        topPosition="140%"
                        leftPosition="60%"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={oculus_image}
                        imageID="1"
                        controller={this.controller}
                    />
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="2" 
                        topPosition="205%"
                    />
                    <DateLabel
                        topDistance="204%"
                        leftDistance="52.5%"
                        labelID="2"
                        year="2010"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="2" 
                        controller={this.controller}
                        radius={10}
                        topPosition="205%"
                    />
                    <SVGRightFork
                        forkID="2"
                        topPosition="220%"
                        controller={this.controller}
                    />
                    <TextBox
                        date="January 18, 2011"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        textBoxID="2"
                        topPosition="240%"
                        leftPosition="60%"
                        controller={this.controller}
                    />
                </div>
            </>
        );
    }
}
export default ThemePage;