import React from 'react';
import NavBar from './TopNavBar';
import LandingScreen from './themeComponents/LandingScreen';
import SVGVerticalLine from './themeComponents/SVGVerticalLine';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import TimelineDot from './themeComponents/TimelineDot';
import DateLabel from './themeComponents/DateLabel';
import SVGLeftFork from './themeComponents/SVGLeftFork';
import SVGRightFork from './themeComponents/SVGRightFork';
import TextBox from './themeComponents/TextBox';
import { Typography } from '@material-ui/core';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class ThemePage extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        const tween = new TimelineMax()
                    .add(TweenMax.to("#verticalLine", 1, {strokeDashoffset: "0px"}, Linear.easeNone));
        
        new ScrollMagic.Scene({
            triggerElement: '#startLineScroll',
            duration: "150%",
        })
        .setTween(tween)
        .addTo(this.controller);

        
    }

    render() {
        return (
            <>
                <NavBar threshold={10} backgroundColor="black"></NavBar>
                <LandingScreen/>
                <div>
                    <SVGVerticalLine/>
                    <DateLabel
                        topDistance="104%"
                        leftDistance="52.5%"
                        labelID="1"
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
                    <TextBox>
                        <Typography variant="body1">
                            <i>January 18, 2010</i><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>

                    </TextBox>
                </div>
            </>
        );
    }
}
export default ThemePage;