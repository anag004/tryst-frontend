import React from "react";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class SVGLeftFork extends React.Component {
    componentDidMount() {
        const tween = new TimelineMax()
                    .add(TweenMax.to("#forkScroll" + this.props.forkID, 1, {strokeDashoffset: "0px", ease:  Linear.easeNone}));
        
        new ScrollMagic.Scene({
            triggerElement: "#startForkScroll" + this.props.forkID,
            duration: 200,
            offset: -100
        })
        .setTween(tween)
        .addTo(this.props.controller);
    }

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: this.props.topPosition,
                    left: "20%",
                    width: "30%",
                    height: "30%",
                }}
            >
                <div 
                    id={"startForkScroll" + this.props.forkID}
                ></div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                version="1.1"
                viewBox="0 0 59.185 46.783"
                >
                <path
                    id={"forkScroll" + this.props.forkID}
                    fill="none"
                    stroke="#000"
                    strokeDasharray="90px"
                    strokeDashoffset="90px"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="0.7"
                    d="M99.829 24.901l-59 25.799v20.863"
                    transform="translate(-40.697 -24.78)"
                ></path>
                </svg>
            </div>
        );
    }
}

export default SVGLeftFork;
