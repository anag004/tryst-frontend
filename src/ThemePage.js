import React from 'react';
import NavBar from './TopNavBar';
import LandingScreen from './themeComponents/LandingScreen';
import SVGVerticalLine from './themeComponents/SVGVerticalLine';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear, CSSPlugin, Elastic } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import TimelineDot from './themeComponents/TimelineDot';
import DateLabel from './themeComponents/DateLabel';
import SVGLeftFork from './themeComponents/SVGLeftFork';
import SVGRightFork from './themeComponents/SVGRightFork';
import TextBox from './themeComponents/TextBox';
import { Typography } from '@material-ui/core';
import ImageBox from './themeComponents/ImageBox';
import jack_image from './images/iPhone.webp';
import life_image from './images/SyntheticLife.webp';
import spotify_image from './images/Spotify.webp';
import twitch_image from './images/Twitch.webp';
import electric_cars_image from './images/electric_cars.jpg';
import fusion_image from './images/fusion_image.jpg';
import metal_printing_image from './images/3dprint.webp';
import { Timeline } from 'gsap/gsap-core';
import NavigationIcon from '@material-ui/icons/Navigation';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import higgs_image from './images/HiggsBoson.jpg';
import avengers_image from './images/Avengers.webp';
import mangal_image from './images/mangalyaan.webp';
import gravitation_image from './images/GravWaves.webp';
import echo_image from './images/Amazonecho.webp';
import spacex_image from './images/SpaceX.webp';
// TODO This image does not exist currently
import india_image from './images/oculus.webp';
import iphone_image from './images/iPhone4.webp';
import proxima_image from './images/ProximaB.webp';
import homo_image from './images/Fossil.webp';
import cambridge_image from './images/CambridgeAnalytica.webp';
import babies_image from './images/CrisprBabies.webp';
import blackhole_image from './images/Blackhole.webp';
import larry_image from './images/Larry.webp';
// import { createMuiTheme } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core";
import crissCross from "./images/criss-cross.png";
import crissCrossDark from "./images/criss-cross-dark.png";
import herringBone from "./images/herringbone.png";
import websiteImage0 from './images/websitemerged0.jpg';
import websiteImage1 from './images/websitemerged1.jpg';
import websiteImage2 from './images/websitemerged2.jpg';
import websiteImage3 from './images/websitemerged3.jpg';
import websiteImage4 from './images/websitemerged4.jpg';
import websiteImage5 from './images/websitemerged5.jpg';
import websiteImage6 from './images/websitemerged6.jpg';
import websiteImage7 from './images/websitemerged7.jpg';
import websiteImage8 from './images/websitemerged8.jpg';
import websiteImage9 from './images/websitemerged9.jpg';
import { MetaTags } from 'react-meta-tags';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
// Write this line so that webpack does not drop plugins
const plugins = [ CSSPlugin ];

const styles = theme => ({
    paper: {
        position: "absolute",
        top: "70%",
        left: "50%",
        marginLeft: -130,
        display: "inline-block",
        backgroundColor: "white",
        padding: theme.spacing(4),
        transform: "scale(0)"
    }
});

class ThemePage extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        const tween = new TimelineMax()
                        .add(TweenMax.to("#trystContainer", 1, {scale: 1, ease: Elastic.easeInOut}))
                        .add(TweenMax.to("#trystYear", 1, {opacity: 1, ease: Linear.easeNone}))
                        .add(TweenMax.to("#trystTitle", 1, {opacity: 1, ease: Linear.easeNone}))
                        .add(TweenMax.to("#trystDate", 1, {scale: 1, ease: Elastic.easeInOut}));

        new ScrollMagic.Scene({
            triggerElement: "#dotScroll5",
            duration: 100,
            offset: -100
        })
        .setTween(tween)
        .addTo(this.controller);
    }

    render() {
        return (
            <>
                <MetaTags>
                    <meta name="title_Page" content="TRYST 2020, IIT Delhi, Home Page" />
                </MetaTags>
                <div style={{position: "absolute", top: 0, left: 0, visibility: "hidden", width: "100%"}}></div>
                <NavBar threshold={10} backgroundColor="black"></NavBar>
                <LandingScreen/>
                {/* First section */}
                    <div
                        id="section1"
                        style={{
                            position: "relative",
                            height: "130%",
                            width: "100%",
                            // background: "#83C4CF",
                            // background: "-webkit-linear-gradient(top left, #83C4CF, #D2F5FA)",
                            // background: "-moz-linear-gradient(top left, #83C4CF, #D2F5FA)",
                            // background: "linear-gradient(to bottom right, #E94B3CFF, #D2F5FA)",
                            // background: "#E94B3CFF",
                            background: "url(" + "https://lh3.googleusercontent.com/ZJz3iSz0n3Lbe2EgEBFFePeROHa1vSrkplb_C1wjw_YJkmDaCOVU7pXBaDti90XvNQK3EyTyXVrJU0Qig5auCntTUy-70wgLkIYEu38kuoSaps_5vhp2ocppahpM6JXFDR3UMscIoRCxEBuhkfxGM0iN5q7120XcyNO3Px2obcAyXsbdyjUGw2PKjEwSy1lkHORATw6Px8a9k-VaSLEGXvzymWyjvYKAhFijaiJ3ECRYrK0mX2f-lcWoAgS2aC9d8RiGG6Aoar8dZTQnI4d97TshiT4G6FRuQRPsGwTarAFRhwGGhwYnXhSzzk1bQUeHp785g4gSco3hiq_XQWatMBmxh4VtduWyxBtRsciJz10xJ1pNZbnhGsIesBfr7bIaNEIIV4L3A8rrYhk8Ni9rEFKijO9ctq-IakorIdN5qAtWoKFYbXxGb4Q8cMd6k6b2KGp9LgUK7BJj-abS2h0v6yvVAHwcJ98iSGaHo4u3_Zo_pnKuPBN46Wgq1s1VFJilQ6VUvrQnl43HFAXjvQ9tGSKdFNU0bFIRUSt_tDnW7FdMtFvc-qIBQ4y21mYxmAvVOo7v6syiNiYE6UIvAAV2gWbQSnYdj9PT8ZF9i4TPa56qdRyZ_yvPJX-816YR4NyGwou4NewU8CiE2oF2dc9qfrPl6vodRRUc-00mO3DK5jyuTHHWftLrsbUKdyC7tVih5K66ZC5_X8lKUGXoc842-Oci26LVNN8-PbsFqHXKBPA3Gg=w1006-h548-no" + ")",
                            backgroundSize: "auto 100%"
                        }}
                    >  
                        <SVGVerticalLine controller={this.controller} lineID="1" topPosition="5%"/>
                        <DateLabel
                            topDistance="4%"
                            leftDistance="52.5%"
                            labelID="1"
                            year="2010"
                            controller={this.controller}
                        />
                        <TimelineDot 
                            dotID="1" 
                            controller={this.controller}
                            radius={10}
                            topPosition="5%"
                        />
                        <SVGRightFork
                            forkID="1"
                            topPosition="20%"
                            controller={this.controller}
                            height="15"
                            width="30"
                        />
                        <SVGLeftFork
                            forkID="2"
                            topPosition="30%"
                            controller={this.controller}
                            width="20"
                            height="15"
                        />
                        <ImageBox
                            url={life_image} 
                            imageID="1_2"
                            controller={this.controller}
                            topPosition="35%"
                            leftPosition="55%"
                            heading={"Craig Venter creates synthetic life form"}
                        />
                        <ImageBox
                            url={iphone_image}
                            imageID="1"
                            controller={this.controller}
                            topPosition="45%"
                            leftPosition="5%"
                            heading={"iPhone 4 was first unveiled"}
                        />
                    </div>

                    <div
                        style={{
                            position: "relative",
                            height: "130%",
                            width: "100%",
                            // background: "#FAF494",
                            // background: "-webkit-linear-gradient(top left, #FAF494, #FFFFFF)",
                            // background: "-moz-linear-gradient(top left, #FAF494, #FFFFFF)",
                            // background: "linear-gradient(to bottom right, #FAF494, #FFFFFF)"
                            background: "url(" + "https://lh3.googleusercontent.com/Wr0st9QmQw8ed2ZYSBaDIK6CGQfAizgGQVx3AN7zU1Ag0aPaYmDw2QzbHDwfJ1y7v8lq17Prcc4S5jLIPtOot2c4rNjqCiNz4Bdq6eACBYR0O5Pi7f_r4qrIy8mA3YkjKyY7B-AzBh8uqNKhEPf8A5xmzHyGVmNuxE0VxZ2gT1cCRq2mzmqhgWYCMM7udGoGA46Q66khuQ0AxHVNxrGs2SK2A2uWnUeX6_dHOVN-QTdbCMhcfH7Fz331zPG9iLBgy4gaQ9FMf6kYO0fBcZXa3Gv-XNzfhMZWifSGZAbWXDWBHOky_LHKcIjpEde94615jobDpRVrXDemKdvCS_3VVTZUVgLfNuz9rzv3VqxGJVFkcTcyytRaNTS0hDbVPJA5EzdvqTpHHbIzQdA22SaOmVd7uoz7YM8BF7--4IAo11xghplJ12yhM-breaoqi5KhyIfOzLAm8CXsN37_AB94Z4JpYOA3xYC1RVZhpbZXoo0CJ4l7bkKdB-ZWKtF9rOse5uPhrIMzs3Jr_X-z58mgSMewWkHYFFDXaN3KQCD5bbQXvo7oZmlNlM6bw63e3SKxPO3z-16KObbxCW_0cEshICmPMKLsjFY43H1mqMUBDDQRH1u3cV34VdS1jxHVDvq0eZLXHkKix3SFabF_eoWLFhCN4-xf2CYrNFhIRiczZivDo_05Q5byhyKKWlFemrMv_USHbQ5trJSTFWR8Hytgm099vwuZAxEAVhUy3K8yvQs5wg=w1006-h548-no" + ")",
                            backgroundSize: "auto 100%"
                        }}
                    >  
                        {/* Second section */}
                        <SVGVerticalLine 
                            controller={this.controller} 
                            lineID="2" 
                            topPosition={-10}
                        />
                        <DateLabel
                            topDistance={-20}
                            leftDistance="52.5%"
                            labelID="2"
                            year="2011"
                            controller={this.controller}
                        />
                        <TimelineDot 
                            dotID="2" 
                            controller={this.controller}
                            radius={10}
                            topPosition={-10}
                        />
                        <SVGLeftFork
                            forkID="3"
                            topPosition="20%"
                            width="30"
                            height="10"
                            controller={this.controller}
                        />
                        <ImageBox
                            heading="Launch of Twitch"
                            imageID="2_2"
                            topPosition="30%"
                            leftPosition="5%"
                            url={twitch_image}
                            controller={this.controller}
                        />
                        <SVGRightFork
                            forkID="4"
                            topPosition="10%"
                            width="30"
                            height="10"
                            controller={this.controller}
                        />
                        <ImageBox
                            url={spotify_image}
                            imageID="2"
                            heading={"Spotify comes to the US"}
                            controller={this.controller}
                            topPosition="20%"
                            leftPosition="55%"
                        />
                    </div>

                    <div
                        style={{
                            position: "relative",
                            height: "130%",
                            width: "100%",
                            // background: "#A6FA94",
                            // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                            // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                            // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                            // background: "url(" + crissCrossDark + ")",
                            // backgroundRepeat: "repeat",
                            background: "url(" + "https://lh3.googleusercontent.com/fycB7ds0kzepRYHMUBR8G_gy8bng_deiIHIavxHGfeP6UpQpGyRQlu8aJ5AalVMEs5Wiv86y5f_DLgQU--79ptwAevMB4ch6XrCMARdN_yoDLtMwidw_ETgO77CeoH6Ajp_hwHnhbs1GtLaHFJmc9FwMjkGVbGg8qQcVSYh-sV96Hto3SacKmL8b-AHPmAQcShdMq3d4dtJjThWrc-cwDirBOR8P5YkMyLvtLJ0rfEPXJajPdaTs1SYcztb4AGNlrGdYXrZCZVz-Xf3cUB5klxqV2CGCHLa3hHWIEwau9SZN4PK7FoRJDL48l_t4CUBhhWkUE-OOZFzGOBKrnD00QdHl-IPKW1JbNOs3V4kOeCwLRJoO6k6zTSyguvNrgMOApnqUTq-jABFAyLNuCE0NqUKvlNj6cKnSnSNuaWe0lZl-p8wTUAZDEljog0FY9BJAgpg8ocUFzTPXyZciA6y6NwYQlANpIzAe13mi6yHdydRERcnCvlI8kUiC94LctznRC2bgv4l1m8_4dpbPaMECAoiaOraFzRBKEQHNXuxDNfcQByXAOpWxk4vTITVuW5xKFzkZ8tPzuUcMM1QvulQYWY13Bk08l9nBLpzHAU-0ukXIhzkC0QNXUOdvNDNUuOFSx3cFmv7cx3UUtGq4ARoWeVGkNBpvbvWO5ygHvZquMCOPdACKEMcntiFs11-8JqQPrYG-3wu6eMwVatDg5S4ZsDLrJ6FaMCML6ZCQUfsiX3qdcQ=w1006-h548-no" + ")",
                            backgroundSize: "auto 100%"
                        }}
                    >  
                        {/* Third section */}
                        <SVGVerticalLine 
                            controller={this.controller} 
                            lineID="3" 
                            topPosition={-10}
                        />
                        <DateLabel
                            topDistance={-20}
                            leftDistance="52.5%"
                            labelID="3"
                            year="2012"
                            controller={this.controller}
                        />
                        <TimelineDot 
                            dotID="3" 
                            controller={this.controller}
                            radius={10}
                            topPosition={-10}
                        />
                        <SVGLeftFork
                            forkID="5"
                            topPosition="30%"
                            width="35"
                            height="5"
                            controller={this.controller}
                        />
                        <ImageBox
                            heading="Premiere of Avengers (2012)"
                            imageID="3_2"
                            topPosition="20%"
                            leftPosition="55%"
                            url={avengers_image}
                            controller={this.controller}
                        />
                        <SVGRightFork
                            forkID="6"
                            topPosition="10%"
                            width="30"
                            height="10"
                            controller={this.controller}
                        />
                        <ImageBox
                            url={higgs_image}
                            heading="Detection of Higgs Boson, the god particle confirmed"
                            imageID="3"
                            controller={this.controller}
                            topPosition="35%"
                            leftPosition="5%"
                        />
                    </div>

                    <div
                        style={{
                            position: "relative",
                            height: "130%",
                            width: "100%",
                            // background: "#A6FA94",
                            // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                            // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                            // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                            background: "url(" + "https://lh3.googleusercontent.com/Y1zWTZoE0JhxbwPVnRTOV7XVFxiNFBD-A8zWIyDylMpi3be88mWG3sDvoN33dlHld7erheUNfzmg3gYTNWJgWQgK9hwEtE8AnPJy_zPHngMkYxtEZApkuBmeKRBdDwzi-BlLdHUAwN7NBdJNTRSeuNj_FO5XTFB_AYjMVP2PgmC1cuCD2upFb2qZzKmoCSMiJTD9UuhiintRuzC6C4PwIFgGgx4HCmLvm6__awBNQlu3jE_54g1OV48dsqjMmGLDRU42pe5cYPS7YjhgzCvoqAp7q3_o0jMIovnU0L0F3YcCV93T4gONLBKn2CK06HOgw7GXZPcv9vh17lKqrn691pLH19iom9j0COyQLfIjN4b1hymCNBWFzWGTr0d4aGTkTAkhHsX7VWkRI9NGQvYpd2wXHJk5pMhCec6cgEeJzZjfpj12VXK9xPUeT2SU4ocvlyZU0_bPbpZQCeX89hL8SMiq6Yp-8u5-fz8BR-usZFWJXZpH8Dhx6lmHjno7BWAaUBdSymhTqxD4D1DAfcd--dS6yhtqu6kapz0iX5QvAem3yU3zQjjfnO14PzzdLC18-eGBeVwXumMFFYtCbX2i0lQ2XcxE9FIKKTDaW9DeDOBXzMwyvOwqQWD-71UaauhVHCT2ZKBU6PM3dA9jeMnV_XuCA29FVZfA6fZmIqDF4IxHQ8k-DjEEtLYOSTHvfgGcch167BehJ0xuETL8UgPvcj8ImQ-IKQDbDL173NTWwa4TiA=w1006-h548-no" + ")",
                            backgroundSize: "auto 100%"
                        }}
                    >  
                        {/* Third section */}
                        <SVGVerticalLine 
                            controller={this.controller} 
                            lineID="4" 
                            topPosition={-10}
                        />
                        <DateLabel
                            topDistance={-20}
                            leftDistance="52.5%"
                            labelID="4"
                            year="2013"
                            controller={this.controller}
                        />
                        <TimelineDot 
                            dotID="4" 
                            controller={this.controller}
                            radius={10}
                            topPosition={-10}
                        />
                        <SVGLeftFork
                            forkID="7"
                            topPosition="30%"
                            width="35"
                            height="5"
                            controller={this.controller}
                        />
                        {/* <ImageBox
                            heading="Avengers Premiere"
                            imageID="4_2"
                            topPosition="20%"
                            leftPosition="55%"
                            url={avengers_image}
                            controller={this.controller}
                        />
                        <SVGRightFork
                            forkID="7"
                            topPosition="10%"
                            width="30"
                            height="10"
                            controller={this.controller}
                        /> */}
                        <ImageBox
                            url={mangal_image}
                            heading="ISRO launches mangalyan, the Mars Orbiter Mission"
                            imageID="4"
                            controller={this.controller}
                            topPosition="35%"
                            leftPosition="5%"
                        />
                    </div>

                <div
                    style={{
                        position: "relative",
                        height: "130%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + "https://lh3.googleusercontent.com/sGVJKzO9AbTzTk7Rq1ixbKCwNyi0iNGAGl9sVedpUQ6Fi8peyZF-Kh8dhBKW1PzmvEBHBjUzQKRYYfjc2kwGSo3DW_UxSOqJwRMVunGC30svnhFl225az1oz2HhNtjVqMXbPokWeFzmJZaToSMY1BLKEEPm3v0xG8qCz34KuprPC-Xgm-4k8YB5dctfceWjGl4lBcphqYOvk-vgkn7_rLCK4-suxppyVeU6AWgQABzu067kJXA1MGRw8A5g1abC_y25A3U_93NFzuC4kE8VRAOzqhTd-WFkI1BG4KQ9q7TgOlZ2S7eu4gDvG3Lj7Vztpant3UwWU3Q8w7mq5HWVAh_szNimywWmdAtvcDSvvTq5MokaS6D-iEUPMfYKuJkelSCFnIOW-AGmVqKjklapGXzhwKGL76c0U3KBEzc8eVWgXrEQl2MrmMN9BYgOOlooqUcefLsIDWI5Ppr5cYFDvs5nm9QW3XBE5ubQDDMxm471ykVCok4_CfHNyqBq_6Jg03aSdD3AFGAKApvqIAeqdHc8ctjAmzpXCexIxor7ghuhljQoTnsdyywQEr9nLo0RAZbum9zBwa75YLxLbtDWXXhGFRp4yMG44H6Twj3dsBJpTyMuW6id5QthNIly0yJeF47ScSu_gJAbEPnqTiX7A0_P23jgMTpg_KM62KYRpi7VM86pzKfoU9jVnmIoL2PD5jD22gThXaN3klKhfJ8URCY7By_g6zA2KolpjGPeLoI-gVQ=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="5" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="5"
                        year="2014"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="5" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="9"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Ligo detects gravitational waves"
                        imageID="5_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={gravitation_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="10"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={echo_image}
                        heading="Launch of amazon echo"
                        imageID="5"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "130%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + "https://lh3.googleusercontent.com/A3wQxbmqTUaeAjGXMfvnDjelsvaFDHQ5Z6FGIoCwo1eBqF0huxFKJDwJDUHuc2qb7hvxJat2e8VrE5qFLksrWQ_NV-VYy-6vvoZmVUroBol8BfbUx-t_lk7-VY6ntsOJ1KGBfp_KP4fqq4P5RLMzL8EUAjyCLyBib3x1VE5Qkjpmq0Iva6gZO95ewj-Y9SrV_hPr45M5s1hlLzxeKT8GeO9R6_8KZrtcJbyF4xEXh4MXNMJDlhOXa7iPhuabmo5ypcEKaWUAn-whupwRUrYCJ4JbozNZyrcg-NcCkrPrZaE5-W44AYPSfCE2Xk6n9o8xYyXwGhxjjLF1rDN65IR61oxur9Gb3x2A8qgw0Txa-j1QGi7FBqntuKwNB3ljuGT3yBSUdf_d21FciqaCmjbXWcJ8S_Z6Dz8sr_ULT2IpdvcOxGsDid-3E3qZAawE676a3lr5E6O4Z4nndjbqVUe2GYxDutFDweC4pQwakbnPgW0TQAnD1ABg3QemljETC5HPeilPqvNEpj9wZH8rpme8s_UdhROTW_zxVmrnlnrlARWwMb7fHRnyacqOJn8u19A1_858StmDXGqNXwpdsbac8WeoMHhHPKDE8zrr7D4D8NCdvR3_LD0ojeUztae0R3b7g73a13W3ZtzwdegcPyZDIyYO8sg4o0ppCKWLiWs2LOGhPTSzEq2lVVv6egJKR0TXoKdVjxZ0cuGK0bZGRCbZB6iKx_7KTgybKXeSQstODr-e3Q=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="6" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="6"
                        year="2015"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="6" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="11"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="SpaceX successfully landed its Falcon 9 rocket"
                        imageID="6_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={spacex_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="12"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={india_image}
                        heading="Digital India was launched"
                        imageID="6"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "130%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + "https://lh3.googleusercontent.com/u_IjmtpzJ2EKbcksQCKzjh1D8KsbGraMpH-IRkBQVJ5sjsZpp8tVoqtESXdNibVXyrbtmzCYhuHV5tW3XOzIsNcMN00uXziZBYKs5jjzvO7dVEfIX20G64v-478qlMjkzxSbplGiB2MVhwCg2M56gqc46zBymfO4YYRMXHI00oUasyavtKmy6F0G3LkQIOySeYsSQ58zQuep9QXVOvU73_vleAdigpipzEKyeQHaACoVgPTcMvf6pO-fpmuzc96_LjuksyTrCt_VJ4up8dBqPF0XDxtUXIeAy4Ys5hOajI62ZHCQk3xAAbrh4EfcVnx0-lC2M4Od8JWYhWjQ5_GIRVJ0yBDvNjT8MZHquGckZuMZCsC5s5cndTTuukxU6tg1Dy2suN4iTeo_3ziul-0TwdEkOYJSupQFlCwqmX_3hBYAoBC6V3gtwbFc_T8tBTflyjKop2fM8krOQrK2Kx81n9bxHKC8JlTfbYc8PWwmGpoZDb2KgvbjDYTD2XkpBskFXfiC1gsyFfyLq7mh9EuDi8-SJq5FtWy5Dny0IGX5p3aVC3NiQU10oKlUiLQ8ZdEckuyiV0wfKjtklfZwUpFiPvtFAMVHjHm7iNBCeronEZV1gGyK3vQc9PW53vhchBKmvZuP-X_zKfZFTPvEXDmHZKYYYYMG3anUqza9AN7eHF_qWX_-BJo_Kg8V_5KewkPhZ8pVWdvnXJKnQvjQD9edkO5Cnh3axtuCgDus-l4KQoczkg=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="7" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="7"
                        year="2016"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="7" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="13"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Apple kills the headphone jack"
                        imageID="7_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={jack_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="14"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={proxima_image}
                        heading="Astronomers announced that a Earth-like planet orbits Proxima Centauri"
                        imageID="7"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "130%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + "https://lh3.googleusercontent.com/vz0vfUbBXtvvMZyjqIlH0-5lCY8mEE0ygJ_57dFAwo3zhDPOAgYS1HeF3_wkJtD21Sfpk0rvXSGGAJx8-yedN48Ap-vXphgIFX09GG_GS02DmkIr8Ic7XyEOcpgg6KE0YOLZJU-aM4hKEiS2-fYNjIhLj143ibZBQ2S_lSPfyu4hsDfuzyDEwk3qz3gzQ7OH-jY3eqjpwvS-W2H4T0V5q_XtXNt1Eu99_fbKLav0JdgUMiLTYdD6nIn57wgsTyWTmvziA6EJNKmfspQfSlG3n_1DKz0X79V1AOjMXv8b1Yv48u0Z7lVuEWPTxw1iUn92FNqy_kuY9iq70SPakDgbVZQCBFOyczUjZxzwa9vgbndLT46A7x5QTzMAJMf7wrNGqYBGJQ0_MPBHrs62x80Wd1hDZtDH-g6ltD6_aRgnPX7sDLDFtduS8dJNFN6hUBMinm-X3DbB69U5_xh5hfCaBOOHOzQX8kdrNcbj9M0ZsW3OsmcPcJEpzFDeHYPHfk7pf4_zQYdpMncFVWIncpC4qR4hBat5Q1aCH3IDSdZqS4FTCVpRNl_cW36YPWUObPgHCWj3KNyzEKJbn_abLrA40IBSpimlQuPu5nihFM3nX5IRLErT8hROkk578H8yvwh9l_mJYV-YN8f8UL6h6kNm2MAV6RRCdeGxqVTW1LpIgD0wNHYA2jmiOnfa_eGnrW_Zz3cjerHsQ18dnJcUUjHK-xyKrJYHqEDcSzqUK8CGKX1u-Q=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="8" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="8"
                        year="2017"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="8" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="15"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="Oldest Homo sapiens fossil claim rewrites our species' history"
                        imageID="8_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={homo_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="16"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={cambridge_image}
                        heading="Facebook Cambridge Analytical Data Scandal"
                        imageID="8"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "130%",
                        width: "100%",
                        // background: "#A6FA94",
                        // background: "-webkit-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "-moz-linear-gradient(top left, #A6FA94, #FFFFFF)",
                        // background: "linear-gradient(to bottom right, #A6FA94, #FFFFFF)",
                        background: "url(" + "https://lh3.googleusercontent.com/FLC3TVUUW9OnGQL_RdvYaz8FyGLdaghsJ4YCmVovvNHV261tQBu7BM-8eVDWh-i5Z5D1xl64Gwnn_0FmfZUIq8s7rOt_iuz-n4XgF3dQrrqPZvKvnuTGCzdk6mFNWo4e7kMfV1HTqzz2WVCAsMnoGPKf9xz1d23859CzF-2SE33FfWSfndTEyCw4XBdMj1GTCFvmX4ufZItXym2XCFTNy3WDZOLsXMcja6KCQhMTTRWya6jSD0gQWp18SjS-kjTNIPPc5PT7ZsvpSC_aNfb_pDENdPyO2uZ8A6LeFmQXxFwoPNCTYWvQetCcSbVdCJDdpkfRGXzDgNnPFG6s74WSCgvQIdHPi_0PPtWJBcVI2HqfXC-whmGK_kQiXCqYHwp5mc-WXYaoZT6aoGlIwkCW5lgCWKF59MxsNfY3AMhTmFM-NuTuX-XcJAc9drKmoDVfGS0mQ_krUqcQtrIQpSljT4VdEiOzS4yF3_h44kkcQ6EM9dEAzey8iQcwSydjiengpR0eOuHcE2W64J2s1yaUBfYx8pe34qMJqnBAZTWtEFyp8A1_4huCqc-O-HwblBHE-McfmCzEnXjfD86q_e0bgyNEewcK6pFb8uNQZ91qr0kn_omNUSMwt33Jh-MaNdr3M-u23rc4gRbisjzlq6Px_eDLZwLlC8PwQ_0P9VKfOPyhG92upxP-4aQz8uX2pTAgR48Of_CZ09dH9oAkqoIAfzMprqgKFS4nX7W9N4qYvJub5A=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Third section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="9" 
                        topPosition={-10}
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="9"
                        year="2018"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="9" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="17"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="First CRISPR babies born"
                        imageID="9_2"
                        topPosition="20%"
                        leftPosition="55%"
                        url={babies_image}
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="18"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={metal_printing_image}
                        heading="First 3d metal printing"
                        imageID="9"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        height: "160%",
                        width: "100%",
                        // background: "#FFFFFF",
                        // background: "-webkit-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        // background: "-moz-linear-gradient(top left, #FFFFFF, #9D9D9D)",
                        // background: "linear-gradient(to bottom right, #FFFFFF, #9D9D9D)"
                        background: "url(" + "https://lh3.googleusercontent.com/jqfdEdOLzYtocGGn2D5PY9B4fF0wt9HelgwjGghKcM3UItpaQhT_S8JatLP4_NVSCfjL0TC1qdm4ibgkjmerJ922jqkJBdKzd833AwU10J7Cf_PoHeCk0o0_FY4jrubLU3OhKoRAzAdEzTAHNeBp-RW3txazPNb4GObrHhXmD3MpFChZnAAxS816QX9OVgF6QsCTHtkmjNwoYoWweR_rhxTAwD_Kt70KJkx0V7n4EQti2zvmb5YZFmoNKoRIk6-dYbYn1qmHq0TPecaUVbiBzBcswX0M0TsL5WMpAG0HdUcSRznpZBap-wG_35OB3Wk2ryU4Qt_wn6i6q_TbIci05ft9AMwzFEUwumVpYUVrFdkke2j2PQ6iLZwBnTucTPysE3WMOw8pUIhHiYQfQ7fmdtXA5CTQMT6eP_Fmjt6rdGrboxStEBjFIAvVTUPnBAk_Zv8OEGJ1ek8Yl0x-hh62XcgdIjYZGttujtKbeI6umBUsI-YdUsokeU4NSWG_yx1mwDTlGuIrz5MrHlDZcO05EKEzEFXYb79Rn_84b3mdhQEw6zyVBbIucXL9_8gEy8cq7MyQ6GQIJLGZOKcRpFGHX-tB9RNxImukQ7y7Tnz2KGRCwlsZn4l_oswyqMDxTRr1a9OYgFEXMIObP_BaAZfXrbJ6N4gbHzueZgR7KpJJ2IbIj95dwOH8U5NJLydgVLseSW3GXr1gTHJ2uXeWY3gn9vdqrLc_8YTi5sdDj1PkN0NYLQ=w1006-h548-no" + ")",
                        backgroundSize: "auto 100%"
                    }}
                >  
                    {/* Last section */}
                    <SVGVerticalLine 
                        controller={this.controller} 
                        lineID="last" 
                        topPosition={-10}
                        height="90%"
                    />
                    <DateLabel
                        topDistance={-20}
                        leftDistance="52.5%"
                        labelID="last"
                        year="2019"
                        controller={this.controller}
                    />
                    <TimelineDot 
                        dotID="last" 
                        controller={this.controller}
                        radius={10}
                        topPosition={-10}
                    />
                    <SVGLeftFork
                        forkID="last"
                        topPosition="30%"
                        width="35"
                        height="5"
                        controller={this.controller}
                    />
                    <ImageBox
                        heading="NASA releases first Black hole image"
                        url={blackhole_image}
                        imageID="last"
                        topPosition="20%"
                        leftPosition="55%"
                        controller={this.controller}
                    />
                    <SVGRightFork
                        forkID="last_2"
                        topPosition="10%"
                        width="30"
                        height="10"
                        controller={this.controller}
                    />
                    <ImageBox
                        url={larry_image}
                        heading={"Page and Brin leave Google"}
                        imageID="last"
                        controller={this.controller}
                        topPosition="35%"
                        leftPosition="5%"
                    />
                     <TimelineDot 
                        dotID="last_2" 
                        controller={this.controller}
                        radius={10}
                        topPosition="60%"
                    />
                    <Card className={this.props.classes.paper} id="trystContainer">
                        <Typography variant="h4" id="trystYear" align="center"
                            style={{
                                position: "relative",
                                // top: "66%",
                                // left: "50%",
                                // marginLeft: -30,
                                opacity: "0"
                            }}
                        >2020
                        </Typography>
                        <br/>
                        <Typography variant="h1" align="center" id="trystTitle" align="center"
                            style={{
                                position: "relative",
                                // left: "0%",
                                // marginLeft: -100,
                                opacity: "0"
                            }}
                        >
                            Tryst
                        </Typography>
                        <br/>
                        <Typography variant="h5" id="trystDate" align="center"
                            style={{
                                position: "relative",
                                // top: "83%",
                                // left: "50%",
                                // marginLeft: -50,
                                transform: "scale(0)",
                            }}
                        >6-8 March</Typography>
                    </Card>
                </div>
            </>
        );
    }
}
export default withStyles(styles)(ThemePage);