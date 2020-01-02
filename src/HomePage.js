import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import NavBar from './TopNavBar';

class HomePage extends React.Component {
    render() {
        return (
            <div id="element">
                <NavBar threshold={10}/>
            </div>
        )
    }
}

export default HomePage;