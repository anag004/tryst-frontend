import React from 'react';
import EventCard from './EventCard';

// Returns a grid of cards for demo purposes
function SimpleGrid(props) {
    const { backgroundColor, linkTo, rippleTriggerFunction,postArray} = props;
    // let arr = [];

    // for (let i = 0; i < n; i++) {
    //     arr.push(i);
    // }
    // var i=0;
    var n=postArray.length;
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. `;

    return (
        <>
            {/* {i=0} */}
            
            {postArray.map((event,i) => 
                <>
                {/* {console.log(event)} */}
                <EventCard
                    cardHeading = {event.name}
                    cardDescription = {event.prizes}
                    cardImage = {(event.photos).length==0?"":((event.photos)[0])[0]}
                    xs={8}
                    backgroundColor = {backgroundColor}
                    linkTo = {linkTo+(event.id)}
                    rippleTriggerFunction={rippleTriggerFunction}
                    left={i%n==0}
                    right={i%n==(n-1)}
                />
                {/* i=i+1 */}
                </>
            )}
        </>
    );
}

export default SimpleGrid;