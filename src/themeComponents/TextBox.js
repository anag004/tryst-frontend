import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    paper: {
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(2),
        maxWidth: "30%"
    }
});

class TextBox extends React.Component {
    render() {
        return (
            <Card className={this.props.classes.paper} square>
                {this.props.children}
            </Card>
        )
    }
}

export default withStyles(styles)(TextBox);