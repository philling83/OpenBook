import React from 'react';

import './AddCardToDeck.css';

const AddCardToDeck = () => {
    return (
        <div class='checkoutDiv'>
            <div class='text'>Add Cards to Your Deck</div>
            <div class='addedCardsDiv'>
                <div class='addedCards'></div>
                <div class='controlPanel'>
                    <button class='checkOutButton'>Add Deck</button>
                    <a class='checkOutButton' href='/createCard'>Create Card</a>
                </div>
            </div>
        </div>
    )
}




export default AddCardToDeck;
