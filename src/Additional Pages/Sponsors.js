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
import titleSponsor from '../images/TitleSponsor.png';
import GenericBackground from '../images/GenericBackground.jpg';
import internshipIndustrialSponsor from '../images/internshipIndustrialSponsor.png';


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
        image: `url(${GenericBackground})`,
        imgText: 'main image description',
    };
    const titleSponsorPost=[
        {
            title:"GRAPHITE",
            image:titleSponsor,
            link:"https://graphitegtc.com/index"
        }
    ];
    const internshipIndustrialSponsorPost=[
        {
            title:"VERZEO",
            image:internshipIndustrialSponsor,
            link:"http://verzeo.tryst-iitd.org/"
        }
    ];
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <MetaTags>
                <meta name="title_Page" content="TRYST 2020, IIT Delhi, Sponsors" />
            </MetaTags>
            <NavBar threshold={10} backgroundColor="#192841"/>
            <div style={{position:"fixed",width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#29426c"}} />
            <ImageBanner post={post}/>
            <PageSection
                heading="Title Sponsor"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={titleSponsorPost}/>
                </SponsorCardRow>
            </PageSection>
            <PageSection
                heading="Industrial Internship Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={internshipIndustrialSponsorPost}/>
                </SponsorCardRow>
            </PageSection>
            
            {/* <PageSection
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
            </PageSection> */}
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);