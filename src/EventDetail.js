import React, { useEffect, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper, Grid, Link } from '@material-ui/core';
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
        axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
        .then(res=>{const data=res.data
            console.log(data.data)
            setValue([(data.data)])
            // console.log(value)
        });
      },[])
    const checkDisabled=(deadline)=>{
        // console.log(deadline);
        const deadline_date=new Date(deadline);
        // console.log(deadline_date);
        const today=new Date();
        if(today.getTime()<deadline_date.getTime()){
            return false;
        }
        else{
            return true;
        }
    }
    const Time=(time)=>{
        const date=new Date(time);
        // console.log(date);
        return date.toLocaleTimeString('en-US');
    }
    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop/>
                <TopNavBar threshold={10}/>
                {value.map(post=>   
                    <div>
                        <Grow in={true}>
                            <Fab variant="extended" className={classes.fab} size="medium" href={post.reg_link} disabled={checkDisabled(post.reg_deadline)}>
                                <AddIcon fontSize="small"/>
                                register
                            </Fab>
                        </Grow>
                        <Fade in={true}  timeout={1000}>
                            <ImageBanner post={{category:post.category_name,title:post.name,description:post.subheading,image:((post.photos)[1])[0],imgText:""}}/>
                        </Fade>
                        <Fade in={true} timeout={1000}>
                            <Container classes={classes} maxWidth="sm">
                                <Typography variant="h4">Description</Typography>
                                <br/>
                                <Typography variant="body1">
                                    {post.description} 
                                </Typography>
                                <br></br>
                                {(post.dtv).length!=0?
                                    <Fragment>
                                        <Typography variant="h4">Event Info.</Typography>
                                        <Grid container>
                                        {(post.dtv).map(info=>
                                            <Grid item sm style={{marginTop:10,marginLeft:25,marginBottom:10}}>
                                                <Typography variant="body">Type: {info.type} </Typography><br/>
                                                <Typography variant="body">Date: {info.date} </Typography><br/>
                                                <Typography variant="body">Time: {Time(info.start_time)} </Typography><br/>
                                                <Typography variant="body">Venue: {info.venue} </Typography><br/>
                                            </Grid>
                                            
                                        )}
                                        </Grid>
                                    </Fragment>
                                :
                                    <Fragment/>
                                }
                                {(post.rules).length!=0?<Fragment>
                                    <Typography variant="h4">Rules</Typography>
                                    <br></br>
                                    <Typography variant="body1">
                                        {post.rules}
                                    </Typography>
                                    <br/>
                                </Fragment>
                                :
                                    <Fragment/>
                                }
                                {/* <Typography variant="body1">
                                    <ol>
                                        {((post.rules).list).map(str=><li>{str}</li>)}
                                    </ol>
                                </Typography> */}
                                {(post.prizes).length!=0?<Fragment>
                                    <Typography variant="h4">Prizes</Typography>
                                    <br></br>
                                    <Typography variant="body1">
                                        {post.prizes}
                                    </Typography>
                                </Fragment>
                                :<Fragment/>
                                }
                                {/* <Typography variant="body1">
                                    <ul>
                                    {((post.prizes).list).map(str=><li>{str}</li>)}
                                    </ul>
                                </Typography> */}
                                <br/>
                                {(post.poc).length!=0?<Fragment>
                                    <Typography variant="h4">
                                        Contact Info
                                    </Typography>
                                    <Typography>
                                        <ul>
                                            {(post.poc).map(obj=>
                                                <Fragment>
                                                    Name: {obj.name}
                                                    <br/>
                                                    Email: {obj.email}
                                                    <br/>
                                                    Designation: {obj.designation}
                                                    <br/>   
                                                </Fragment>
                                            )}
                                        </ul>
                                    </Typography>
                                </Fragment>
                                :<Fragment/>
                                }
                                {(post.url).length!=0?
                                    <Fragment>
                                        <Link href={"http://"+(post.url)} target="_blank" rel="noreferrer">
                                            <Typography variant="h6">Problem Statement</Typography>
                                        </Link>
                                    </Fragment>
                                :
                                    <Fragment/>
                                }
                                <br/>
                                <Typography variant="h5">Organised by: {post.category_name} </Typography>
                                <br/>
                                
                            </Container>
                        </Fade>
                    </div>)}
        </ThemeProvider>
    );
}