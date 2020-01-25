import React, { Fragment, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper, Link } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import axios from 'axios';


export default function EventDetail(props) {
    const {heading, containerBackgroundColor,textColor, ...others} = props;
    const [value, setValue] = React.useState("description");
    const [section,setSection] = React.useState("<h1></h1>");
    const [data,setData]=React.useState([]);

    // const Transition = React.forwardRef(function Transition(props) {
    //     return <Slide timeout={1000} direction="up" />;
    // });
    useEffect(()=>{
        axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
        .then(res=>{const data=res.data
            // console.log(data.data)
            setData([(data.data)])
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
    

    // const post = {
    //     category:"Tryst Event Category 1",
    //     title: 'Events @Tryst',
    //     description:
    //       "We are hosting some amazing events this year. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis ante, feugiat id laoreet eget, accumsan et ipsum..",
    //     image: 'https://source.unsplash.com/random',
    //     imgText: 'main image description',
    //     linkText: 'Continue Reading...',
    //     postDescription:{
    //         about:"We are hosting some amazing events this year",
    //         details:"the event will be held a s folows on this date and this time",
    //         prize:"The prizes for the event are as follows",
    //         register:"Follow below to register"
    //     },
    // };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // showData(post.description.{newValue})
    };
    
    const useStyle = makeStyles (() => ({
        root:{
            scrollbarWidth:"none",
            
        },
        dialog: {
            backgroundImage: 'url(http://source.unsplash.com/collection/146130/random)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        imageBanner:{
            height:420,
            width:window.innerWidth>1000?"auto":"auto",
            overflow:"hidden",
            marginLeft:"auto"
        },
        data:{
            margin:window.innerWidth>1000?20:10,
            fontSize:window.innerWidth>1000?20:15
        },
        tabs:{
            fontSize:window.innerWidth>1000?20:"auto",
            marginTop:window.innerWidth>1000?20:"auto",
            color:"black",  
        },
        category:{
            fontSize:20,
            backgroundColor:"#D5D3D6",
        },
        heading:{
            marginTop:20
        },
        dialogContent:{
            backgroundColor:"#D5D3D6",
        }
    }));
    const getSection=(value,post)=>{
        if(value=="description"){
            return(
                <div>
                    <Typography variant="body1">
                        {post.description} 
                    </Typography>
                </div>
            )
        }
        else if(value=="rules"){
            return(
                <div>
                    <Typography variant="h6">The following rules are binding:</Typography>
                    <Typography variant="body1">
                        <ol>
                            {((post.rules).list).map(str=><li>{str}</li>)}
                        </ol>
                    </Typography>
                </div>
            )
        }
        else if(value=="prizes"){
            return(
                <Typography variant="body1">
                    {post.prizes}
                </Typography>
            )
        }
        else if(value=="contact"){
            return(
                <Typography>
                    <ul>
                        {(post.poc).map(obj=>
                            <li>
                                <Fragment>
                                    Name: {obj.name}
                                    <br/>
                                    Email: {obj.email}
                                    <br/>
                                    Designation: {obj.designation}
                                    <br/>   
                                </Fragment>
                            </li>
                        )}
                    </ul>
                </Typography>
            )
        }
        else if(value=="register"){
            return(
                <Link to={post.reg_link}>
                    <Typography variant="h6">Click here to register!</Typography>
                </Link>
            )
        }
        else{
            return(
                <div>
                {(post.dtv).map(info=>(
                    <div>
                        {value==info.type?
                            <ul>
                                <li><Typography variant="body">Date: {info.date} </Typography></li>
                                <li><Typography variant="body">Time: {Time(info.start_time)} </Typography></li>
                                <li><Typography variant="body">Venue: {info.venue} </Typography></li>
                            </ul>
                        :
                        null}
                    </div>
                ))}
                </div>
            )
        }
    }
    const classes=useStyle()
    var z;
    return (
        <div className={classes.root}>
            {data.map(post=>
                <Dialog
                    open={true}
                    maxWidth="false"
                    className={classes.dialog}
                    // TransitionComponent={Transition}
                >
                    <DialogTitle className={classes.category}>
                        Organised by: {post.category_name}
                    </DialogTitle>
                    {/* <Paper className={classes.paper}> */}
                        <DialogContent className={classes.dialogContent}>
                            <div className={classes.imageBanner}>
                                <ImageBanner post={{category:post.category_name,title:post.name,description:post.subheading,image:"https://source.unsplash.com/random",imgText:""}}/>
                            </div>
                            <Typography variant="h3" className={classes.heading} > {post.name} </Typography>
                            {(post.url).length!=0?<Link href={"http://"+(post.url)} target="_blank" rel="noreferrer"><Typography variant="h6" className={classes.heading} >Problem Statement</Typography></Link>:null}
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                // className={classes.tabs}    
                            >
                                {(post.description).length!=0?<Tab label="About" value="description" className={classes.tabs} />:null}
                                {(post.rules).length!=0?<Tab label="Rules" value="rules" className={classes.tabs} />:null}
                                {(post.prizes).length!=0?<Tab label="Prizes" value="prizes" className={classes.tabs} />:null}
                                <Tab label="Register" value="register" className={classes.tabs} disabled={checkDisabled(post.reg_deadline)} />
                                
                                {(post.poc).length!=0?<Tab label="Contact Info." value="contact" className={classes.tabs} />:null}
                                {(post.dtv).map(info=>(
                                    <Tab label={info.type} value={info.type} className={classes.tabs}/>
                                ))}
                            </Tabs>
                            <div className={classes.data}>
                                {getSection(value,post)}
                            </div>
                        </DialogContent>
                    {/* </Paper> */}
                </Dialog>
            )}
        </div>
    );
}