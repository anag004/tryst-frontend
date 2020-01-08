import React from 'react';
import Sponsorcard from './Sponsorcard';

// Returns a grid of cards for demo purposes
function SponsorGrid(props) {
    const {n, backgroundColor} = props;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    
    return (
        <>
            {arr.map(() => 
                <Sponsorcard
                    cardHeading = {"Bubba Grump Shrimp"}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={8}
                    backgroundColor = {backgroundColor}
                />
            )}
        </>
    );
}

export default SponsorGrid;