import React, { useState, Fragment } from 'react';
import { Card, CardMedia, CardContent, Typography, Zoom} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function PageSection(props) {
    const {event, textColor, ...others } = props;
    const [onHover,setOnHover]=useState(false);


    const useStyle = makeStyles({
        card: {
            // width:300,,
            height:onHover?"110%":"100%",
            width:onHover?"115%":"100%",
            
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
            height:"30%"
        },
        cardContent: {
            flexGrow: 1,
        },
    });
    
    const classes = useStyle();

    return (
        <Fragment>
                <Card className={classes.card} onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)} >
                    <CardMedia
                        className={classes.cardMedia}
                        image={event.image}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" color={textColor}>
                            {event.Title}
                        </Typography>
                    </CardContent>
                </Card>
            
        </Fragment>
    );
}

export default PageSection;