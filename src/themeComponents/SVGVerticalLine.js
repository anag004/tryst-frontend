import React from "react";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Icon extends React.Component {
  componentDidMount() {
    const tween = new TimelineMax()
                .add(TweenMax.to("#verticalLine" + this.props.lineID, 1, {css: {strokeDashoffset: "0px"}}, Linear.easeNone));
    
    new ScrollMagic.Scene({
        triggerElement: '#startLineScroll' + this.props.lineID,
        duration: "150%",
    })
    .setTween(tween)
    .addTo(this.props.controller);
}

  render() {
    return (
      <div  
        style={{
          marginLeft: "-2.5px",
          position: "absolute",
          top: this.props.topPosition,
          left: "50%",
        }}
      >
        <div 
          id={"startLineScroll" + this.props.lineID}
        ></div>
        <div align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4.724"
            height="742.008"
            version="1.1"
            viewBox="0 0 1.25 196.323"
          >
            <path
              id={"verticalLine" + this.props.lineID}
              fill="none"
              stroke="#000"
              strokeDasharray="200px"
              strokeDashoffset="200px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.25"
              d="M100.647 3.728V200.05"
              transform="translate(-100.022 -3.728)"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Icon;
