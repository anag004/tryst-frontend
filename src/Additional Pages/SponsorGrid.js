import React from 'react';
import Sponsorcard from './Sponsorcard';

// Returns a grid of cards for demo purposes
function SponsorGrid(props) {
    const {n, backgroundColor,post} = props;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    
    return (
        <>
            {post.map((sponsor) => 
                <Sponsorcard
                    cardHeading = {sponsor.title}
                    cardImage = {sponsor.image}
                    linkTo={sponsor.link}
                    xs={8}
                    backgroundColor = {backgroundColor}
                />
            )}
        </>
    );
}

export default SponsorGrid;