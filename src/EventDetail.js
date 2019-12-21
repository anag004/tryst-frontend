import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import NavBar from './TopNavBar';

export default function EventDetail(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;
    const [value, setValue] = React.useState("about");

    // const Transition = React.forwardRef(function Transition(props) {
    //     return <Slide timeout={1000} direction="up" />;
    // });

    const post = {
        category:"Tryst Event Category 1",
        title: 'Events @Tryst',
        description:
          "We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum..",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue Reading...',
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
            marginTop:window.innerWidth>500?30:50,
            // backgroundImage: 'url(http://source.unsplash.com/collection/146130/random)',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            
          },
        imageBanner:{
            height:window.innerWidth>1000?390:"auto",
            width:window.innerWidth>1000?1000:"auto",
            overflow:"hidden",
            margin:"auto"
        },
        data:{
            margin:window.innerWidth>1000?20:10,
            fontSize:window.innerWidth>1000?25:15,
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
        <div className={classes.root}>
            <img src="http://source.unsplash.com/collection/146130/random" style={{width:window.innerWidth,height:window.innerHeight, position:"center"}} />
            <Dialog
                open={true}
                maxWidth={false}
                fullScreen={window.innerWidth>500?"false"==="true":"true"==="true"}
                className={classes.dialog}
            >
                <NavBar/>
                <DialogTitle className={classes.category}>
                    {post.category}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <div className={classes.imageBanner}>
                        <ImageBanner post={post}/>
                    </div>
                    <Typography variant="h3" className={classes.heading} > {post.title} </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons='auto'
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
                </DialogContent>
            </Dialog>
        </div>
    );
}