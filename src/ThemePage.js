import React from 'react';
import NavBar from './TopNavBar';
import ImageBanner from './ImageBanner';
import LandingScreen from './themeComponents/LandingScreen';
import SVGVerticalLine from './themeComponents/SVGVerticalLine';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const post = {
    category:"The Team",
    title: '',
    description:
      "",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};

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
            duration: "120%",
        })
        .setTween(tween)
        .addTo(this.controller);
    }

    render() {
        return (
            <>
                <NavBar threshold={10} backgroundColor="black"></NavBar>
                <LandingScreen/>
                <SVGVerticalLine/>
            </>
        );
    }
}

export default ThemePage;