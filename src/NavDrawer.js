import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { HashLink as Link } from "react-router-hash-link";
import Collapse from "@material-ui/core/Collapse";
import clsx from 'clsx';

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
    },
}));

export default function NavDrawer(props) {
    const classes = useStyles();
    const { visible, toggleDrawer, ...others } = props;
    const [eventCollapse, setEventCollapse] = React.useState(false);

    const handleCollapse = () => {
        setEventCollapse(!eventCollapse);
    }

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                {[['Home', '/home'], ['Events', '/events'],['Lodging', '/lodging'], ['Team', '/team'], ['Sponsors', '/sponsors']].map((text) => (
                    text[0] == "Events"
                    ? 
                        <React.Fragment>
                            <ListItem button key={text[0]} onClick={handleCollapse}>
                                <ListItemText 
                                    primary={text[0]} 
                                    className={classes.listText}
                                    primaryTypographyProps={{style: {fontWeight: 'bold'}}}
                                />
                            </ListItem>
                            <Collapse in={eventCollapse}>
                                    {[['All events', '/events'], ['Event Section 1', '/events#section1'], ['Event Section 2', '/events#section2'],['Event Section 3', '/events#section3'], ['Event Section 4', '/events#section4']].map((subtext) => (
                                        <Link to={subtext[1]} className={classes.link} onClick={toggleDrawer}>
                                            <ListItem button key={subtext[0]}>
                                                <ListItemText 
                                                primary={subtext[0]} 
                                                className={classes.listText}
                                            />
                                            </ListItem>
                                        </Link>
                                    ))}
                            </Collapse>
                        </React.Fragment>
                    : 
                        <Link className={classes.link} to={text[1]} onClick={toggleDrawer}>
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