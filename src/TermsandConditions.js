import React from 'react';
import NavBar from './TopNavBar';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import MetaTags from 'react-meta-tags'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    video: {
        margin: "auto", 
        display: "block",
        marginTop: theme.spacing(3)
    },
    title: {
        marginTop: theme.spacing(15),
        margin: "auto", 
        display: "block",
        color:"white"
    },
    bodyText: {
        maxWidth: "80%", 
        margin: "auto", 
        display: "block",
        marginTop: theme.spacing(3),
        color:"white"
    }
}));

function TermsAndConditions(props) {
    const classes = useStyles();

    return (
        <div>
            <MetaTags>
            <meta name="title_Page" content="TRYST 2020, IIT Delhi, About TRYST" />
            </MetaTags>
            <div style={{position:"fixed",top:0,width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#1e314f"}} />
            <Fade in={true} timeout={1000}>
                <Typography style={{fontFamily:['Antic Slab','serif'].join(','), marginBottom:10}} align="center" variant="h4" className={classes.title}>Terms And Conditions</Typography>
            </Fade>
            <Fade in={true} timeout={2000}>
                <div className={classes.bodyText}>
                    <Typography style={{fontFamily:['Montserrat','sans-serif'].join(',')}} variant="body">
                    These following terms and conditions outline the rules and regulations for the use of TRYST, IIT Delhi's Website (tryst-iitd.org).
                    </Typography>
                </div>
            </Fade>
            <br/>
            <div style={{width:"85%",margin:"auto"}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="general"
                    id="general"
                    >
                        <Typography className={classes.heading} variant="h6">General</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            These terms and conditions outline the rules and regulations for the use of TRYST's Website, located at tryst-iitd.org.
                            <br/>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use TRYST if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the Terms And Conditions Generator.
                            <br/><br/>
                            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                        </Typography>
                    </ExpansionPanelDetails>
                    
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="cookies"
                    id="cookies"
                    >
                        <Typography className={classes.heading} variant="h6">Cookies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            We employ the use of cookies. By accessing TRYST, you agreed to use cookies in agreement with the TRYST's Privacy Policy.
                            <br/><br/>
                            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="license"
                    id="license"
                    >
                        <Typography className={classes.heading} variant="h6">License</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>Unless otherwise stated, TRYST and/or its licensors own the intellectual property rights for all material on TRYST. All intellectual property rights are reserved. You may access this from TRYST for your own personal use subjected to restrictions set in these terms and conditions.</p>
                        <p>You must not:</p>
                        <ul>
                            <li>Republish material from TRYST</li>
                            <li>Sell, rent or sub-license material from TRYST</li>
                            <li>Reproduce, duplicate or copy material from TRYST</li>
                            <li>Redistribute content from TRYST</li>
                        </ul>

                        <p>This Agreement shall begin on the date hereof.</p>

                        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. TRYST does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of TRYST,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, TRYST shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                        <p>TRYST reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

                        <p>You warrant and represent that:</p>

                        <ul>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul>

                        <p>You hereby grant TRYST a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="hyperlinking"
                    id="hyperlinking"
                    >
                        <Typography className={classes.heading} variant="h6">Hyperlinking to our Content</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>The following organizations may link to our Website without prior written approval:</p>
                        <ul>
                            <li>Government agencies;</li>
                            <li>Search engines;</li>
                            <li>News organizations;</li>
                            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                        </ul>

                        <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                        <p>We may consider and approve other link requests from the following types of organizations:</p>

                        <ul>
                            <li>commonly-known consumer and/or business information sources;</li>
                            <li>dot.com community sites;</li>
                            <li>associations or other groups representing charities;</li>
                            <li>online directory distributors;</li>
                            <li>internet portals;</li>
                            <li>accounting, law and consulting firms; and</li>
                            <li>educational institutions and trade associations.</li>
                        </ul>

                        <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of TRYST; and (d) the link is in the context of general resource information.</p>

                        <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to TRYST. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                        <p>Approved organizations may hyperlink to our Website as follows:</p>

                        <ul>
                            <li>By use of our corporate name; or</li>
                            <li>By use of the uniform resource locator being linked to; or</li>
                            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                        </ul>

                        <p>No use of TRYST's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="iFrames"
                    id="iFrames"
                    color="#192841"
                    >
                        <Typography className={classes.heading} variant="h6">iFrames</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="privacy"
                    id="privacy"
                    >
                        <Typography className={classes.heading} variant="h6">YourPrivacy</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>Please read Privacy Policy</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="rights"
                    id="rights"
                    >
                        <Typography className={classes.heading} variant="h6">Reservation of Rights</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="removalLinks"
                    id="removalLinks"
                    >
                        <Typography className={classes.heading} variant="h6">Removal of links from our website</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                        <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="disclaimer"
                    id="qdisclaimer"
                    >
                        <Typography className={classes.heading} variant="h6">Disclaimer</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                        <ul>
                            <li>limit or exclude our or your liability for death or personal injury;</li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                        </ul>

                        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <Fade in={true} timeout={1000}>
                <Typography style={{fontFamily:['Antic Slab','serif'].join(','), marginBottom:40}} align="center" variant="h4" className={classes.title}>Privacy Policy</Typography>
            </Fade>
            {/* <Fade in={true} timeout={2000}>
                <div className={classes.bodyText}>
                    <Typography style={{fontFamily:['Montserrat','sans-serif'].join(',')}} variant="body">
                    <p>At TRYST, accessible from tryst-iitd.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TRYST and how we use it.</p>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                    </Typography>

                </div>
            </Fade> */}
            {/* <br/> */}
            <div style={{width:"85%",margin:"auto",marginBottom:"20px"}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="general"
                    id="general"
                    >
                        <Typography className={classes.heading} variant="h6">General</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>At TRYST, accessible from tryst-iitd.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TRYST and how we use it.</p>

                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in TRYST. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                        </Typography>
                    </ExpansionPanelDetails>
                    
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="consent"
                    id="consent"
                    >
                        <Typography className={classes.heading} variant="h6">Consent</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Information we collect"
                    id="Information we collect"
                    >
                        <Typography className={classes.heading} variant="h6">Information we collect</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                            <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                            <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="How we use your information"
                    id="How we use your information"
                    >
                        <Typography className={classes.heading} variant="h6">How we use your information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>We use the information we collect in various ways, including to:</p>

                        <ul>
                            <li>Provide, operate, and maintain our webste</li>
                            <li>Improve, personalize, and expand our webste</li>
                            <li>Understand and analyze how you use our webste</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Log Files"
                    id="Log Files"
                    color="#192841"
                    >
                        <Typography className={classes.heading} variant="h6">Log Files</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>TRYST follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Cookies and Web Beacons"
                    id="Cookies and Web Beacons"
                    >
                        <Typography className={classes.heading} variant="h6">Cookies and Web Beacons</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>Like any other website, TRYST uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Advertising Partners Privacy Policies"
                    id="Advertising Partners Privacy Policies"
                    >
                        <Typography className={classes.heading} variant="h6">Advertising Partners Privacy Policies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of TRYST.</p>

                            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TRYST, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                            <p>Note that TRYST has no access to or control over these cookies that are used by third-party advertisers.</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Third Party Privacy Policies"
                    id="Third Party Privacy Policies"
                    >
                        <Typography className={classes.heading} variant="h6">Third Party Privacy Policies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>TRYST's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Children's Information"
                    id="Children's Information"
                    >
                        <Typography className={classes.heading} variant="h6">Children's Information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                            <p>TRYST does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Third Party Privacy Policies"
                    id="Third Party Privacy Policiesqdisclaimer"
                    >
                        <Typography className={classes.heading} variant="h6">Third Party Privacy Policies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>TRYST's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Third Party Privacy Policies"
                    id="Third Party Privacy Policiesqdisclaimer"
                    >
                        <Typography className={classes.heading} variant="h6">Third Party Privacy Policies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <p>TRYST's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
            </div>
            <NavBar threshold={10} backgroundColor="#192841" disableOpacity={true}/>
            
        </div>
    )
} 

export default TermsAndConditions;