//things that can be done: zoom in effect on the specific event that is hovered upon, buttons for scrolling left or right
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import MyCard from './MyCard'

function PageSection(props) {
    const { heading, headingAlignment, containerBackgroundColor, subheading, subheadingAlignment, textColor, events, ...others } = props;

    const useStyle = makeStyles({
        root: {
            backgroundColor: containerBackgroundColor,
            color:textColor,
            padding:"20px",
            paddingLeft:"30px",
            marginLeft:"20px",
            marginTop:"20px",
        },
        scrollingWrapper:{
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
        },
        scrollingCards:{
            display: "inline-block",
            width:280,
            height:370,
            margin:15,
            overflow:"hidden"
        },
    });
    const [onHover,setOnHover]=useState(false);

    const classes = useStyle();

    return (
        <Container className={classes.root} onMouseEnter={()=>{setOnHover(true)}} onMouseLeave={()=>setOnHover(false)}>
            <Link href="#" color="inherit">
{/*this link is for the event category page.*/}
                <Typography variant="h2" align={headingAlignment} color="inherit" >{heading}</Typography>
                <Typography variant="h5" align={subheadingAlignment} color="inherit"> {subheading} </Typography>
            </Link>
            {onHover&& (
                <Fade in="true" timeout={1000}>
                    <div className={classes.scrollingWrapper}>
                        {events.map(obj=>(//link for the specific event. 
                            <Link className={classes.scrollingCards} href="#">
                                 <MyCard event={obj} textColor={textColor}/>
                            </Link>
                        ))}
                    </div>
                </Fade>)
            }
            
        </Container>
    );
}

export default PageSection;