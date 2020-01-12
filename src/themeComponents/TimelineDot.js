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
        console.log(this.props.radius + "px");
        return (
            <div 
                id={"dotScroll" + this.props.dotID}
                style={{
                    position: "absolute",
                    backgroundColor: "black",
                    borderRadius: this.props.radius + "px",
                    height: 2 * this.props.radius + "px",
                    width: 2 * this.props.radius + "px",
                    transform: "scale(0.05)",
                    left: "50%",
                    marginLeft: -this.props.radius + "px",
                    top: this.props.topPosition
                }}
            >
            </div>
        )
    }
};

export default TimelineDot