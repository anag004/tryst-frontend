import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import GuestLectureSection from './GuestLectureSection'
import NavBar from './TopNavBar';
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });
  const useStyles = makeStyles(th => ({
    background:  {
      marginTop:80,
      marginRight:20,
    //   
    },
    container:{
        position:"relative",
        overflowX:"hide"
    },
    img:{
        width:"100%",
        height:"50%",
    },
    topContainer:{
        position:"absolute",
        top:0,
    }
}))
// useEffect(()=>{
//     axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
//     .then(res=>{const data=res.data
//         // console.log(data.data)
//         setData([(data.data)])
//         // console.log(value)
//     });
//   },[])
export default function GuestLectureDetail(props){

    // const {left_side,backgroundColor}=props;
    const [value,setValue]=React.useState([]);
    useEffect(()=>{
        axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
        .then(res=>{const data=res.data
            // console.log(data.data.photos)
            setValue((data.data.photos))
            console.log("dbsafjbazvbzvhk")
            // console.log(value)
        });
      },[])
    var left_side=true;
    const classes=useStyles();
    return(
        <ThemeProvider theme={theme}>
            <div style={{position:"fixed", width:"100%",height:"100%",zIndex:"-1",backgroundColor:"black"}}></div>
            <div className={classes.topContainer}>
                <div className={classes.container}>
                <NavBar threshold={10} backgroundColor="black"/>
                    <div className={classes.background}>
                        {value.map(lecturer=>
                            <>
                            <GuestLectureSection left_side={left_side} lecturer={lecturer}/>
                            {left_side=!left_side}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
} 