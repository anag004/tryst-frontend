import React from 'react';
import EventCard from './EventCard';

// Returns a grid of cards for demo purposes
function SimpleGrid(props) {
    const {n, backgroundColor, linkTo, rippleTriggerFunction} = props;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    
    const maxHeight = 800;
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. `;

    return (
        <>
            {arr.map(() => 
                <EventCard
                    cardHeading = {"Bubba Grump Shrimp Co."}
                    cardDescription = {dummyText}
                    cardImage = "http://source.unsplash.com/collection/146130/random"
                    xs={8}
                    backgroundColor = {backgroundColor}
                    linkTo = {linkTo}
                    rippleTriggerFunction={rippleTriggerFunction}
                />
            )}
        </>
    );
}

export default SimpleGrid;