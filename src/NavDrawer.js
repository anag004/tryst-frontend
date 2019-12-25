import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 200,
    },

    listText: {
        textAlign: 'center'
    }
}));

export default function NavDrawer(props) {
    const [visible, setVisible] = React.useState(false);
    const classes = useStyles();

    return (
        <Drawer anchor='left' open={true}>
            <List className={classes.list}>
                {['Home', 'Events', 'About Us', 'Lodging', 'Team', 'Sponsors', 'Login'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} className={classes.listText}/>
                </ListItem>
                ))}
            </List>
        </Drawer>
    )
}