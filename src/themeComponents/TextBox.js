import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Elastic, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const styles = theme => ({
    paper: {
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(2),
        maxWidth: "30%",
        transform: "scale(0)"
    }
});

class TextBox extends React.Component {
    componentDidMount() {
        const tween = new TimelineMax()
                    .add(TweenMax.to("#textBoxScroll" + this.props.textBoxID, 1, {css: {scale: 1}, ease:  Elastic.easeInOut}))
                    .add(TweenMax.to("#textHeader" + this.props.textBoxID, 1, {opacity: 1, ease:  Linear.easeNone}))
                    .add(TweenMax.to("#textBody" + this.props.textBoxID, 1, {opacity: 1, ease:  Linear.easeNone}));
        new ScrollMagic.Scene({
            triggerElement: "#textBoxScroll" + this.props.textBoxID,
            duration: 400,
            offset: -300
        })
        .setTween(tween)
        .addTo(this.props.controller);
    }

    render() {
        return (
            <Card 
                className={this.props.classes.paper} 
                square 
                id={"textBoxScroll" + this.props.textBoxID}
                style={{
                    position: "absolute",
                    top: this.props.topPosition,
                    left: this.props.leftPosition
                }}
            >
                <div id={"textScroll" + this.props.textBoxID} >
                    <div id={"textHeader" + this.props.textBoxID} style={{opacity:0}}>
                        <Typography variant="body1">
                            <i>{this.props.date}</i><br/>
                        </Typography>
                        <Typography variant="h5">
                            {this.props.heading}
                        </Typography>
                    </div>
                    <div id={"textBody" + this.props.textBoxID} style={{opacity:0}}>
                        <Typography variant="body1">
                            {this.props.description}
                        </Typography>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(TextBox);