import React from 'react';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Elastic } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class TimelineDot extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const tween = new TimelineMax()
                    .add(TweenMax.to("#dotScroll" + this.props.dotID, 1, {scale: 1, ease:  Elastic.easeOut}));
        
        new ScrollMagic.Scene({
            triggerElement: "#dotScroll" + this.props.dotID,
            duration: 200,
            offset: -100
        })
        .setTween(tween)
        .addTo(this.props.controller);
    }

    render() {
        return (
            <div 
                id={"dotScroll" + this.props.dotID}
                style={{
                    position: "absolute",
                    backgroundColor: "black",
                    borderRadius: "10px",
                    height:"20px",
                    width: "20px",
                    transform: "scale(0.05)",
                    left: "50%",
                    marginLeft: "-10px",
                    top: "105%"
                }}
            >
            </div>
        )
    }
};

export default TimelineDot