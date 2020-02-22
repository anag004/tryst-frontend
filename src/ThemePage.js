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
import graphite_image from './images/graphite.jpeg';
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
                            url={"https://lh3.googleusercontent.com/byv47yfUrI3KwFfN7fbbhh8MrtBPVOlbsJvKV2JK-5G54Mn7noOSCtZmuSyHkuOjQQNjrHqGhyAOVXXTa1pjHo6P6IxdX2wpJGeGZJxGebxZ9wpgaQm9f6ZwzNPY8PXa8bojnGj2fxB8wzGq_87VC3CnZRaySPyr_HyN8-maj-KJQpYGvrjHJArrz0xQUVnEf2x4LDgHX4j2ZUUpkSnMRwqAsg93HzcWhH3U6X8qGZ1Ibaq-okboBWT7yDmak4BUFufFPDPQVb2N2V1VYKO_zf2TL2h4wnJNShvWSF57J3z2OYsLEt7wdBrwMFVOxscBBrm-XE2hx_TPPPnPZNIDa2y9Z77s8RjL26pEOGjDSK4w2ouImYuPIgWIgD6RWpfryMgKvGmx-10FunW9zJecanGE9FfQDniHH2jMPvVRrM5EvpzoVSoLOdiTvEK9D19JutG-8Qd-dRpq8EmGiPN-bxV84yh0TXBjUwVNfFSvABAg80CyGbmUfkkFtqaTkwm6AhudNQL7Dk2aK54C6NepQri0L6doomQEb0EiKKz5jpnu141D2V3n8FulmENUcpsnzALgVzTererY_GDaK5voqSmIjMhl-3f8A7L0pv7eBUtE9ogM6L999SwfYph09E2JktOKrWgZr1D8HbAY3YV_kRzP37NzpWsbHXZ5U4S0IAvQuk2TF-Hz2QdjgRbQ1vHboN3Xgo0TWlm4c8iDvpr0dFn79ergkNRqWBVx9qg3sW4ZPw=w800-h600-no"} 
                            imageID="1_2"
                            controller={this.controller}
                            topPosition="35%"
                            leftPosition="55%"
                            heading={"Craig Venter creates synthetic life form"}
                        />
                        <ImageBox
                            url={"https://lh3.googleusercontent.com/sK4ygaKpiMfZ7OlPyfJB0JuT3GJJuGBxknt6KUEWxWLGtdC90B5qYl7c7P-xkkLzjFJQBcS63b3dS5DNkpZhEwhBjpsiqcVqvZUiBGOOf8wEiOfGdFKsQEi4lD4r78mFVSid23oQ6LTQTqh3b-5-WjWOrxxgRKUQn6KNOY8enuhzVwUWlK7b5LdvPH4YD1nxlZW0sDqr89zNUqplWBopGHcQw86FDuldZFj0JaUbXsmKG9TNWlNQ4N8L6vHyE1RFDHvFssyGhaK6XPA2ooVzwHbjkLjLlQcuj7xoeUY3xmbWyOqoLsNp1Uk7indBsc_6Pl8HaiffnFiWItItfshF6plq7rrzqSN5EKEBwmmXaD1aphYdCKCWgWrDdHBNWw8ECyOk4pr3hWElGtzXaJ0_Uue5r_GFD2hR9on3aRX7IJZ-oezui-K2fEUiWuy_3tYSz9K2LUNQrw26LJZ6mNN3R7S1oHk9J0SrRoAybtCjwcOrSWhJRa7FD-PcfSAQqa918p3sT_TOOT3ikRvlixruHL0vSK0k5YYTL7GXrVHuSz4y3XXEWq4vcLuKQ9LJH3-BGkVD9-boXFFZkBSN-n4B42lVk7yaaNUUkcnmCPoUEzCWZLLOy1a_wVyLo12ye3MPTmalJZy3UHfcMpuIJuxcOEuvCjcMcYls6oY_bTugFizfiuaB3Tu4YYw0KrWepk9qtfHCjufqnpfAxoFW3vC-etxwl4AiTtb-bAIaScNARrf1Bg=w800-h600-no"}
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
                            url={"https://lh3.googleusercontent.com/bppRXX-xd2oc0u-hCmMpiD26-Z-eRMcpPbaEvWjvlh1NgVEfcS256H31Pu7zI6zH7aaAQe0vYZfAZr2Vff8xRD4PKxy4mmXJVzqSMvq-XpreY9Cr96rK8E6_jbLbX0aq8KBP2xVfI3P6DxDPFET67j89UL86jz4VKrC29IFnPzIC76UJh4PYP-2BPjm33cRyfCrtK_RO2S0nEhG2Rf_pByrNrZmurDdNx5ycex-vefnxoH_GJjtz94aMvK0PMheWhfVyCbX2xq8-AvZF9whGX-8wocz79TM4es2QSEfd44Sv_k3ap6JbKEMD_17xgfhGWGH6GCaLH1mMvZCxrwSsN33OEZzAlBO2Nsqhq6miqv9hwGuqHR1q6_CB6MfvAVHYYiD_cFv5wf7lOvWJJCyLwS5FllUDiLjFWKJ4gb0O1TFsiP8bT2N88HCXJjNDBCzC4AaMGl6ch0-Ia7z8nCohtFp1C6Hx5Ml6lYr0GEsG42fwUANkU4NjSuxRrnlYfXH_Uiw9fKYAG1n-RBGWtxk6wIYjCsQigQ-9SSey1jjXXfWM2wYkD1W6KGkDMEBan9_fpHwWSNeUVibjJf1_tjjriQZG-OT8V5HiRyLH80krmg4W8uML6LPMdoKOWzJQS401bIlESmOZ0Jud3qH6v3SJGKXhi71cBpwCAEIcOfW8wNwn0fLb3vbRpO4Nmz-Slo5pYqNFceY25glSqw-LhBc9yEft9wQVIi-uh2nj3P1iTg26lA=w800-h600-no"}
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
                            url={"https://lh3.googleusercontent.com/NGVgILEGNj-nktnyl-PWdnuen078IEGix4-hd5FJnXtwlozZBCYAd4O5O0YA0enzIxTvR7D2hc7nYnV2h3GsKlOT-JKA1EdseH6mEQ1FARw4e0wPhPlTV6qkB5XgpuE2Q_d_5vMhQyvZrZodMm5bwgmqdIn1U5xzTF9JZFJbLFrYNRsP9vKqbMaEd6GUjNsTY-Qjw7twaOFrGEJXMtHew8SRZj3JT2Y69msg7Y_qrZ_kZ_mQU8OJpolY5mVQ11iTL5KDI0SNVD17vLt_XN-8RG3QWL1TcYAzook2mqMgpDb7ywah8wRomDXfiTqGzm3huWnVt4yxpCsiCf8EkJXANgqGTVMcCOBWYtjmawMGZ3LpAq7uWtakJ11zSj1TuteqticBdd00tmS70zHaGD31u9xHDltOAu7XH3HO3OXLJ2iixxpYgd0UGS4mzoP1N4I5o22cXelTGe9_GD1-u9cuATxilAGdWEHXV-Zyk-eK4yICv3i6s8584fbIw5zuJEk_iOV74mHwgr24FR5wKGoG-uk2cq6UotXFsfwdcjPiYV5QxwZLXDeIF6arD7z6-_lJ1SXXP7okHSI3YpdaXjHn_b0zI4d-yjPo9kc7_dEtd51mp6F7tn_JO5e1OpK3wWV3-zo2mmnEvyJzvKDjbHZykWhJRe6D12FiU3v-V9jDrnuqOSQhvia5H4p2sCLe_0zfk_QC7pi6GB9Y6oLfSPO7x3HjePEFVasLQEMWS3qhKBsxPw=w800-h600-no"}
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
                            url={"https://lh3.googleusercontent.com/8q2hTHXyJc4NTKBmUImQtRIk37qGYpbI4U5jWejPiDt-oYGprEhpEquDdW_j2a4Hi3o4GFhyQBeAgAjbEqPsFoxuxG1PIZj9S_iliilCzdr5VUNYRGDiCaJS7mFEotJVw1MIlXsFCDDJG2Bmw85VC1fMng2Zf_kseWE_t28QwVwlvcxvXPVxDYPgRIzBCJqaBqC-2mIN1_Bpn6Kh6rAYIFLli9Zi5SujFZMlTzRpgXdzHrJzwEg9sNIQ4YlBVJ44c0s8UJ5CWEGRjOaemwI-G_21TV6IhkMr5GvQQmgmaHuYYvbQpI1rHXE9JnVxAZmAhvLLz1xr_iYOd26_lwHbJ0P77OmM0C31RWhneqX7iUnNSParJ6fUbFJUOMlgP4odqphMeZGHonlFEjQFguPSUoL0KD7iOfSMWLh03XNM2R2WIeZ7NnKC4OYl3D7sXVarHEb8W07cNHkNCdfBsCvYt1A1f0Vl6bMeHHRFMT06qlZDI5DUy6nxgoZ_rdQ2JE2jqLVu0GtdCTqUOnN5xNC6OdbnER6JO5LCvUmWzr2ckJIdVTpQH5gRJ5rDmRXqgbfkM6Dg6eYHOgshLSBsnpo4cRirEGyLE2Gm-iPJNgGN0JDOY5BDmQvXWpYXvYIXMELK_yP4D7drO9GuRCyF60zHaSAsorrSm5rJR9wYM_-W16m9w1ai2_BIkP4noN5jqMvc4foOmoCkAd2UABs1a3kyq6h8zjMGbm9JihE12NnagF50Mg=w800-h600-no"}
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
                            url={"https://lh3.googleusercontent.com/3tJBu7glsca_mG2fKkVTu1vpTZIa3cpVQcRB3ZofJdH3xA6N6MW4BbrFoqIL0fc7xGT01ZaOyC4tHur0iUyo0Gd_VAehNVVewtZbavJV4cVIWxiTC4-KIqosYK00_DMQgIIdy-uhw_lcxQYtBQqcebo2WeqYcoBh7XSxdEL7SlOoRI4brJjiMKXdl30JTGOtkENaxLQpdFJ8jXfqw2hL3KX3cA2fw9Fux_yLXMONfuo3VYmd_DjQjg1wuxez3VXcuJooxskcMPKYDkI92W1cThbliI4LmOEpFAVvPWmn-j-NyCuqGcY9mZMCWSgYxUBv5ZjFAvUaTXq5Z4rrX291yRjyXYvhuUoZAGlEy09Ecb59SQY1SoijoQwg5xuKJcoLSQZCTwN46Jut_lWIxJrmz9-TOQivgDUwKjNsMD9dUB64c2_pTxnaV-uxcDuJ9t3OTNCt7peUTKYuzIjkvAg79p6wZt6OBxikcWWP8-K0gvH31e_d8Wjo_rnOXUJqqXKXxABgGBbszH_gRQ409ZYxqRdUGy5TFVVAQ88kGOXgj5rY8YGffLvzbg2ckQTyhsHQh4iupcJ09tKrhSjVRfo7oE2hHqqaVzTxhP_1-Ij-nvt__Yky9L4vjIVJSHqzSKvByqGvu64ur0Bl3KZiXpfi510-vDags_Tp1LYM1wbSmTP7aXGhlznUgNPJP0git-ocpBcFPHht1eX3HhJwTPKYkNDwz236ihdzyOH1I_OrxepzYA=w800-h600-no"}
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
                        url={"https://lh3.googleusercontent.com/FGBfPSMdNIBs3TT51okDwbIt93gTzGfXUqicJAsumXLIDIwJp93vuzHvElZl7P95ZEiiQh1SSKrE15brAxCAUqGoqWl9elLXycfxWyEkQZCLTclW3k3cZf_CrMim7N20Rdw8RjHMuITse12N_mO5KrsuHkoYlxI-STT-seHokbce3nIfzsscZE90e_DHdR7tadfZCgoUYH6j8JKNEmuLsIr0eamgSsaMcAylGtSmxgZ3MEiEDqQXeNjUMQvuW-NrnFb2g5RwrZ46ciTcg22rubpl5pMO_SvSQhzTYrwW3KYvkpoIfSmglC8Ehh9KhA5DDHad4SAp-XXTd4crYwhBywSwFxJpn2w9udTv8m21yv0VRilL1t5CEZMH3Btuk0Vr4AuGqepWSFy9C4hLGlIDbBnsu1V9PaX4lkFzQ-gKmRLwKb8EczhdRLsmJ36dyGPfSzbOw1TsxuoGii4UVL3WBjW5EV54Ti-pe22CrkFafvBnRo87POgvVUYhJ7AUs0IvaPez3LhXyCodmdRyewUps4LTWHN9dp29Gij16Rl_E4nz2V9kOJB1m9Nw_24wwFAO5NdpSLOA2cYB9Fc4yslh9Mn0tBar71luHEQCttd3lX18j7hptYRWtFta1lCrmjtloB5O6Z9Pq4p3gkvtW7z1FdZPv3g6eDsmdJaw_lmOpn3lludF98R2uqyisy6o78gRZai3Ri4kSU1NZEe_I2QDaQhkDGyLhH2viAUNA543pcO89A=w800-h600-no"}
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
                        url={"https://lh3.googleusercontent.com/ZYBJHI5UNZG7sn0j1lJXSM7CoYEJTOTJ_UZh0zTVXo9PLsypEylbNbO3xHchGlNUz4qpEDMeRJDaQ_BXkL_CR4sKS9-wsYV-lrIi9xjv0HCcYjRIBTxisfXHEJvI4bVWffcB7p9tjbxtdHm8zuEoG_2OcCoYRAuysx1mM_Sey_pqLeulx_bdy41UQ_HhreMBkw8RSOzWKPrU-l2dMzeBeCBpBdDI0DSyrEhbVSt4Ydx0iqRXu3pJRAQfzoBPaErLbAVBJLIwemqTtgFDK-e-pWyo95hu40sbpLw8_mNg0Brv3zgl7ly-sih4dUwsXb9rwjUuYI8FO01sYql72iDKv0P0UPjXGUnN5ODxcdqW4475TsJZZlxS4WU9DWnP2JzKxZfmp_WXGsqwkf7bYpNkhjvIAS8QhvcR6i2MzmKz6EbhA-OgEB1FX23XI0anSSu4YEgrtR_Gdf-4zV3k4JO5IiwvJG0LTHJnMVJZnN6uNlG1k5uoQUh-zR_fut_S8sLhkdGSJk6otzgZoWjBjBR8pRH2W0JY3S92H7D-r1K-gIUA-ov-uB56RngNGbCJJVe80Zb8YmUTCVOEZFR8QVpJza8h8hYnBhqiIjaVnctqWI9HrWQD78sQ0yfwhYkwDsAdRRpWwNbf_mAIuWv0aP4DW6FMc7zt5TPBd1e4oVtDFlrInnZXfMkAwRpR15XjbK5HgajjXEYSvIfrOXwkHUsko7NSnQzrdkdxSH8V8ooJ1HjY_w=w800-h600-no"}
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
                        url={"https://lh3.googleusercontent.com/4kI3bJNBv5N_XU7GrFCyLdO_Tt3TfzD5W1UkQKyn3eYxFryicA-DH8oySHkEjSqFBl_pTnTmDkFd_anLjjP_3ptiQpV4Uo82dFaG7zZos92v8Zj6URspuSlY2ymlHA3AR1XMueD13gZbxAxTM42wZDCAcGxdNZm86PB5VDxQrmLth3ZLN69duqTFrfAYzoArtcJyL3765TBO_C9WfFk7Tu0Lq5e0hYu0e26vHWTipvl6bX2cU9yLUrmbjKen7ghgCJ3SDiREcM8SL_zuqOLqUjiSjouDrhYcTgoeiKlOIWAVOkT4WmHYjdpVoMhElHo4pUqvEjtqv4l4SsSR3lq0I6FLPkuXqcbEQSyvz_A6CotEBipXhJR-oW-MUbFBOyeaOqAJkHbmP5jnltBSEs1ZxBjvQBk4F0RGwO9tstDFMRWEp2pI4LYFoK7yrcGe9v9n6zm1sCvVqBj8gtz8hyEZLFwTQ7mT7Thdd5ZP3kCX30zIhg9nV7d3OXJhIUBpkJGsGCcD0CxkZLvdMxMxBUOI-7jhiR2_oBzdwSJCZUIBoL7yTRLz2D1AkblRWVLppkfriJFPA_sL6zqbmebETYGd7sYAIXQ9FnF-qwldUMm1PIgQWqBFOOcPIbPMROfdn6OCmmYb3AcdHu_9K4RHKj0CCEek1263u2SvU4k-IXL9pGALA98l3srrBzqMY4l6WBZyQz5P02o9vGk3ys6ryfPFeZmJjcOup1TFuV1k8x_z2HXfwQ=w300-h168-no"}
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
                        url={"https://lh3.googleusercontent.com/KCBzY_tQag6D2JZ4U7_UNkohx6v0_Y4elspbi86kqv2Sl0ZvitQ0yvwYhIlL6cVHee6MBhrgUa0DZUGxf21Xz4xB45jdF52YfBqJovgaqE6lKRZrL0CXQq3jYHqDUn7sSaVDyHxhNQPbtgIZ215uJP39zjzm2K0vsTHmk-xlk7Kvfkq_pPjexKWuFHjjOxA9iCbo51xJC1cxkNafaxG7TemW7VX88GC6GocgEA6AOMhz4F4bSAFnd0zvM5n8BTUANfWEMwbjVY8g0UTTrg1niAiGM4wbBx-uhyyo-bYJS_H61b2nH18EoQqyGbDttz1yCIZi2tA9fddTW2iRVVDVnqtgtLWQVm120sWtNmeUd_q415iBTsEB-Vq9ipEUiFmXi9mHy5fbbfZupKT8JN0lUyxy724c3mkeZKAwKMMgUsW3C5L7I9eMLb9EeCE46VNRQccG3LlokK9GJyGVKN1oGRxPIMw0U7waYI5Y74-1XBgATN0KQUb5TvdE4x8jFQXj8xG4AxYzgOsz6B_gh2gjeHiLToiIfzv0cs79ieWVlwPHva2jIJx1d-NXlrfM6lEDcXsxTTeukvt5XA_GqeDW7b2k7TzKIV5V1xwX2t-x_gcBTV3CytwQjLlStbtyIqJrmhLPUuWgoljrvhzS8VNwmMLvKA3q5_OSZDiVwk2JRWhfkv7iAdE-ayy6JLOIlNq-Yk51sYIRB0uPsAgixNsXqHOK3jCxbX7KskeNc7SdcZbwKQ=w800-h600-no"}
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
                        url={"https://lh3.googleusercontent.com/gVDh9hvKn3GOCvG-pPRqPhSUneUUzTo9QRDUGmrjQn-V5tQ-WGVk7Wx10JwKtHq2xOgvz3I24V3lIbBUzJfmsWaOZejddUf5unCMaqDK7EtfN2fCFTFpvpRPa1p7DW-IWGsZIt-fqKfHZMheOhWy-z39ltAhm6yuSgbhYsoo0JLBeaqwWr2iC8bWXY6KuEWAR7F9u9xHXvsrmp-7RTimIyLy8jJZ80k6Jix3Q6nFBVsCO4jK_ysxG3pZIfu3PKT3m0YJgZY4fj8kqmqBMDC3cbhvSoUzef9B5SRADNEQbaq-9KNxN-VqTmWYl5UNbLnGsOYyuc8jDfpMMfJOADsLuQwNd8q0Cf-vhegNE-1MBj_tZsyv1bPT_M5li9VA1kpCkv0V3dtdMIjSzOu8yw3H2GyGgY3tgSQC_oInKSxRGS_emYpLO-KsEAP9XFqLYyePe-Zz4VWiCvqclb_VqhGCzPURDm_iBNbbDraID7Qj_MDL3chw0A8hus9Kv-xypmkTPqgIWlKUYmcaG1bIrABPWAZoOxonAQmnt7cPafUUht6CWP23fND5auFzjhlFB-2NkU_YfslJL5aOjzufjwt_amdBV_xl0cK5S3kNtR5T0bS0HtHrnubrEYBoddSD2uyYFU1lYXA2eCqrN5mrYf3WUQFBxVob1QVLg8qjTvg8ObbG-G3ye_GwEA3wIUCOJ_txNKuDplGB07iTNXDve0wRXnvYAeqs6nu0PykZ-rGYvzMfkQ=w800-h600-no"}
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
                        url={"https://lh3.googleusercontent.com/AFpGvvBJp3c1UYVNw5sou17ehpkIxz9R-arsYFexKyo2aLYp0vDPCjJ17Cp9oj8Z5rZAa9qglYI-qRlQoKr9Xs4PyMYbNQTXvl88IUYTnI2CJTT3GOs4vVeaUjjxdMJiCu-BCINrfUSYqHsd2ABcUjX_8--sSKhPmQXHMT30A2j11eDWtTu8VRFlOSHztYT0anQvfIEeQOVDin0cl54mkeEgrr_92JLa09Ryy-X5ISE-lG5RIhjxiJ3AS_PwpJTimoPpTs9nO1ldsAoyNwBXiPZr2o4ynrBcRnGphYzdBPhnYxj060G4CkRyeGfixtzxTHb_HJ_TtOInv9aQ6vyaXXOAhseDmgSCIPE32Z0hO4_X77K2fw1HGqdUOkgywMu7pmMMIOpWhLN-24LJxfoq2r3YGWpOZpNcaoqtk8Nix9fCplYG4bzsWFVm-fdf5DaDhOpQZbAbPNoYYVVnnekeOdLusQcHWA1qGUHM6XilFBQ7mpCVzDiocsqCO93iqMD2Xqyn_rQY9KckO3OunitGHwuTHTVPQihKOeNnh8eRbXcH7EaYoyJeqYWFS_53VODG84HbDJgmsTJ4foQqBPl6o-hbCQ4mT-0Un0dT7Z74TB9_NdQAyqdohsXJe58E-GfBp6OX9PG5Qgiag-BJCWLskmDObAD9H7ljij_nid2btAy4_s2PiCdZGEzHSnaRzLJHAkO9DdW8Nwxds5qPaVk1K00-9Lg5IEBfPj1em6KcnCs8TA=w275-h183-no"}
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
                        url={"https://lh3.googleusercontent.com/T1FWeuUV8_SuCSDXZFUSda_ltiwDjjkACLHJW8pdVNdYLtrkpKVIsMlBy_lNEZyUXxvnZAuaf-4EDyk1ZXkbMedq5aNG-yRzNnWkdJ85HrQ1MzywqM7HrbWSxjsissplflT42DEaY4Gx7HxEZ1NX2BaWLvandKNrmMKFYBEvxv3bknRUBjwoKippistTvhtcMuONSXLnLgzc-14jN02Op3IySbjg5XiwI7Z3TmMcRwHyT3GYvt2-9KzJVeHpaqXNOHrn3pnkjxMXlVaFMURe1pxCd1-qINmpl8Lbyxq5K4MYcnwcJ2-cw7xFk7BDya7wJJSTQx_8EnJGvYKKD6qhp2yQwZdsNdDlnqxmgfS_r05MFlHVP__kCzVz7sGSVCmCIrE1-7eeelV95ujfb-fPjRN8QYPlI3LnbiqNLFBHdUKPmlQoJk_VnQYae5SgIOqIh_NoYqn1Cm37kgdKUhNiMgnJmO1pugSGbBg_tk_M4-4YbtdchbJua-iq5sOdF8ydHvdXhVY0tJN2cRJ5vQfZeQAgS9P6yfx4iNddhouY2JUjxFFQuU1af9cWHTUwouVVSFpO_vvUzPCEpyTDw-p39JvIX3WE7WjLMsonKtJoeD6lHije-aNDeu5VZMDaC3d-BPhM3Z0DDdHO2sDyGHSCkwLQhej09P2LXq-pzr0aVJ8e2N7pBn2_kFQySn1Xa7MaAuiF52fYfh3O3S2FNvT8-FSSNLL27sMW1A0UCjHZx9rwaQ=w800-h600-no"}
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
                    <a target="_blank" href="https://graphitegtc.com/index">
                        <ImageBox
                            url={"https://lh3.googleusercontent.com/XG1Rxr160tLznuh2LdZSRSnRZmub-GX3mg4cpz0Z953uNFtJB07rjf70nYZXK9M2eQTL98PFwll7qKHorOTXsyv-IzHa18xOoACxAzJ4ElklwsVpLVeNRzaLkfddJK8yQWnem5L8jWx_nWzy1aZaFdfV39lQhWCU4zYgE4mm-bRHXecatc2L9jN8mZEtNJht_oDldvwakzoa7cv94a1sDZMdIQ-H9m4cAVC-I3OTSF0GX9DfE8KRAe_ot-sqD4YJOXrQJQOrct07eSHPaZ9eW9xRHxji7zzt78bADIWRCcNohYmUYu4q2Cyur2RHGAlOd0mBHAT2YSZAKCcIsf0xQLEC5hJGa0rFra9w6yrW3uz8HOui87MpElDfxKCtF7QUExzpDWtmksiPjPtisbb2iY_WZHsh3kPAVaTp1dC33430Wz_bpn3JMicWSONuxpUyodnj-sr5ZbrCO6n38N_I9pX_Z31kKLCSNGoPDt2QctsOpoDCVGL0hqJ2w5UPIXGY3etpSRQbPQkjSWgTm1HKtR1DYDK_C-B_oscx3UnYwpwQnH96_qQ7fdBIajv_j19w4vC-TWNDwa54ROrBAgWDTed5ve6ng3zj9aQWTSPd3riK9UP66R2zxaSCoEH9k9J83ipA6M6e6ssfwzaU0d8MI1RCpeFQMMsBH5M4IERMiFwaF-S9ZpfwCTSj7wV-yvWy2BHElSIwGU4eObhTtz-ke6QBWWl9DJElmNrmHY8YXF7JiHc=w512-h314-no"}
                            imageID="last"
                            controller={this.controller}
                            topPosition="35%"
                            leftPosition="5%"
                        />
                    </a>
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