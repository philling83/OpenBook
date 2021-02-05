import React from 'react';
import { useSelector } from 'react-redux';

const YourCards = () => {
    let cards = useSelector(state => state.cards.cards)
    console.log(cards)

    const displayCards = () => {
        return cards.map(card => {
            return (
                <div className='deckDiv'>
                    <div className='deckText'>
                        <div>{card.title}</div>
                        {/* <div>Created by</div>
                        <div>11/11/20</div> */}
                    </div>
                    <div className='deckImage'>
                        {card.image ? <img src={card.image} alt=""></img> : null}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Your Cards</div>
            <div className='decksDiv'>
                <div className='allDecksDiv'>
                    {cards ? displayCards() : null}
                </div>
            </div>
        </div>
    )
}

export default YourCards;
