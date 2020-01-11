import React from 'react';
import NavBar from './TopNavBar';

export default function ThemePage(props) {
    return (
        <>
            <NavBar threshold={10} disableOpacity={true}></NavBar>
            HelloWorld
        </>
    );
}