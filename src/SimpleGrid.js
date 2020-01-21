import React from 'react';
import EventCard from './EventCard';

// Returns a grid of cards for demo purposes
function SimpleGrid(props) {
    const { backgroundColor, linkTo, rippleTriggerFunction,postArray} = props;
    // let arr = [];

    // for (let i = 0; i < n; i++) {
    //     arr.push(i);
    // }

    
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. `;

    return (
        <>
            {postArray.map((event) => 
                <EventCard
                    cardHeading = {event.name}
                    cardDescription = {event.subheading}
                    cardImage = {(event.photos)[0]}
                    xs={8}
                    backgroundColor = {backgroundColor}
                    linkTo = {linkTo+(event.id)}
                    rippleTriggerFunction={rippleTriggerFunction}
                />
            )}
        </>
    );
}

export default SimpleGrid;