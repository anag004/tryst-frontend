import React from 'react';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class TestPage extends React.Component {
   constructor(props) {
       super(props);
       this.controller = new ScrollMagic.Controller();
   }

   componentDidMount() {
       new ScrollMagic.Scene({
           triggerElement: '#scrollStarts',
           duration: 400,
           offset: 200
       })
        .setTween("#myElement", {
            left: "400px",
            color: "red"
        })
        .setPin("#myElement")
        .addTo(this.controller);
   }

   render() {
    return (
      <>
        <div style={{ height: "500px", background: "orange" }}>
          Space before Scroll!
        </div>
        <div id="scrollStarts">
          Scrolling animation starts when this is in the middle ------->
        </div>
        <div style={{ height: "600px", background: "yellow" }}>
          <div
            id="wrapper"
            style={{ height: "800px", background: "lightgreen" }}
          >
            <h1 id="myElement">Hiiiiiii</h1>
          </div>
        </div>
      </>
    );
  }
    
};

export default TestPage;