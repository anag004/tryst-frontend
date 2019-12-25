import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    
    list: {
        width: 200,
    },

    listText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    link: {
        textDecoration: "none"
    }
}));

export default function NavDrawer(props) {
    const classes = useStyles();
    const { visible, toggleDrawer, ...others } = props;

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
        >
            <List>
                {[['Home', '/home'], ['Events', '/events'], ['About Us', '/aboutUs'], ['Lodging', '/lodging'], ['Team', '/team'], ['Sponsors', '/sponsors'], ['Login', '/login']].map((text) => (
                <Link className={classes.link} to={text[1]}>
                    <ListItem button key={text[0]}>
                        <ListItemText 
                            primary={text[0]} 
                            className={classes.listText}
                            primaryTypographyProps={{style: {fontWeight: 'bold'}}}
                        />
                    </ListItem>
                </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Drawer 
                anchor='right' 
                open={visible} 
                elevation={16} 
                classes={classes} 
                onClose={toggleDrawer}
                transitionDuration={{enter: 200, exit:200}}
                { ...others }
            >
               {sideList()}
            </Drawer>
        </div>
    )
}