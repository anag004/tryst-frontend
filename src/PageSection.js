import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function PageSection(props) {
    const { heading, headingAlignment, containerBackgroundColor, textColor, description,...others } = props;

    const useStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: containerBackgroundColor,
            color: textColor,
            padding: theme.spacing(3),
        }
    }));

    const classes = useStyle();

    return (
        <Container {...others} classes={classes}>
            <Typography variant="h1" align={headingAlignment}>{heading}</Typography>
            <Typography variant="h6" align={headingAlignment}>{description}</Typography>
        </Container>
    );
}

export default PageSection;