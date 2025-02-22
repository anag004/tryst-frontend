import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: props => ({
        backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
        alignItems:"center",
        margin:"auto"

    }),
    // media: {
    //     height: 140,
    //     width:"inherit"
    // },
}));

function SponsorCard(props) {
    const largeScreen = useMediaQuery('(min-width:500px)');
    const { cardHeading, cardImage, linkTo, history, backgroundColor, others } = props;
    const handleClick=()=>{
        if(linkTo.length>0){
            window.open(linkTo)
        }
        
    }
    const classes = useStyles(props);

    return (
            <Grid item xs>
                <Zoom>
                    <Card className={classes.card} classes={classes} >
                        <CardActionArea onClick={handleClick}>
                            {/* <CardMedia className={classes.media} image={cardImage} {...others}/> */}
                            <img src={cardImage} style={{width:"inherit",height:largeScreen?"170px":"80px"}}></img>
                            {/* <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {cardHeading}
                                </Typography>
                            </CardContent> */}
                        </CardActionArea>
                    </Card>
                </Zoom>
            </Grid>
    );
}

export default withRouter(SponsorCard);