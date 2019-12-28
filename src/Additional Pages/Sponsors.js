import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PageSection from '../PageSection';
import SponsorCardRow from './SponsorCardRow';
import SponsorGrid from './SponsorGrid';
import NavBar from '../TopNavBar';

function Sponsors(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor:"#268699",
            
        },
        media: {
            height: 140,
        },
        pageSection:{
            marginTop:100,
        }
    }));
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar threshold={10}/>
            <br/><br/>
            <PageSection
                heading="Sponsors"
                headingAlignment="center"
                containerBackgroundColor="#268699"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="2"/>
                </SponsorCardRow>
                
                <SponsorCardRow>
                    <SponsorGrid n="3"/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="4"/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="3"/>
                </SponsorCardRow>

            </PageSection>
        </div>
    );
}

export default withRouter(Sponsors);