import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PageSection from '../PageSection';
import SponsorCardRow from './SponsorCardRow';
import SponsorGrid from './SponsorGrid';
import NavBar from '../TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ImageBanner from '../ImageBanner';
import Fade from '@material-ui/core/Fade';
import { MetaTags } from 'react-meta-tags';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#white",
        
    },
    media: {
        height: 140,
    },
    pageSection:{
        marginTop:100,
    }
}));

function Sponsors(props) {
    const post = {
        category:"Sponsors",
        title: 'Sponsors',
        description:
          "We thank all of our sponsors for making Tryst possible",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
    };

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <MetaTags>
            <meta name="title_Page" content="TRYST 2020, IIT Delhi, Sponsors" />
            </MetaTags>
            <NavBar threshold={10}/>
            <Fade in={true}>
                <ImageBanner post={post}></ImageBanner>
            </Fade>
            <PageSection
                heading="Title Sponsors"
                headingAlignment="center"
                containerBackgroundColor="#FFF"
                textColor="black"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="2"/>
                </SponsorCardRow>
            </PageSection>
            <PageSection
                heading="Media Sponsors"
                headingAlignment="center"
                containerBackgroundColor="#FFF"
                textColor="black"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="3"/>
                </SponsorCardRow>
            </PageSection>
            <PageSection
                heading="Food Sponsors"
                headingAlignment="center"
                containerBackgroundColor="#FFF"
                textColor="black"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="4"/>
                </SponsorCardRow>
            </PageSection>
            <PageSection
                heading="Prize Sponsors"
                headingAlignment="center"
                containerBackgroundColor="#FFF"
                textColor="black"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="3"/>
                </SponsorCardRow>
            </PageSection>
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);