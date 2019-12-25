import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
                {['Home', 'Events', 'About Us', 'Lodging', 'Team', 'Sponsors', 'Login'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText 
                        primary={text} 
                        className={classes.listText}
                        primaryTypographyProps={{style: {fontWeight: 'bold'}}}
                    />
                </ListItem>
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
                transitionDuration={{enter: 500, exit:500}}
                { ...others }
            >
               {sideList()}
            </Drawer>
        </div>
    )
}