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
            backgroundColor:"#1b2963",
            
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
                heading="Our Team"
                headingAlignment="center"
                containerBackgroundColor="#1b2963"
                textColor="red"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1"/>
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
        </div>
    );
}

export default withRouter(Sponsors);