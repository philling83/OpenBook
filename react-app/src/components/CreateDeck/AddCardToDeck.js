import React from 'react';
import { useSelector } from 'react-redux';

import './AddCardToDeck.css';

const AddCardToDeck = () => {
    let cards = useSelector(state => state.cards.cards_to_add)

    const displayCards = () => {
        return cards.map((card, i) => {
            return (
                <div className='addedCards' id={i}>
                    <div className='addedCardText' id={i}>
                        <div id={i}>{card.title}</div>
                        {/* <div>Created by</div>
                        <div>11/11/20</div> */}
                    </div>
                    <div className='addCardImage' id={i}>
                        {card.image ? <img src={card.image} id={i} alt=""></img> : null}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='checkoutDiv'>
            <div className='text'>Add Cards to Your Deck</div>
            <div className='addedCardsDiv'>
                {displayCards()}
            </div>
        </div>
    )
}




export default AddCardToDeck;
