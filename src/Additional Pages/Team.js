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
    
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <NavBar threshold={10}/>
            <br/><br/>
            <PageSection
                heading="The Team"
                headingAlignment="center"
                containerBackgroundColor="white"
                textColor="black"
                description=""
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
                    <SponsorGrid n="3"/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="2"/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="3"/>
                </SponsorCardRow>

            </PageSection>
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);