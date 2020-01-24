import React, { Fragment } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { withRouter } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: props => ({
        backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
    }),
    media: {
        height: 140,
    },
    register: {
        marginLeft: 'auto'
    }
}));

function EventCard(props) {
    const { cardHeading, cardImage, cardDescription,left, right, xs, maxWidth, maxHeight, backgroundColor, history, linkTo, rippleTriggerFunction, others } = props;
    
    // console.log(rippleTriggerFunction);
    const classes = useStyles();

    const handleClick = (event) => {
        setTimeout(() => history.push(linkTo) , 700);
    } 

    return (
            <Grid item xs>
                <Zoom left={left} right={right}>
                    <Card className={classes.card} classes={classes} >
                        <CardActionArea onClick={(e) => {rippleTriggerFunction(e); handleClick(e)}}>
                            <CardMedia className={classes.media} image={cardImage} {...others}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" style={{marginBottom:5}} component="h2">
                                    {cardHeading}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {cardDescription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions disableSpacing>
                             <Button className={classes.register}>Register</Button> 
                            <Typography variant="body">Here are some prizes</Typography>
                        </CardActions> */}
                    </Card>
                </Zoom>
            </Grid>
    );
}

export default withRouter(EventCard);