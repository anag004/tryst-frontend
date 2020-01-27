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
import ImageSarthakKala from '../images/SarthakKala.jpg';
import ImageSonalJangir from '../images/SonalJangir.jpg';
import ImageAtishyaJain from '../images/AtishyaJain.jpg';
import ImageHarmanMehta from '../images/HarmanMehta.jpg';
import ImageNaitikGupta from '../images/NaitikGupta.jpg';
import ImageSatyageet from '../images/Satyageet.jpg';
import ImageShubhamVerma from '../images/ShubhamVerma.jpg';
import ImageTeamPageBackground from '../images/teamPageBackground.jpg';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#4CAF50' }
    }
  });

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
    pageSection:{
        marginTop:100,
    }
}));


function Sponsors(props) {
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
            <div style={{position:"fixed", width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#1e314f"}}></div>
            <NavBar threshold={10} backgroundColor="#192841" disableOpacity={true}/>
            <PageSection
                heading="THE TRYST TEAM"
                headingAlignment="center"
                containerBackgroundColor="#1e314f"
                textColor="white"
                description="The people who make sure Tryst runs bug-free"
                padding={12}
            >
                <SponsorCardRow>                      
                    <TeamCard
                        cardHeading="Sarthak Kala"
                        cardDescription="Overall Co-ordinator"
                        cardImage={ImageSarthakKala}
                        email="sarthakkala22@gmail.com"
                    />
                    <TeamCard
                        cardHeading="Naitik Gupta"
                        cardDescription="Overall Co-ordinator"
                        cardImage={ImageNaitikGupta}
                        email="naitik2491997@gmail.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Atishya Jain"
                        cardDescription="CTM, Technical"
                        cardImage={ImageAtishyaJain}
                        email="workshops@tryst-iitd.com"
                    />
                    <TeamCard
                        cardHeading="Shubham Verma"
                        cardDescription="CTM, Publicity"
                        cardImage={ImageShubhamVerma}
                        email="vermashubham28896@gmail.com"
                    />
                    <TeamCard
                        cardHeading="Sonal Jangir"
                        cardDescription="CTM, Logistics"
                        cardImage={ImageSonalJangir}
                        email="sonal16j@gmail.com"
                    />
                </SponsorCardRow>
                <SponsorCardRow>
                    <TeamCard
                        cardHeading="Satyageet Yadav"
                        cardDescription="CTM, Events"
                        cardImage={ImageSatyageet}
                        email="satyageetyadav01@gmail.com"
                    />
                    <TeamCard
                        cardHeading="Harman Mehta"
                        cardDescription="CTM, Guest Lectures"
                        cardImage={ImageHarmanMehta}
                        email="harmanmehta98@gmail.com"
                    />
                </SponsorCardRow>

            </PageSection>
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);