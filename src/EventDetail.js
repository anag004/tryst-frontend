import React, { Fragment, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Fade, Dialog, DialogTitle, DialogContent, Tabs, Tab, Slide, Paper, useMediaQuery } from '@material-ui/core';
import ImageBanner from './ImageBanner';
import axios from 'axios';
import NavBar from './TopNavBar';
import ImageEventsDetailPage from './images/eventDetailBackground.jpeg';
import { Link } from "react-router-dom";

export default function EventDetail(props) {
    const largeScreen = useMediaQuery('(min-width:500px)');
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
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        // showData(post.description.{newValue})
    };
    
    const useStyle = makeStyles (() => ({
        root:{
            scrollbarWidth:"none",
            
        },
        dialog: {
            marginTop:largeScreen?30:60,
            // marginBottom:largeScreen?"auto":"auto"
          },
        imageBanner:{
            height:420,
            width:largeScreen?"auto":"auto",
            overflow:"hidden",
            marginLeft:"auto"
        },
        data:{
            margin:largeScreen?20:10,
            fontSize:20
        },
        tabs:{
            fontSize:largeScreen?20:"auto",
            marginTop:largeScreen?20:"auto",
            color:"black",
        },
        category:{
            fontSize:20,
            backgroundColor:"#D5D3D6",
        },
        heading:{
            marginTop:10
        },
        dialogContent:{
            backgroundColor:"#D5D3D6",
        }
    }));
    const dateFunction=(date)=>{
        var s=new Date(date)
        return(s.toDateString())
    }
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
                            {(post.rules).map(str=><li>{str}</li>)}
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
                <Typography variant="body">
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
                <Link to={"/register/" + props.match.params.id} target="_blank">
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
                                <li><Typography variant="body">Date: {dateFunction(info.date)} </Typography></li>
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
                <>
                <div style={{position:"fixed",width:"100%",height:"100%",backgroundImage: `url(${ImageEventsDetailPage})`,}}/>
                <Dialog
                    open={true}
                    maxWidth={true}
                    className={classes.dialog}
                    fullScreen={largeScreen?false:true}
                    // TransitionComponent={Transition}
                >
                    <NavBar threshold={10} backgroundColor="#192841"/>
                    {console.log(post)}
                    <DialogTitle className={classes.category}>
                        Organised by: {(post.category_name)?(post.category_name).toUpperCase():""}
                    </DialogTitle>
                    {/* <Paper className={classes.paper}> */}
                        <DialogContent className={classes.dialogContent}>
                            <div className={classes.imageBanner}>
                                <ImageBanner post={{category:post.category_name,title:post.name,description:post.subheading,image:(post.photos).length>1?"url("+(((post.photos)[1])[0])+")":"url(https://source.unsplash.com/random)",imgText:""}}/>
                            </div>
                            <Typography style={{fontFamily:['Questrial','serif'].join(','),fontSize:"55px"}} className={classes.heading} > {(post.name).toUpperCase()} </Typography>
                            {(post.url)?<a href={post.url} target="_blank" rel="noreferrer"><Typography variant="h6" className={classes.heading} >Problem Statement</Typography></a>:null}
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                // className={classes.tabs}    
                            >
                                {(post.description)?<Tab label="About" value="description" className={classes.tabs} />:null}
                                {(post.rules)?<Tab label="Rules" value="rules" className={classes.tabs} />:null}
                                {(post.prizes)?<Tab label="Prizes" value="prizes" className={classes.tabs} />:null}
                                <Tab label="Register" value="register" className={classes.tabs} disabled={checkDisabled(post.reg_deadline)} />
                                {(post.poc)?<Tab label="Contact Info." value="contact" className={classes.tabs} />:null}
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
                </>
            )}
        </div>
    );
}