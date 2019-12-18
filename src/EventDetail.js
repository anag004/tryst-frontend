import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade } from '@material-ui/core';
import ImageBanner from './ImageBanner';

export default function EventDetail(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;
    const useStyle = makeStyles (() => ({
        root: {
            backgroundColor: containerBackgroundColor,
            color:textColor,
            position:"absolute",
            top:0,
            // bottom:0,
            margin:0
        },
        imageBanner:{
            marginTop:30
        },
        heading:{
            textDecoration:""
        }
    }));
    const classes=useStyle()
    const post = {
        title: 'Events @Tryst',
        description:
          "We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum..",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue Reading...',
        descriptionText:"We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor.We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum. Curabitur malesuada in magna interdum congue. Etiam viverra nisi sed tempor ullamcorper. Mauris eget felis diam. Aenean vel urna libero. Etiam nunc mauris, maximus id orci a, facilisis pretium tortor."
      };
    return (
        <Container maxWidth="false" classes={classes}>
            <div className={classes.imageBanner}>
                <Fade in={true} timeout={1000}> 
                    <ImageBanner post={post}/>
                </Fade>
            </div>
            <Fade in={true} timeout={2000} className={classes.heading}>
                <Typography variant="h2" color="inherit" paragraph>
                    {post.title}
                </Typography>
            </Fade>
            <br/>
            <Fade in={true} timeout={2000}>
                <Typography variant="h5" color="inherit" paragraph>
                    {post.descriptionText}
                </Typography>
              </Fade>
            
        </Container>
    );
}