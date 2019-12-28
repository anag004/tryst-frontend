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

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#4CAF50' }
    }
});


function Sponsors(props) {
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
            <NavBar threshold={10} disableOpacity={true}/>
            <br/><br/>
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