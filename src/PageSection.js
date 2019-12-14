import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function PageSection(props) {
    const { heading, headingAlignment, containerBackgroundColor, ...others } = props;

    const useStyle = makeStyles({
        container: {
            root: {
                backgroundColor: containerBackgroundColor,
            }
        }
    });

    const classes = useStyle();

    return (
        <Container {...others} classes={classes.container}>
            <Typography variant="h1" align={headingAlignment}>{heading}</Typography>
        </Container>
    );
}

export default PageSection;