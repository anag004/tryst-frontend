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
        },
    ];
    const hackathonPartner=[
        {
            title:"SAP",
            image:"https://lh3.googleusercontent.com/Ij2ee5UbPILskVB3jP88d6x_Mn3BoamUgBX_9EtN6CBLzgLQHwuSkBokt0bfFRn7600O8GNzjJO71BoVCwObeQXuqcZPFM_sAH1IrP4S2bL46j7AVlOvQ2v00-V_5tEAnIVO9e0JZGIMC17_rv3hLGkC5bSntw9rEcpRhEjLVmcnAn4X-xgytwG4BGdc3npxL0-Y4kBGlGjuT8UoSRPmBilBduQGsDXG0YF1uJDsvjAQQDUrJq2LdcnNcdvU78-3CMRcw8ZyGtUVLkk0V7TlUW79AntAxLfckaIwOzqwN4K3DgA1O50II6sYeKXmOI8jpwpMS8F0X9ypPBYonMUFdzE4XWb2b9XIdsLiXCAQCfdoCYqduZs0IQCoC_tgZdfoUiDzUPP8fK8AuQVi9giux-vvX-gDsRnPgsyCpjvuJE3kQsRXIJrMXK2txmyfJbE_W-ryovVGjY0AOzSKoJa7ulMST2xUVIJjRnWMsPfBFIPjqu1BS45XHprSSLD8JOP0kY9hSLVOuuv7TrkWrG3RoDFbXi_6wz5LCfbnpQ_5ygh81PM0rPqgbMy3-kThpVo2luQMxGbB83XyKe1icbYUD48kwvk2QvlqR6TlaGt1rfYRXvBYz6xCS_zMQEdnxYV-c_iBL1i8HUqPWXsbzODLETILABcE--qNCRfmXUIXpOTOz965HQzeVkBftF_vN3Q3maVkcjql0yuyHGM6I4HjOhcYGCghNZ9UVmSO0SeFJIvCAqQ_=w800-h396-no",
            link:"https://sap.com"
        },
        {
            title:"irsc",
            image:"https://lh3.googleusercontent.com/5hP0kOiTG0rCMFpRWe-S98d_qergyjHOBSRstIhytY0Br96FdRx3XpPfDmiCP72i-gzZiMnaWQiURcrQqYw38x3aMw7lD1iLsOefFPG9qJE0H-r8__aLAuPw33kXbKEIqVxoDTK1CAI3BL8OnwtWtzrAO5nrOlCIhHXcBwobnctcEXGkLjeSbTo2tzZ36AevPwiixWS3mlutTwy3VYfd_I5XA_JYi8uwWfs7ZY4FdrrFyf1WoXyx-x2FSzih1duPJcett9I2T-2QKre9D5WGVmGVXm9dKzlql_z4Vg1Ya4i9hqXA1IUF9-RQxwms3tcvsbXG66ItjKcGCm8f2qG5zsToNkWLcH4BZ5MrZxCuVsu8JXJQfkoRhtedBR8J-ZxBgF06joQXOGw0YBo5_ZWf1gw0gh0lk_8Hi8Sb0KTw1ap1HalyI_-O-zVgTjVyphwWyvkvPPC2gFElMEbD2qv2YNbkUFlvDcJjBzHBEJigD1lQDH5rCJxOsIC40uSwFO56jO6xe_VJOVk_whNRHisKRX312wJKEOfjIQCslAFyLADd7lA3RAKzeg0qFHuIpjwlxWytgGMDGmgf_GtfAc44JeFp3JDr5GCsCRNx2Oo9k3ne3fQQCxd0g9lVCocpUIwI_kIkikvUtkWPt33y3kua4-sGzXmg_8Ax56qBk8mkSQg63_dO6cTNYkvPRZi07XbRgzroOyupnd8NOv8BiHb0Xgg8Tip6-_hoEnqslEroGINVy5ba=w860-h675-no",
            link:""
        },
    ];
    const dataStoragePartner=[
        {
            title:"Seagate",
            image:"https://lh3.googleusercontent.com/5hP0kOiTG0rCMFpRWe-S98d_qergyjHOBSRstIhytY0Br96FdRx3XpPfDmiCP72i-gzZiMnaWQiURcrQqYw38x3aMw7lD1iLsOefFPG9qJE0H-r8__aLAuPw33kXbKEIqVxoDTK1CAI3BL8OnwtWtzrAO5nrOlCIhHXcBwobnctcEXGkLjeSbTo2tzZ36AevPwiixWS3mlutTwy3VYfd_I5XA_JYi8uwWfs7ZY4FdrrFyf1WoXyx-x2FSzih1duPJcett9I2T-2QKre9D5WGVmGVXm9dKzlql_z4Vg1Ya4i9hqXA1IUF9-RQxwms3tcvsbXG66ItjKcGCm8f2qG5zsToNkWLcH4BZ5MrZxCuVsu8JXJQfkoRhtedBR8J-ZxBgF06joQXOGw0YBo5_ZWf1gw0gh0lk_8Hi8Sb0KTw1ap1HalyI_-O-zVgTjVyphwWyvkvPPC2gFElMEbD2qv2YNbkUFlvDcJjBzHBEJigD1lQDH5rCJxOsIC40uSwFO56jO6xe_VJOVk_whNRHisKRX312wJKEOfjIQCslAFyLADd7lA3RAKzeg0qFHuIpjwlxWytgGMDGmgf_GtfAc44JeFp3JDr5GCsCRNx2Oo9k3ne3fQQCxd0g9lVCocpUIwI_kIkikvUtkWPt33y3kua4-sGzXmg_8Ax56qBk8mkSQg63_dO6cTNYkvPRZi07XbRgzroOyupnd8NOv8BiHb0Xgg8Tip6-_hoEnqslEroGINVy5ba=w860-h675-no",
            link:"https://seagate.com/in/en/"
        },
    ];
    const blogPartner=[
        {
            title:"ED Times",
            image:"https://lh3.googleusercontent.com/rZ4fdn6oguOwoDTiGjngZ9SsN0PP0b9HnOMR_pyiRWCtnCvzfZR27LGqDaBTwJ8dsho1IcxNAVcWCdBSo1l9p1ADGxeHgpnUNJmtB-ZnJxZBlQgGhaN6Y_MLFcQuBJywJbHtgW5zcVTrEWyJU9BiATcvnCJzMCgeEJ2VqvV1LRi3x4A7St6OnOr8eSKLQ9nOef4dWv_iV8cKuhEKxojJbohAvIkf3bm_MkGb7wzDoiRF-OgyKYxxub3gxNKZ1n3ILVICD1iQoH_D_kG4sVVIaVJEwnQMJx77jap6tSYLcYaGNtFbnX-LIxN9Z3KMCvlGsY43QcgUEoZJ3St8HISS3VX86wGZr0u0Jjvxx8M7T-rLOazFXW8pIbo3VZFeeOGqLIAnnOSSxPT30WaqmsDk8vbN1igcwUVo6T0WAVy-AUNoxCMONyoQnnkR5A_64-RXV9rbvgCPEYJwZjCwSj0BFCCtRs9YKkhn03Y5koe-O8AsPHtp4THKfTHsUxpf4danY1GXF7QhM_gFfV_KPKFhzOp69AZdcGI4CXG8ifZgWbe-B7EoqNMUjMlj6N0WC3_qWb9mtHVPAKuZvZ4zta3hiODC6zmyAc0pIA4DaRrcJiMsBHMC9KD8bhErLX9F1OGd7AGwVUaMHON_nh0LiUw-nM7Fc8S5W-RFzk51AwABXLGAHB0augL8bXH8OYbJ9Gjar7ykHZWiCYf_eTwev-lgLS0ehPeavKOMdH9CnfIygph8uLMU=w947-h735-no",
            link:"https://edtimes.in"
        },
    ];
    const alumniPartner=[
        {
            title:"Alumni Partner",
            image:"https://lh3.googleusercontent.com/XafMCq_-9Ti68BMYoyvIW_hE2jO9mf4-ObVFPAjeGP8dtO2bDOeDmq_S2mlHm5Ejm8vBlHJVTZUrmyZOVJ4tfb8mJ2SYplbAP9u_FNthCgvQ899wCiftEDmM4w4n8PJcBtFFyR3eFRu7iaRAJZBouim3m7U5R5JpYj-2a_NEg8T6VpQlpKxMfT1gItOJPggEFv7PJQx6mcMfOZIay7VByfKVwkS5e7MaRO-kFgycQLV6i-Jfdhhx-RJrVtdFiKJdBeT05MlofNsdYO_tPaGAc_PxYV0B9Ssl0NlwrtYPgd98FuRziBEQACk8MlR2wDiBmwBgBxkVaKy49QCLG288z7nWHTW-nmQEBFZm3P1dtao_hthCFuQVBOR8rgwjzjvwwMVM_9MMfe8h4SUjrtOxolwvcOx7dIxtlirry5pqcnf4nOwXffbAqMiaYHYVJgdl6b22e1tU-qm42Z3wxqSnm7jVKg80GbCU8FzB3N25FjyuG507XiJydSc23N6xULEGkOay7D_J30Kx58PGuNuiX-blScfGSdo_HeBkZ2aq9d4C-ojSzB2mRyrZl-eFsGHYl7VqegQnkG-YouZsRvgMNSLExSMJWM-Iwmi5oEfJT1nB4i6qrV8AUfcAKkNBwOGyuGD_Vn6qYlIAZuvtGE5OhnZRw6HC17ntxyVGThoaaFfB0mn24yTTOD-qhjGRBlmUe3KaTJapqOkvhWEPSuDV468Ah0GvfL-5n0PZff9cEK-Logzu=s200-no",
            link:""
        },
        {
            title:"Alumni Partner",
            image:"https://lh3.googleusercontent.com/XafMCq_-9Ti68BMYoyvIW_hE2jO9mf4-ObVFPAjeGP8dtO2bDOeDmq_S2mlHm5Ejm8vBlHJVTZUrmyZOVJ4tfb8mJ2SYplbAP9u_FNthCgvQ899wCiftEDmM4w4n8PJcBtFFyR3eFRu7iaRAJZBouim3m7U5R5JpYj-2a_NEg8T6VpQlpKxMfT1gItOJPggEFv7PJQx6mcMfOZIay7VByfKVwkS5e7MaRO-kFgycQLV6i-Jfdhhx-RJrVtdFiKJdBeT05MlofNsdYO_tPaGAc_PxYV0B9Ssl0NlwrtYPgd98FuRziBEQACk8MlR2wDiBmwBgBxkVaKy49QCLG288z7nWHTW-nmQEBFZm3P1dtao_hthCFuQVBOR8rgwjzjvwwMVM_9MMfe8h4SUjrtOxolwvcOx7dIxtlirry5pqcnf4nOwXffbAqMiaYHYVJgdl6b22e1tU-qm42Z3wxqSnm7jVKg80GbCU8FzB3N25FjyuG507XiJydSc23N6xULEGkOay7D_J30Kx58PGuNuiX-blScfGSdo_HeBkZ2aq9d4C-ojSzB2mRyrZl-eFsGHYl7VqegQnkG-YouZsRvgMNSLExSMJWM-Iwmi5oEfJT1nB4i6qrV8AUfcAKkNBwOGyuGD_Vn6qYlIAZuvtGE5OhnZRw6HC17ntxyVGThoaaFfB0mn24yTTOD-qhjGRBlmUe3KaTJapqOkvhWEPSuDV468Ah0GvfL-5n0PZff9cEK-Logzu=s200-no",
            link:""
        },
    ];
    const couponsPartner=[
        {
            title:"Wok to Walk",
            image:"https://lh3.googleusercontent.com/eQEkTPAPOiMT5PRRiq6rl5BjZyAcgVRx_k-NLKDeSnQF13FiqeQxtjDVsShf0S7hKe0yJU6chUnHy6gVpWkaL55ztKiFGgoa2u62ePcdkqb5JaKKEHUnWsJs7940qIfFMgLe-SkVDPImVfEHu2TE4djfluZkgoZ0Lua3dgCH-hJj6kwAStGxtyiNAhObW-YFtTm5t-JbD0hgMQoQP_CPvQPxLwlykiGEO7Y35KlSrHw94H3mi0HhcmdbVi7Q30Bja2_ckhiGEWNZb5uiK-tWYSSgMPD4ZYwEe2MkCArb6vmw99mhGhEAyJ3EATiQK-ZI8DdkamvVEtuI7QG6pD8k2mTnMd5OmpqLIf_TPvfI6Uu_0hIk5IMuH4mPtTEgBkornQzkY6AfQFk7lVQKCnFslmh91NMc_sek0cY4WbeMxn56f52hId-26qKljFxNj1ahGXQWJyc8vLFaxeA4i5qz3meFkoot9LB_F0_cX1Q5enittdUamZn9UkND5va9Vr137bXioy-99ts3Qe5nYlhac645gJMAM5zTmqLiTv0-__qZIq6BnCZnWK4orNPI__uwJz1WjQ0rRkHVE0CPqsvva0hpDlXVqPVE6KDuZq5ex633QsJ9V-ZhiPvX2gBEYdyTimiKexDXPzyDm5bysmVQZW_Z7ftTjfT5GW6lLkpkBGgb2vrhJPN0TUYQFTWoU_BE1fJWrjZ9gJaj-DXj1hiv76f8HkM66FrnFIO7Uf80Fdmmv1Kz=w413-h68-no",
            link:"https://woktowalk.com"
        }
    ];
    const eventHostingPartner=[
        {
            title:"Dare2compete",
            image:"https://lh3.googleusercontent.com/T9it7kEhUrwF0NyKvKhAZxJSMdLAlSryuGemDNKZ3ehcZTMJM-EUHSCCuUlb8-trQgocwfdqtPJFbZlTmqHYFrDQ1HedasIltL_Hurnf3eJRttiVLemjfNQcFo1T_kWCltiEgMdE0kqmPJ1ZRJ_ePV3ydsVNoa48uMhroE0ykbc1mWxdAO_72Dgtw82d5WWzkXat-jDyP3T35zyFh1NBuepX7h8Sy0_VNJwfuvVOteNMfVfpbRrCGy7GX4N7KDIxp-NzuKr9A_L84iFMtgNDyx-h_QrIi-roy1h0V3q2Xf4fzZzV0CEDNHZbOJvhHtvaTOb-qY86H_9vduP-KSGnZOTxSyv9hr96aCS8GGXwyt6c82M1CC7imTYYVKh38PJtvJn2RTlqcCEvO3TVIJvqxE1Uyz3PMxQymIpLSa6uENfF4Pv9XeHcD41RT1-naCnD2niIh2F2mJvdJwdrCupZ8Cz6JjTsR5B-D2VOW84e1M6zqOvFHchGyu6IWyzwT1z7g9pnHiaN2emqidQ9Ew2SC1ROjYdkNE7VUGFi-FMtSJNvKLDhHH0anlDW0LqUvm2fKsTFcaMofVVgBZDRqkk2pbd-LgmbZnzZQpqwIjQxRsfMlvM5fa1BDFtAFi1Z7Ass70N4zqQgvceW3nmoO2jGrLimJf44NuwkXOitFU4XipDc-X9bOhMkMWDcPVZGfw545xHlTmgPerc4aq98UvG45TiiQq8csS9M5_bl4tyxQuqYBLHF=w1866-h867-no",
            link:"https://dare2compete.com"
        }
    ];
    
    const digitalMediaPartner1=[
        {
            title:"inshorts",
            image:"https://lh3.googleusercontent.com/LD2tshuuwRdYig0hlsr_E7xZWU5PFDJxJIxM7UQNBAAOkk3QdIMoYVWgPwaIuX1pGU9HB77ojw6XNs_5IdCHMrlAlhgS4pTeDqFOoH7LPjbi6vpUSHfcRmqA3K7sQKmshknqXAh1BOlzjHN8_joFX7SnsamnlhbjP1eXozQXZf_Cz4AgNqpY4dJeYBopWHR1k6xU4VPOo-SbQckhLtnSlFTIDzB90BAiaBjil5X4e2dnRD27YT2JDXghqKUKiqlGKKXW0HX1Pu1DBRdoHFLFsukuKuJ-LSJ53qq_iEdQMp9-Fto3-XZ9Wk2TAfisV5PLVCEYUs5doVzkAK_7DdUuNiTUIWX_wF7oyvL1VvMegQFUXTyiVFUU2ANM5BgihSxbnjVeBVXHQIsJ1x5xNaVzPH4rYW3XuNDrdjNWRHDjGUIU9-W5G4DAJkD1eJNQ3icbGT7oFmf4MYldPBNS5wEYJc618_inHqvpLgx42i-mLh8lvvS5zBDRqtZHkI8oTDaTXD30hTURaoNpFEfyPLW4kdpKBhfLEpaQUOuY5oX725dqtakB7jzQCbh-JcSMkT1Q4TV-lHDNHGnnV6C7RDSAHL8YJnba-bwo3ufSSTP2Qo6D8uqE2Ec1CscqBgAMLsYVwvUE1ZdZmvTPXJHe4aXjTj8Pz6OQ_XdR6SPsuSEs4x_7Sjok-L-KQ1IRC-dcvtVVQbIjxTnhlq30qWQpsN6_S2YK22Zuu7_sFN9PxPnmdCmtQsMY=w400-h140-no",
            link:"https://inshorts.com"
        },
        
    ];
    const digitalMediaPartner2=[
        {
            title:"Your Story",
            image:"https://lh3.googleusercontent.com/iBpTzjj4p3vLVXZHZdmpxupksRE2-0rr-tJw2CjHAM0U8QquDFWaXjw-yPxYOAd978vcUqB5u8Za3so372UzJBMkmDUZPTxiJHtvBFVmgRjypF0BxfBUHnJ06OMgNyDf7BJ6eoBcaKp8Anwqh1GTl1dYdaDv90DZI4tLy1P7SgZ33GogiZNaai0FjjN1I_213fwmcm9XkCg2PIOAn97AEd7GC_xCp4IAuCanouzh-5koOfCzOvHoKeY-6kk-cQVATKEmGO9bPBkWFIqWa-LuwT27Q2wLsdKSYb1oadScdZZVyc1R4Y1Oz0M2nKvv8GA6Nklc-bpF1RI_keSJp5trHQObcpHY7-P2zgK8OarRo9nE5JW2K1Fj-SU3U5JntSAUuVmYMfoxHIbULndWp1oQDQbG92Vy6otY0nJ_A-N1GoKCdBKjKRfGoEeRtmc6zWM_pAHZOdSb8fMVOPBKQjHViC0dn23GTu4IHF8JIZrG7ivrDYGYubo8Z-CmWoOeeMzeZ_YCHGRoU4twuq1s4dbJMQcUaADQO55Ko81JeLGRVGXdDfO2zs1XPQeAMxwxSw05y9ahnOzLe6Mm4bFUkpFyPidhyuqf7pY0ERXG9gXL49HRAAICzumk6D3u99tVp3invmimOUoiNsGbzCTndrb0FTpmtaW7O5R7APm4hT44ztqYmdQ52x6EUCxG-RrCczHj2NNsQf1VRhKyM4fvJRXgOyohc3w666BUiH4gIu-yRk6qUx1_=w606-h556-no",
            link:"https://yourstory.com"
        }
    ];

    const digitalMagazinePartner=[
        {
            title:"TheScore Magazine",
            image:"https://lh3.googleusercontent.com/tzO-hVE3iFaolp6Dg929XdFpWldyLJ7dy7HobJ4KcK0tUmxjv9SArZgGWf9uy3Fyk4860G-zqaCgTJMcsVo9Jj6GWShGkMfH27Mzi-mO276lNnhRG2OJ1QfIjbiq0-xtaxRU9fw_wgn8agIGzyuJG9C11H4aZA8LUOc61iPo_tRw80VfS0Hgiw1qCgC87HS3gQjhfST5kjFi6mUdutiea8RPpc8Y4b_e710Mx7xt7Eb6RScfz78y7qM2kqHBxEP071bgOhg6OsphyVyCmlScbEGy6fPYWyZyxhf0B1G1lu3jKGvmTZKdaKCS9Jk-NaqNf7zJMl7iALTPOri-e20O0JlCE5iBwqmh_I2GqG95F84a9DrKLTXPVF0Ra2pU3w3kkg6rLo3KuWUO-WS7YQZop_k4ONWEzgPT4cTQHRohx9SQR95VbFI0q2cadWZ_XgSJ5GihVIy34rNkkA61iDaS_KtG09FnmQaYSMT_8fzW6dYMkNM_e9T-7l3IiZvLfBpMz8kzEe5CI3csYcXmqFQXZyg4nEm9WNnaGTQt7Ght5USzJBhDqgEkExOTUqVqo2xMeqjEFWaASfeA_sOBSIdRLzLibJIleUPTwkX08FNu_29Zju9b2ndNNv1OMx-WJQE-RKAwO-_hDwGRGhAFLx0hE4j6J8Ixb3Xp0LXymDFhvWsr0ls31lB3PkpXw_7uCF70zhUnVlXnZ088g3bnTEyElCkd6IafMgxO1XAYO12donz-dKra=w300-h137-no",
            link:"https://highonscore.com"
        }
    ];
    const magazinePartner=[
        {
            title:"Digit",
            image:"https://lh3.googleusercontent.com/ouDW3w5gB8l5CiUry0QUSppPMT768n8Z8zQt-jiW7OjsJGpzHTBsp56s67ZAXebe1smUsp9S1_b3gwLQDDfq1NOY6zyrA9f7U0IG1RNtYGD9m3LIx2g2KaV00ibezKDriNTuX5Oua_RTBoNgfZQRgzdAD-fXE1-D-eq1Nf1sOyVBU1QfhvhshYlM2EshbYp-V-4aQfRaPYLzREP08C9UqicScQ0_lOKdEFZyQcoEX2PzUFa7ajOl-XJ3gHoc8fWijeDp9igD3i69fsvZjyHc2PhpYGfgkUkGkm-8GnHWyMriFilg6PYfvqVKMg1qfQVExh7EtNdQ_ywoWXCJbgifH86YFcOfPHTkS98W40p6KBuO1Z8bQGfTecPMATqNrs9TNlLwGgZIcYH2rktWV7FjH_tZaGema9hw-X30hZg3Lm7fbu6-GhsiwiLxV9TTpQ_Xq1_7Gz1Knn9IbdsF-0-4MLj87JGT7eX9KoVE65_H4HfdNXvuttW6v1iVuRl9Nrag9WpeVwuc4LHcKOM8Auk06fm_oBgczrCtrT3xdOBh5M5PdrP1ixobbaLBpMVNb2QxTbkRoCeoS5A_jyLbR7ozA86lpGNzTYLxJlzF_5yajSs9N1yc6uoGusuqgT2iQuY9AMHmvO8eu064UNNGforhwSbEWvMIOvsnP1Q9t5Q12KBodIyMhKzq6XFQvgtJ4tpt53jwBFzINQ7Xpq8vSAGuHywbOzEx2z0tBJiVpMNAooNYjdQz=w1242-h362-no",
            link:"https://digit.in"
        },
        {
            title:"Scientific India",
            image:"https://lh3.googleusercontent.com/ul_jVpfk4PprHyhi56tCYyyEb1NwsfjOfnrXE7EBhiEE2Sv-xyZO0pu0PVIozyjXsqRDWWzSpe1XjqFZS1ap36NoQaBBjQzZeiBmq_ywzBdFKg-K31iRp--4LCulx5ZAmG8G_1Q23KM24LKdsdFOqOzF_LdUX0YgYzIilHsS9d1jdjcxIlTbl1e-fOHifI8NxOH6-VPXbFMIzHLxiQZwzALSMjh89sgYrntcI_8jVpRUZe0pAdQbPRT8u05rQaVnO5HCEnyx-SLAmV_VK1Uo2_hkT6vh04VDjp9c4v92VVINaEUEIcjJHS63lW3xf1QZh1IJkptVPF_dfZpC6r7o9O3IwCPo6gjs_EZPSpC6HjPjZktfOoGnN1-Ntma0mPQR_-1QDq9cCt3uLZiWq0z5oMnGdaVmCOWhKyBKoeeQh9pxoINAfh9bthWcEibtGm4gw7kkCXMs1dv8Y0Em4qQSddaZ0g16YA-OPsjPH8dlTLB2MTc9HIqBh3pBT7Fi903iU2p7FWfGz8F7zFnt7voA4fIXsKwZdWYp2OHZRo9kbjBfIaWxVwDCGZtvui2rL2HVSMq1ytn9PKNpwREsAtI3QvHtN1Rffe7dsM0tSiHxcElZcPdeep47FFjOYDKBkTo3YmyZd0vtjr-NA0iwaDGlTHfF8WW9000T-Ed0MGMieh28rwlcS6YrFE2F69o8SNtdC3qSx4vSk5U4SPg5v30Y4th7M2uGtAyUa9j9bfs71d4hieyd=w210-h50-no",
            link:""
        },
    ];
    const mediaPartner1=[
        {
            title:"DU Express",
            image:"https://lh3.googleusercontent.com/-dBOtlJi1eBbddhDmIRhw485ZXi3zwrwxV9I3M7l2mOsZVgc7eLYLrDK6hByvbQUvNSedi1ha4P9pZQZ35iKRdiEeZhtKkZIma7j_SJ73xHs0Y6RZuFl8S1hkGZXKk603AcyRiCy5pSJE2P8xG1_gnc-HndOpcWfreX5EMIVI_Oruq_ve6BIxV1UffnOvWENK_yLgH7xTMfC8hS70BC31H3p13jKjD3RVc7YMHUDIajqhKxjWzz2a3TVjIAnXJ06I3NiPuTLpfjeZJ2ovHpZc13VYLbBLW5KXHMI4k_7964jPD5t06SYHq-AbN56Ene4a7F3_pC0XX8O7IF66kx9koi-PfagJfEaR-AA0Fg6pziYw2lp_BcNwg_DV8vLaIzc3UvVntuCgSs3Z0UMb96npqXICxjfCZcVYUTn9hBN-UWPWMQAGXztopMxpmaioYIXP2NMSPi7gnu5GT5AJmrznFeRHc8vvC0jS1hgwjjD1NYSfBWg9W2aGyh__k93bvh5lDH2sjSFsfKisjt6Bb5GFwagiPymTP3HwyoeBHQa2MDoPyH3Z3LUYVRUsngaF9JrIFRe7KEdJSzuJk3QCuZX81CKwIWBgVaPPZRG5u47xIntaMfGeW6RaBRIXNDtKdALEHiUnS082paGWlsBKUxLfgVlDN38AWZwsV_hbXFWtbS6YxAeucDuLDU0rix1CI8W471l5bClolaZU6by6R8lOtxOUEin2GojtipRsyRBdlBN4Olg=w272-h90-no",
            link:"https://duexpress.in"
        },
        {
            title:"OH campus",
            image:"https://lh3.googleusercontent.com/njHk_se6GIzkB7oq_H49Xju2--KuXw8fU35xYOjgJX3Ep3TkZ5Aq4RpvItGsc4uK3FK8fzegRXUdYhn7Xh8vzMi5OfxFZXGXp4LtqhY0HhY6i7Fx7s5sf3-qLeAuaRpMj8RFpyJRnl-NkhE2ggaroGZElbGmutlyGhsWw4-QQNwxuXz9V0gjMoZuKRYgzJZDsuN99ea3B0uS-laXOhBVPd-0FrTYp1W9OhMjypnNvdN35GBJxY16eYfMeMAY-NjEnxVnwlO9ZcQOHX47DECyGUd94qYIU2e3a3MVgDoH7K6Hl6s1fZaLUQE98fY-COpwTh9-JnLeas_CpcloxTve6XQCzXlyXlVZLdmyesKYJdbGmpbAoOhV1jQVknIihS1S9-z6_GHuYT2WSBzxkk6htwzm9VtS2LxHSIMWradbO-8Pz-bmsaJ48Umj3Y23qBb8GMPb516fMSHoHcrZkDb46_6KSFTr3EpVCniFZQPA8LyCT-I5VCkAAUBmzQf8F0-BPi5Y565jlJ0kbhRBCOnDpTsVw0paFNaScq1lIGrnw6b3q7LY8xoHUe77qGZVc_TwfeiCb4JHyzbanUtQGwk8DXMQW2hoWpLgFK48TSBGFTf2FYVXffMcmqFh5hfACr1d_NFV6k7dwhbIy4VXrDYBM-CERlRfs4oUdU9CrlV98Ny_EsVQFnsHI3uAfwAe0kXfBRBtV_HMdP-wBEg6ioW-O0psggs9IaWbfu2DlMGPW5sazVB4=w1920-h663-no",
            link:"https://ohcampus.com"
        },
    ];
    const mediaPartner2=[
        {
            title:"DU Beat",
            image:"https://lh3.googleusercontent.com/_BEHamViwAmC8qeVwRVWP6zl-CCRphfxA-emDU7ssbKG1GXaXXbzlGd6gmx_sN1lnZpgJFf_mhpfIfHStqdc5my-R8S6di7o4sEakj8NU-yD9ntTwg7462ALQtcJJDJxjtZWY6xDXPq_SHVhitX4T5fVkW1njPSQHimaeCzxZnzIEg--Yoeh8S8_HfFTZz-f9W2UKKsU-yDveXkEdd-kOncLRu1YPHNX1vdtUO5DnrHJ8duDoq_GMpCHZYAh2H4pz0ULkySbAfQN1ThKgkMEjcmeAlPblBfS1xoq5CLB7snskgKU6UCkE2ZDkmcGSPYe2URAv23zIUrHQOCTHnEJ__aeEj_QsBZGgF5OOGyQO3EB3FYXAMqVsYGLLpYEAtzWEYbNLcF77eKZ_1_DkiItP-HDYRvulY-cxDqVzjrppNDa-8-jvxYnWuJD-alViCtUNV3VlGlNSsNVlcSIZhXQ_FU0a7QwwVnNQDxC-wQY4Lk3I2OwXt1TxWXA_jKRU63FopU1HmNA2bfkdsbBqoLx2ludbYRqlqMTs50wOGOBZpIrLswLtnGt_GJS_xzsPm8FG27vYHCLttYRDwqxFh5GdVs76jskYKHI0Az_XNhbWZIYetImx9LEMjh4-H2FXJ90eMMml2l23WX89lk3RJ9P2kQuVizkL6R0DspeOasxyQY-PM_8gpSzD5Ljjvk3XDnBF_VRnKYpE9ssLSbTfwcXVR1_MJO9Yv5RVnNAGyiP4w4lR8aO=w440-h272-no",
            link:"https://dubeat.com"
        }
    ];
    const mediaPartner3=[
        {
            title:"HBR Ascend",
            image:"https://lh3.googleusercontent.com/w-w3zxgV6neYUbGa0GIKgzLbjKnC9iwddTdyiLRveIBpJxHQz6J8mMOqXsNf1Re-pS8DuYRje5N4O7MJkmBB9TkjCRb9B_g1zFuEXVgkLp-m7nJoZvO68OZ6T72hseRCDKlW7IRxNKqGX8rxiJGlNGmdI-FauaGcRC16rBIuvyMj8S7eOYXmgZBzNxdEs2ddCKgYGI7_lBO6vNRGW9sfzIQvGHa9oKB5v-LqmscN65tokdRfJM6qv04hPSxq9bpZfLO1vmprbXjW_RhkRz2uRPwFSNDR-CNX-2vExPYzbAhZLbAiL4R-O8d_Jw0LEQRR6uCcY_Zki-18c-ZDfql3KkLmT8IUOxRRIF-16cc1KnGw-BZx48gqNivEh5UxT8FJVyweJGZn9De7Nryl390GvB37kKOC-Ixxkd8J0X6s-mmGhS219SLh9hTPYuUZ7yYvCYj3M4Z5V17XHb8TdcVBRcaEyx4oKayf5XFmTMHlDmXH46wm9P3DdevuF7fDzGkf0r8h-qD1QnOz-jd1nTCPvE_CxIJttwNEc7T0G7oKCoNkhiC-ato7Ftylgy51CmrMBbikDnvdmtOafdnpfz3g0yQoe54KfIKQjCoY-M1KCKZywZchk649MpC_TvonxZ1up0U9dmDIdgdb4xqJ5u3Jn_iYrMK5E6zPve8Xgn970jalAXSdPYXJM4x-MhnQiN68V5Wqn5zZW82r2Iv7uWUBPxQMgsUcjy7ZfOqxGGjlIOUw1870=w708-h207-no",
            link:"https://hbrascend.org"
        },
        
    ];
    const eventsPartner=[
        {
            title:"reliance",
            image:"https://lh3.googleusercontent.com/IRpqZeZorbsX-IPiqdQjHgx8jsTkKSZokDqERGPhMM9gWuzf_4qf7qIzhOV2y90xSeqsvF1dVM6EwaA6Lfi91Zour9_wvaWVyIFNk1kAEGZoC0uGQ9yTbLhABA5IiEFQ79UgshiC7q0trLeGEPtJqFVrJEYSjVmeeoldtXFaNJSENGAYOQ9g0hTBgcmMSjX481dBlLhyKuMi089I2cCThPEjYbwQZTYyzEvry3J_HfIXvEM22YzvZLR7gtzqFGHq-XkOE2J5fzMb4FvdtQqc3vnX5uP-zK38eHL3uynESAo45bS1V4gwcDh6pOprPjGDgO5W1Uu4XjR5wZ_XHK_JIMEMYfUVVQpUqTQklIldED0Ai4bC0-E0yQlf64383MfzkLLXx8-wFpUhjAreNZyCkZ0Gdi2phNqEHaeUMh9hJVPCfNcG800o0WMI09o_f0YMcwQvVapgHdn8rGly1mWvDiP-F3z4hJb78igpvBi03W6ulUddDhot1S1Wp4msBMZW94ZqkVzL9UV-Rie4zpPgWEonk6RC330nDlnj2PGEHlpdnoZcAYwjjn3kddFzG9qtVdmF-4xkoqvb0DZWSuURVXKO89vE5_g0kxMJfumCG_Y8fJOncGS7_LzWcy95e7dXE7_18m7580ltBYn2RTnMVxB48gLFrfphc2f_tV8xemkBc6OMJfSzfmIY3hEKwvF6dEXlsrhZFodyY4kvwG415AK94n7J5A0VKvgjPfK_EijrMxqV=w860-h633-no",
            link:"https://ril.com"
        },
        {
            title:"isro",
            image:"https://lh3.googleusercontent.com/5AJAz3wT77P5niLic-IXcY7By1a-z6RxolS4PpqWvN6ja4C646HAe13U-fz2xBM9YLky9Eb18Vsy13dA2qN1Hgfellln7jyYy2a6GlB3L7w1l_5HPjBPJcpZWfrU-OEZPI_eb5P2y4irWj1tW0Gdft3GsmyQqN-raZrGt_bVvgQL-pXVY-plneP7WnBVz1-5q4442ZimyUS7iFxlhkpJHojRdFLwDqwC_hR8GmAb_ErY7LRW108laHpYGS339yazALsVnpktIeWz9pCuCkmPGvWReRS657OwQwqKIGQFhBTmJ0KOA-h1QLmZJc9mMQ3NU5uDa2yven_gR41Z39DJcSKveCFV2b9X1RuaiQklJ43rvQ9qOjhXmbqRlyLGP7fH22uztXpIvJ5FiEW58Z_742gR_myjK3-ThifqrCfQxI4yAXY-jv6m2s7zmS_G-rgNMbKA7MUZGTcO2-o45Ps5iv_i8sKOFvR6AGUhNY6dFS4F95RtPXDjFcnF4Tksi8FAha1wZ3DNTBOiZllKSa0b707pbpQTQzOsaCQ93AbPzuxLDqMLuWgtjQazsvQwYvfX4OmjcpHt_72bGDISxV6QtSzqwaVVglh-q2_K8NSR05it4xNo-Q2_-PRdbsLRnE7sEVyIHly49ECXR31qgiU5TwYq8P1fmim73FMDd9cAEZKIz5y_0kXEAjkgvZ2wAKt9CkNZr4FlSxfbCt7-uKA_2J2qwjb_MpKIVKNkIRO8tY37aE-9=w267-h258-no",
            link:"https://isro.gov.in"
        },
        {
            title:"springer nature",
            image:"https://lh3.googleusercontent.com/JeoKyVWZqtz0zk-pvQ4RzWy3yrDvfHKiSBIT0pL2ke0Ss8z39h3DNyNTlGr40kOkMtPaBaWQof3-QFeSjIknkH1ZDVYh_9G-vMBUdfEcia1ryPsBoO5EDKzQgD8KmhZG1z4Ckl5uA7CFbiz0_tp2TTHC9WPgNc3GD4pPxOpjeeTbDtD9rgvTUS7_vWoP_UtDC3uOYvFhlfkkH_UDZ1S2nGGDTkL9wR_ismChm0fjtkAZ1Qf_jgkOFcQidggbc2qgRIcZ7KmnEfb3Iy9sVwvh2RDbGnercNTJdunpqY6Ys4GkpxNFINkS7thyj7TAkYYr2MmlRGSuRCOyd9jqm6pxrD-JmGtrT9fZPPKR8sD45-MC3LhPFR8RViO6osKxnQE_-6y-CTGoAjc0ABI68L-ffdgLNHwe4QtxxpHqS-UMnjoD44RIjj6CuATylJNrRsoM2mgts8a3l9ZU8xgP5WOp7Ug5C2-tU54ftTpb3P0EoAgz0uAosdl7drPIlfdEfDoFKXK6EN6fCf9oA2BfzbbKFwGUIeLvDElPjVNsoqmEKrexgSFbVDSDCI_YMdorTQd8RYEf7j2MEnZW2u-DhVs0V3F_el8vHTU_um18irAEcrry0A2zOrW_RtOlBCkr2jvTwufR4OMo21YXFHnvB1_US5KGsjhwq0-3TbOggybHXbOFAJUXgiOkgnEM3cT4xvI-1tgCqKlxIL23Yxk4CrOUu_le4xm4N0G6e8mECK5MJC2HSf1F=s340-no",
            link:"https://springernature.com"
        },
        
    ];
    const governancePartner=[
        {
            title:"vision India Foundation",
            image:"https://lh3.googleusercontent.com/j1BQGOD4r9kswft8LJaUjDzPIxF7ERV3yrXKH0JsrVp1L_3aLtLUMAEiitK-xh8OAwFxIePJUb5hBerL0u7WnxZzPzk-B92ncTVb-kEyag4ipbX8yT7-4qfRQSjCBZiDHtfM8OmaJhgqyboqDFjF81Ye_qyXmPft6MfYoMRGPtMI0mxmHTWSn3-U2MYgST0d5hmPOiEbnv2gxN0aTx0oP7fLnBsYsp1jys_C7R1ddvSl6FWYodGU533jQ5gNxGoJ707fY8ptn_qpOuS-lbcU5gW8o9wwjnE3DyewT_1Cs-7yKXMVx9Nhg1b8YgHdJJzMO_Mu5F9KHfnB9jaxEjxq1ODrpKYOXPebFEIyHo79rXRDLEFtCq4X7dtRivw2zuYdiKhXauhHSw2aO-zG9lpmvE0wzA05GgfCTXJBI4fgEGLNAQUYyvgFp9cgkxF02lHA7F7kc1sJI0QLEKwYS82BlEo8vMeXiUf0-W-qbUbwQc_YCLyxAfzDHUhU-sRe0fsJ1b4z748W6gYltZS-y-ooORNbmNtWNag13cQtVOWJLsPG60P6GBdxiDEHh53a6MBZm-Mv-mxmNoy2VwtmNFyhVERak6MSLskSoIiZoAbwkkVWrE_v90KtJ9FJLxhj2i9qfeQlkhMZaVpebw5L-JogeRUDz2pKspE3hKDGYV57rNqAhQFGsZz0msqSX_t9FFD4b4DNmZ4o52dGgEh1ghgtH_cXu-41oObOfsrZrv8_HjoERitz=w522-h521-no",
            link:"https://visionindiafoundation.com/"
        }
    ];
    
    
    const associateSponsor=[
        {
            title:"SBI",
            image:"https://lh3.googleusercontent.com/_WmOdbZDRd2NSqRRJQBXxfls0S6sT_nzZ4JqiGcdFLiCjZAcZElYgH6r7tHCMuGr-6xO9Egs-WqI9rgq1i2BHghJ9G0SdLXfAlJPvGL9w9wwF38NWLl-gdMDefvp3JfueTpg8omA1uatxcEWTy2foGBPDmlfvhmdER0AUGucYwBNBeAWGkHIDTB6XSO1koy_DYaDiAlIi6PvxUY9nVfAfKm9_vtFQebwpTwWlhsseJ3ov37d-H-Rp8KBNIRhXxo8laTXH84ExrtaZGr-BBV1YYZGz-kqSZuj8XO3jQ3ocXavYnNcGOr-pxXJwgCHGQDRJvql1l-Tug1YkZcFeymCCRvbQXBDiaLKSk0rL4WIDSYdY50PXBPbxw7usEc0gtGUpX6_VWvHM7Ui0Zim513RgCjHccrFTUFGUKtfWfwbRAjy2WHT_2nffbaAnTeT6QUDYob1suisMsmCerIV7aHpv6Sa4vgTuWz9IzAM1_yo5tMMbcDWPtK8YMvMqEyfZ3OdeIkaxoqcDKPRpVMZL-ETaq7ftnfgKEGk0j3RUUf8n7SuLo3qya9X5aSbRQnt7VZH7Yk8DNuvoD2-1DLqoa_qTEyCxPOzAm_tqY23jusIJsQWWGH3tgLldrJVJLCrIGxTlmYKR-A49A3yUfh76Ws7F7lgBkB-tce7b7mzaSYef1gGpT0neje24qiI3k0mDi1d9GE4wJ3fYlgRQYTCRK4CiNY5UFmvPKdi2oNyIe2BFM19n3e_=w1227-h867-no",
            link:"https://onlinesbi.com"
        },
    ]

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
                heading="Media Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={mediaPartner1}/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={mediaPartner2}/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={mediaPartner3}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Hackathon Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={hackathonPartner}/>
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

            <PageSection
                heading="Events Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={eventsPartner}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Magazine Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={magazinePartner}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Blog Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={blogPartner}/>
                </SponsorCardRow>
            </PageSection>
            
            <PageSection
                heading="Alumni Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={alumniPartner}/>
                </SponsorCardRow>
            </PageSection>
            
            <PageSection
                heading="Online Event Hosting Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={eventHostingPartner}/>
                </SponsorCardRow>
            </PageSection>

            
            <PageSection
                heading="Associate Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={associateSponsor}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Governance Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={governancePartner}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Coupons Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={couponsPartner}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Digital Media Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={digitalMediaPartner1}/>
                </SponsorCardRow>
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={digitalMediaPartner2}/>
                </SponsorCardRow>
            </PageSection>

            <PageSection
                heading="Digital Magazine Partner"
                headingAlignment="center"
                containerBackgroundColor="#29426c"
                textColor="white"
                description=""
            >
                <SponsorCardRow>
                    <SponsorGrid n="1" backgroundColor="white" post={digitalMagazinePartner}/>
                </SponsorCardRow>
            </PageSection>

            
        </ThemeProvider>
    );
}

export default withRouter(Sponsors);