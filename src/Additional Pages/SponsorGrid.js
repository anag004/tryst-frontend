import React from 'react';
import Sponsorcard from './Sponsorcard';

// Returns a grid of cards for demo purposes
function SponsorGrid(props) {
    const {n, backgroundColor, linkTo} = props;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    
    const maxHeight = 800;
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. `;

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