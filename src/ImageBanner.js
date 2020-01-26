import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    imageBanner: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: `linear-gradient(
        rgba(0, 0, 0, 0.9),
        rgba(0,0, 0, 0.3)
      )`
    },
    imageBannerContent: {
      position: 'relative',
      padding: theme.spacing(3),
      margin: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));

  export default function ImageBanner(props) {
    const classes = useStyles();
    const { post, ...others } = props;
  
    return (
      <Paper className={classes.imageBanner} style={{ backgroundImage: `url(${post.image})` }} {...others}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.imageBannerContent}>
              <Fade in={true} timeout={1000}>
                  <Typography component="h1" style={{fontFamily:['Gothic A1','serif'].join(','),fontSize:"53px"}} color="inherit" gutterBottom>
                    {post.title}
                  </Typography>
              </Fade>
              <Fade in={true} timeout={2000}>
                  <Typography style={{fontFamily:['Questrial','serif'].join(','),fontSize:"20px"}} color="inherit" paragraph>
                    {post.description}
                  </Typography>
              </Fade>
              <Fade in={true} timeout={3000}>
                  <Link variant="subtitle1" href="#">
                    {post.linkText}
                  </Link>
              </Fade>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  
  ImageBanner.propTypes = {
    post: PropTypes.object,
  };