import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal';
import Box from '@material-ui/core/Box';


export default function EventCard(props) {
    const { cardHeading, cardImage, cardDescription, maxWidth, maxHeight, others } = props;
    const useStyles = makeStyles((theme) => ({
        card: {
            maxWidth: maxWidth,
            maxHeight: maxHeight,
        },
        root: {
            border: '0px',
        },
        media: {
            height: 140,
        },
    }));
    const classes = useStyles();
    return (
            <Zoom>
                <Card className={classes.card} classes={classes}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={cardImage} {...others}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {cardHeading}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {cardDescription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Register
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Zoom>
    );
}