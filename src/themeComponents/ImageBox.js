import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Elastic, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const styles = theme => ({
    image: {
        display: "inline-block",
        maxWidth: "40%",
        opacity: 0,
        transform: "translateY(100px)",
        // border: "1px solid #ddd",
        // borderRadius: "4px",
        // padding: "5px",
        margin: 0,
        padding: 0,
        fontSize: 0
    }
});

class ImageBox extends React.Component {
    componentDidMount() {
        const tween = new TimelineMax()
                    // .add(TweenMax.to("#imageScroll" + this.props.imageID, 1, {css: {translatey: "-20px"}, ease:  Elastic.easeInOut}))
                    .add(TweenMax.to("#imageScroll" + this.props.imageID, 1, {opacity: 1, translateY: 0, ease:  Linear.easeNone}));
        new ScrollMagic.Scene({
            triggerElement: "#imageScroll" + this.props.imageID,
            duration: 400,
            offset: -300
        })
        .setTween(tween)
        .addTo(this.props.controller);
    }

    render() {
        return (
            <Card 
                id={"imageScroll" + this.props.imageID} 
                style={{
                    position:"absolute",
                    top: this.props.topPosition,
                    left: this.props.leftPosition
                }}
                className={this.props.classes.image}
                square
            >
                <img src={this.props.url} style={{maxWidth:"100%"}}></img>
            </Card>
        )
    }
}

export default withStyles(styles)(ImageBox);