import React from 'react';
import NavBar from './TopNavBar';
import ImageBanner from './ImageBanner';
import LandingScreen from './themeComponents/LandingScreen';

const post = {
    category:"The Team",
    title: '',
    description:
      "",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};

export default function ThemePage(props) {
    return (
        <>
            <NavBar threshold={10}></NavBar>
            <LandingScreen/>
        </>
    );
}