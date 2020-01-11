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
            left: "50%",
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
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="350" height="200">
                <path 
                    style={{
                        strokeLinecap: "round", 
                        strokeLinejoin: "round", 
                        strokeDasharray: "1009.22px", 
                        strokeDashoffset: "0", 
                        fill: "none", 
                    }}
                    stroke="#000000"
                    strokeWidth="5" 
                    d={`M22.328,70.018c9.867-7.4,10.724,20.434,13.014,28.694c-0.08-9.105-1.308-31.463,11.936-31.886
                    c11.313-0.361,17.046,19.368,16.367,28.098c-1.432-10.289,6.234-30.682,18.163-25.671c11.505,4.833,8.682,26.772,20.071,31.964
                    c13.06,5.953,14.854-8.305,19.734-17.017c7.188-12.836,4.933-15.417,29.6-14.8c-8.954-3.842-37.42,1.728-28.539,20.1
                    c5.823,12.045,34.911,12.583,30.018-8.873c-5.385,17.174,24.01,23.104,24.01,9.123c0-9.867,3.816-15.937,16.034-18.5
                    c8.359-1.754,18.982,4.754,25.9,9.25c-10.361-4.461-51.941-13.776-37.749,12.357c9.435,17.372,50.559,2.289,33.477-6.063
                    c-2.871,19.008,32.415,31.684,30.695,54.439c-2.602,34.423-66.934,24.873-79.302,2.134c-13.11-24.101,38.981-36.781,54.798-40.941
                    c8.308-2.185,42.133-12.162,25.88-25.587c-2.779,17.058,19.275,28.688,29.963,12.911c6.862-10.131,6.783-25.284,30.833-19.117
                    c-9.404-0.429-32.624-0.188-32.864,18.472c-0.231,17.912,21.001,21.405,40.882,11.951`}
                    ></path>
                <path id="dot" 
                    style={{
                        strokeLinecap: "round", 
                        strokeLinejoin: "round", 
                        strokeDasharray: "44.297px", 
                        strokeDashoffset: "44.297px", 
                        fill: "none", 
                    }}
                    stroke="#000000"
                    strokeWidth="5"
                    d="M247.003,38.567c-7.423,1.437-11.092,9.883-1.737,11.142c14.692,1.978,13.864-13.66,1.12-8.675">
                </path>
            </svg>
          </div>
        </div>
      </>
    );
  }
    
};

export default TestPage;