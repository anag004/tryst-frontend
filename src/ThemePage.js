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
                {/* First section */}
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#83C4CF",
                        background: "-webkit-linear-gradient(top left, #83C4CF, #D2F5FA)",
                        background: "-moz-linear-gradient(top left, #83C4CF, #D2F5FA)",
                        background: "linear-gradient(to bottom right, #83C4CF, #D2F5FA)",
                    }}
                >  
                    <SVGVerticalLine controller={this.controller} lineID="1" topPosition="5%"/>
                    <DateLabel
                        topDistance="4%"
                        leftDistance="52.5%"
                        labelID="1"
                        year="2016"
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
                    <TextBox
                        date="January 18, 2016"
                        description="The world's first high-res VR head set for personal use."
                        heading="Oculus Rift released"
                        textBoxID="1"
                        topPosition="35%"
                        leftPosition="60%"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={oculus_image}
                        imageID="1"
                        controller={this.controller}
                        topPosition="45%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        background: "#FAF494",
                        background: "-webkit-linear-gradient(top left, #FAF494, #FFFFFF)",
                        background: "-moz-linear-gradient(top left, #FAF494, #FFFFFF)",
                        background: "linear-gradient(to bottom right, #FAF494, #FFFFFF)"
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
                        year="2017"
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
                    <TextBox
                        date="January 18, 2017"
                        heading="Electric cars"
                        description="The year saw the revolutionary masterpieces namely Tesla motors model 3 and BMW i3, the all electric vehicles being rapidly mass produced. "
                        textBoxID="2"
                        topPosition="30%"
                        leftPosition="5%"
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
                        url={electric_cars_image}
                        imageID="2"
                        controller={this.controller}
                        topPosition="20%"
                        leftPosition="60%"
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
                        lineID="3" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="3"
                        year="2018"
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
                    <TextBox
                        date="January 18, 2018"
                        heading="3D Metal Printing"
                        description="HP opens preorders for its industrial-scale Metal Jet printers"
                        textBoxID="3"
                        topPosition="20%"
                        leftPosition="55%"
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
                        url={metal_printing_image}
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
                        background: "#FFFFFF",
                        background: "-webkit-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        background: "-moz-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        background: "linear-gradient(to bottom right, #FFFFFF, #9D9D9D)"
                    }}
                >  
                    {/* Fourth section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="4" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="4"
                        year="2019"
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
                    <TextBox
                        date="January 18, 2019"
                        heading="Fusion reactor"
                        description="New nuclear designs promise to make fusion power safer and cheaper. "
                        textBoxID="4"
                        topPosition="20%"
                        leftPosition="55%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="8"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={fusion_image}
                        imageID="4"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
            </>
        );
    }
}
export default ThemePage;