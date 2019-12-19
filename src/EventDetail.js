import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from './ImageBanner';

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
            backgroundImage: 'url(http://source.unsplash.com/collection/146130/random)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        imageBanner:{
            height:420,
            width:1000,
            overflow:"hidden",
            marginLeft:8
        },
        data:{
            margin:20,
            fontSize:25
        },
        tabs:{
            fontSize:20,
            marginTop:20,
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
            
            <Dialog
                open={true}
                maxWidth="false"
                className={classes.dialog}
                // TransitionComponent={Transition}
            >
                <DialogTitle className={classes.category}>
                    {post.category}
                </DialogTitle>
                {/* <Paper className={classes.paper}> */}
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
                            variant="fullWidth"
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
                {/* </Paper> */}
            </Dialog>
            
        </div>
    );
}