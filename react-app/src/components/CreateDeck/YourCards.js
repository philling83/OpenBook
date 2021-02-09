import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/cards'

const YourCards = () => {
    let cards = useSelector(state => state.cards.cards)
    const dispatch = useDispatch()
    
    const addCard = (e) => {
        dispatch(cardActions.AddCardToAdd(cards[e.target.id]))
    }

    const displayCards = () => {
        return cards.map((card, i) => {
            return (
                <div className='deckDiv' id={i} onClick={addCard}>
                    <div className='deckText' id={i}>
                        <div id={i}>{card.title}</div>
                        {/* <div>Created by</div>
                        <div>11/11/20</div> */}
                    </div>
                    <div className='deckImage' id={i}>
                        {card.image ? <img src={card.image} id={i} alt=""></img> : null}
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
