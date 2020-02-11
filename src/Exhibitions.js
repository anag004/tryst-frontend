import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './TopNavBar'
import ImageBanner1 from './ImageBanner1'
import axios from 'axios'
import { MetaTags } from 'react-meta-tags';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });
export default function Exhibitions(){
  const [value,setValue]=React.useState([])
  useEffect(()=>{
    axios.get('https://backend2020.tryst-iitd.org/api/event/viewByCategory/exhibitions')
    .then(res=>{const data=res.data
      console.log(data.data)
      setValue(data.data)
    });
  },[])
    return(
        <ThemeProvider theme={theme}>
            <MetaTags>
              <meta name="title_Page" content="TRYST 2020, IIT Delhi, Exhibitions" />
            </MetaTags>  
            <Fragment>
            <NavBar threshold={10} backgroundColor="#192841"/>
            {value.map(post=>(<ImageBanner1 post={{name:post.name,subheading:post.subheading,description:post.description,dtv:post.dtv,image:(post.photos).length==0?"":((post.photos)[0])[0]}} />))}
            </Fragment>
        </ThemeProvider>
    )
} 