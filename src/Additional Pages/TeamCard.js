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
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import md5 from 'md5';

function SponsorCard(props) {
    const { cardHeading, cardImage, backgroundColor, cardDescription, email, others } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: backgroundColor ? backgroundColor : "white",
            maxWidth:200,
            alignItems:"center",
            margin:"auto"

        },
        media: {
            height: 140,
        },
    }));
    
    const classes = useStyles();
    let gravatar = "";

    if (cardImage == "") {
        const hash = md5(email + cardHeading + cardDescription);
        gravatar = `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon&r=PG`;
    }

    return (
            <Grid item xs>
                <Zoom>
                    <Card className={classes.card} classes={classes} >
                        <CardActionArea>
                            <CardMedia className={classes.media} image={cardImage === "" ? gravatar : cardImage} {...others}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {cardHeading}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {cardDescription}
                                </Typography>
                                <Link href={"mailto:" + email} color="inherit">
                                    {email}
                                </Link>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Link href={"mailto:" + email} color="inherit">
                                {email}
                            </Link>
                        </CardActions> */}
                    </Card>
                </Zoom>
            </Grid>
    );
}

export default withRouter(SponsorCard);