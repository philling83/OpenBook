import React from 'react';

import './AddCardToDeck.css';

const AddCardToDeck = () => {
    return (
        <div className='checkoutDiv'>
            <div className='text'>Add Cards to Your Deck</div>
            <div className='addedCardsDiv'>
                <div className='addedCards'></div>
                <div className='controlPanel'>
                    <button className='checkOutButton'>Add Deck</button>
                    <a className='checkOutButton' href='/createCard'>Create Card</a>
                </div>
            </div>
        </div>
    )
}




export default AddCardToDeck;
