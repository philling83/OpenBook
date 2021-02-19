import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/cards'

import './YourCards.css'

const YourCards = () => {
    let cards = useSelector(state => state.cards.cards)

    const dispatch = useDispatch()

    const addCard = (e) => {
        dispatch(cardActions.AddCardToAdd(cards[e.target.id]))
    }

    const displayCards = () => {

        return cards.map((card, i) => {
            const keyName=i.toString();

            return (
                <div className='miniCardDiv' key={keyName} id={i} onClick={addCard}>
                    <div className='miniCardText' id={i}>
                        <div id={i}>{card.title}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='yourCardsDiv'>
            <div className='yourCardTextDiv'>Your Cards</div>
            <div className='allCardsDiv'>
                {cards ? displayCards() : null}
            </div>
        </div>
    )
}

export default YourCards;
