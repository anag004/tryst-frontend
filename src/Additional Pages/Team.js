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
                        cardHeading="Abhinav Arora"
                        cardDescription="Overall Co-ordinator"
                        cardImage=""
                        email="admin@tryst-iitd.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Vatsal Sharma"
                        cardDescription="CTM, Infra and Workshop"
                        cardImage=""
                        email="workshops@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Adit Gupta"
                        cardDescription="CTM, Admin and Finance"
                        cardImage=""
                        email="finance@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Siddharth Khera"
                        cardDescription="CTM, Events and Social"
                        cardImage=""
                        email="events@tryst-iitd.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Kartikeya Sharma"
                        cardDescription="CTM, Publicity"
                        cardImage=""
                        email="publicity@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Yash Agarwal"
                        cardDescription="CTM, Guest Lecture"
                        cardImage=""
                        email="guest@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Abhishree Arora"
                        cardDescription="CTM, Marketing"
                        cardImage=""
                        email="marketing@tryst-iitd.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Ayush Patel"
                        cardDescription="Technical Co-ordinator"
                        cardImage=""
                        email="patel.ayush@gmail.com"
                    />
                    <TeamCard
                        cardHeading="Arpan Mangal"
                        cardDescription="Technical Co-ordinator"
                        cardImage=""
                        email="mangalarpan@gmail.com"
                    />
                </SponsorCardRow>

            </PageSection>
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);