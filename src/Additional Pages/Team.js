import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PageSection from '../PageSection';
import SponsorCardRow from './SponsorCardRow';
import SponsorGrid from './SponsorGrid';
import NavBar from '../TopNavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TeamCard from './TeamCard';
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
        media: {
            height: 140,
        },
        pageSection:{
            marginTop:100,
        }
    }));

    const post = {
        category:"The Team",
        title: 'The Organizing Team',
        description:
          "The people who make sure Tryst is user friendly and bug-free",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
    };
    
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <NavBar threshold={10} disableOpacity={true}/>
            <PageSection
                heading="The Tryst Team"
                headingAlignment="center"
                containerBackgroundColor="white"
                textColor="black"
                description="The people who make sure Tryst runs bug-free"
                padding={12}
            >
                <SponsorCardRow>                      
                    <TeamCard
                        cardHeading="Sarthak Kala"
                        cardDescription="Overall Co-ordinator"
                        cardImage=""
                        email="sarthakkala22@gmail.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Atishya Jain"
                        cardDescription="CTM, Technical"
                        cardImage="https://drive.google.com/open?id=1W6mPBRCa7BzWho63o4v5TaFNGY6xUHJe"
                        email="workshops@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Shubham Verma"
                        cardDescription="CTM, Publicity"
                        cardImage="https://drive.google.com/open?id=1xQMJTusnpmT38CK8MIO-zHcFG3NznslI"
                        email="vermashubham28896@gmail.com"
                    />
                    <TeamCard
                        cardHeading="Sonal Jangir"
                        cardDescription="CTM, Logistics"
                        cardImage="https://drive.google.com/open?id=10dqZ_tgLmffuZ-kA-89u5AMgXJ01AeTk"
                        email="sonal16j@gmail.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Satyageet Yadav"
                        cardDescription="CTM, Events"
                        cardImage="https://drive.google.com/open?id=1wf7bc4_Pi-DoQMRy2tjJs-YVOEy0mrD9"
                        email="satyageetyadav01@gmail.com"
                    />
                    <TeamCard
                        cardHeading="John Doe"
                        cardDescription="CTM, Stuff"
                        cardImage=""
                        email="urnasemper@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="John Doe"
                        cardDescription="CTM, Stuff"
                        cardImage=""
                        email="urnasemper@tryst-iitd.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="John Doe"
                        cardDescription="Technical Co-ordinator"
                        cardImage=""
                        email="urnasemper@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="John Doe"
                        cardDescription="Technical Co-ordinator"
                        cardImage=""
                        email="urnasemper@tryst-iitd.com"
                    />
                </SponsorCardRow>

            </PageSection>
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);