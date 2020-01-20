import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import TopNavBar from './TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import ScrollToTop from './ScrollToTop';
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});

export default function EventDetail(props) {

    const [value,setValue]=React.useState([]);
    const useStyle = makeStyles((theme) => ({
        root: {
            padding:theme.spacing(3)
        }, 

        fab: {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            zIndex: 2
        }
    }));

    useEffect(()=>{
        axios.get('/data/sampleData/event'+(props.match.params.id)+'.json')
        .then(res=>{const data=res.data
            // console.log(data)
            setValue(data)
            // console.log(value)
        });
      },[])
    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop/>
                <Grow in={true}>
                    <Fab variant="extended" className={classes.fab} size="medium">
                        <AddIcon fontSize="small"/>
                        register
                    </Fab>
                </Grow>
                <TopNavBar threshold={10}/>
                {value.map(post=>   
                    <div>
                        <Fade in={true}  timeout={1000}>
                            <ImageBanner post={{category:post.category,title:post.eventName,description:post.eventCardDescription,image:post.image,imgText:post.imgText}}/>
                        </Fade>
                        <Fade in={true} timeout={1000}>
                            <Container classes={classes} maxWidth="sm">
                                <Typography variant="h4">Description</Typography>
                                <br/>
                                <Typography variant="body1">
                                    {post.eventDescription} 
                                </Typography>
                                <br></br>
                                <Typography variant="h4">Rules</Typography>
                                <br></br>
                                {(post.rules).description}
                                <Typography variant="body1">
                                    <ol>
                                        {((post.rules).list).map(str=><li>{str}</li>)}
                                    </ol>
                                </Typography>
                                <Typography variant="h4">Prizes</Typography>
                                <br></br>
                                {(post.prizes).description}
                                <Typography variant="body1">
                                    <ul>
                                    {((post.prizes).list).map(str=><li>{str}</li>)}
                                    </ul>
                                </Typography>
                                <Typography variant="body2">
                                    <b> 
                                        {(post.contactInfo).description}
                                    </b>
                                </Typography>
                                <Typography variant="body1">
                                    <ul>
                                        {((post.contactInfo).list).map(str=><li>{str}</li>)}
                                    </ul>
                                </Typography>
                            </Container>
                        </Fade>
                    </div>)}
        </ThemeProvider>
    );
}