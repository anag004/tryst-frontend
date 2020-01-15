import React from 'react';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import Typography from "@material-ui/core/Typography";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class DateLabel extends React.Component {
    componentDidMount() {
        const tween = new TimelineMax()
                    .add(TweenMax.to("#dateLabelScroll" + this.props.labelID, 1, {css: {opacity: 1}, ease:  Linear.easeOut}));
        
        new ScrollMagic.Scene({
            triggerElement: "#dateLabelScroll" + this.props.labelID,
            duration: 100,
        })
        .setTween(tween)
        .addTo(this.props.controller);
    }

    render() {
        return (
            <div
                id={"dateLabelScroll" + this.props.labelID}
                style={{
                    position: "absolute",
                    top: this.props.topDistance,
                    left: this.props.leftDistance,
                    opacity: 0,
                    marginLeft: "10px"
                }}
            >
                <Typography variant="h4">
                    2010
                </Typography>
            </div>
        );
    }
}

export default DateLabel;