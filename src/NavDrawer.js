import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function NavDrawer(props) {
    const [visible, setVisible] = React.useState(false);

    return (
        <Drawer anchor='left' open={true}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </Drawer>
    )
}