import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavBar(props) {
    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5">
                        TRYST
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;