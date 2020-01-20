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
import fusion_image from './images/fusion_image.jpg';
import metal_printing_image from './images/metal_printing.jpg';

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
                    {/* First section */}
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
                    {/* Second section */}
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
                        topPosition="230%"
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
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="3" 
                        topPosition="296%"
                    />
                    <DateLabel
                        topDistance="296%"
                        leftDistance="52.5%"
                        labelID="3"
                        year="2018"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="3" 
                        controller={this.controller}
                        radius={10}
                        topPosition="296%"
                    />
                    <SVGLeftFork
                        forkID="5"
                        topPosition="330%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <TextBox
                        date="January 18, 2018"
                        heading="3D Metal Printing"
                        description="HP opens preorders for its industrial-scale Metal Jet printers"
                        textBoxID="3"
                        topPosition="320%"
                        leftPosition="55%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="6"
                        topPosition="310%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={metal_printing_image}
                        imageID="3"
                        controller={this.controller}
                        topPosition="335%"
                        leftPosition="5%"
                    />
                    {/* Fourth section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="4" 
                        topPosition="390%"
                    />
                    <DateLabel
                        topDistance="390%"
                        leftDistance="52.5%"
                        labelID="4"
                        year="2019"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="4" 
                        controller={this.controller}
                        radius={10}
                        topPosition="390%"
                    />
                    <SVGLeftFork
                        forkID="7"
                        topPosition="430%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <TextBox
                        date="January 18, 2019"
                        heading="Fusion reactor"
                        description="New nuclear designs promise to make fusion power safer and cheaper. "
                        textBoxID="4"
                        topPosition="420%"
                        leftPosition="55%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="8"
                        topPosition="410%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={fusion_image}
                        imageID="4"
                        controller={this.controller}
                        topPosition="435%"
                        leftPosition="5%"
                    />
                </div>
            </>
        );
    }
}
export default ThemePage;