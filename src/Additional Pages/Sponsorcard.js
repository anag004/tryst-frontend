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

function SponsorCard(props) {
    const { cardHeading, cardImage, backgroundColor, others } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: backgroundColor ? backgroundColor : "white",
            maxWidth:450,
            alignItems:"center",
            margin:"auto"

        },
        media: {
            height: 140,
        },
    }));
    
    const classes = useStyles();

    return (
            <Grid item xs>
                <Zoom>
                    <Card className={classes.card} classes={classes} >
                        <CardActionArea>
                            <CardMedia className={classes.media} image={cardImage} {...others}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {cardHeading}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Zoom>
            </Grid>
    );
}

export default withRouter(SponsorCard);