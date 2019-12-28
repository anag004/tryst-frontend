import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import TopNavBar from './TopNavBar';

export default function EventDetail(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;
    const [value, setValue] = React.useState("about");

    // const Transition = React.forwardRef(function Transition(props) {
    //     return <Slide timeout={1000} direction="up" />;
    // });

    const post = {
        category:"Tryst Event Category 1",
        title: 'Event',
        description:
          "Learn to build and deploy smart AI ",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        postDescription:{
            about:"We are hosting some amazing events this year",
            details:"the event will be held a s folows on this date and this time",
            prize:"The prizes for the event are as follows",
            register:"Follow below to register"
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // showData(post.description.{newValue})
    };
    
    const useStyle = makeStyles (() => ({
        root:{
            scrollbarWidth:"none",
            
        },
        dialog: {
            backgroundImage: 'url(http://source.unsplash.com/collection/146130/random)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        imageBanner:{
            height:420,
            width:window.innerWidth>1000?1000:"auto",
            overflow:"hidden",
            marginLeft:"auto"
        },
        data:{
            margin:window.innerWidth>1000?20:10,
            fontSize:window.innerWidth>1000?20:15
        },
        tabs:{
            fontSize:window.innerWidth>1000?20:"auto",
            marginTop:window.innerWidth>1000?20:"auto",
            color:"black",  
        },
        category:{
            fontSize:20,
            backgroundColor:"#D5D3D6",
        },
        heading:{
            marginTop:20
        },
        dialogContent:{
            backgroundColor:"#D5D3D6",
        }
    }));
    const classes=useStyle()
    return (
        <React.Fragment>
            <TopNavBar threshold={10}/>
            <ImageBanner post={post}/>
            <Paper className={classes.paper}>
                    <Typography variant="h3" className={classes.heading} > {post.title} </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        // className={classes.tabs}    
                    >
                        <Tab label="About" value="about" className={classes.tabs} />
                        <Tab label="Details" value="details" className={classes.tabs} />
                        <Tab label="Prizes" value="prize" className={classes.tabs} />
                        <Tab label="Register" value="register" className={classes.tabs} />
                    </Tabs>
                    <div className={classes.data}>
                        {post.postDescription[value]}
                    </div>
            </Paper>
        </React.Fragment>
    );
}