import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './TopNavBar'
import ImageBanner1 from './ImageBanner1'

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });
const mainFeaturedPost = {
    title: 'Exhibition 1',
    description:
      "We are hosting some amazing exhibitions this year",
      description2:"A CONGLOMATION OF STATE OF ART INNOVATIONS FROM AROUND THE GLOBE",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: ''
  };
const mainFeaturedPost2 = {
    title: 'Exhibition 2',
    description:
      "We are hosting some amazing exhibitions this year",
    description2:"A CONGLOMATION OF STATE OF ART INNOVATIONS FROM AROUND THE GLOBE",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: ''
};
export default function Exhibitions(){
    return(
        <ThemeProvider theme={theme}>
            <Fragment>
            <NavBar threshold={10} backgroundColor="black"/>
            <ImageBanner1 post={mainFeaturedPost}/>
            <ImageBanner1 post={mainFeaturedPost2} />
            </Fragment>
        </ThemeProvider>
    )
} 