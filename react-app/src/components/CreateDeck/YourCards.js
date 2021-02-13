import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/cards'

const YourCards = () => {
    let cards = useSelector(state => state.cards.cards)
    console.log('Your Cards')
    const dispatch = useDispatch()

    const addCard = (e) => {
        dispatch(cardActions.AddCardToAdd(cards[e.target.id]))
    }

    const displayCards = () => {

        return cards.map((card, i) => {
            const keyName=i.toString();

            return (
                <div className='deckDiv' key={keyName} id={i} onClick={addCard}>
                    <div className='deckText' key={keyName} id={i}>
                        <div key={keyName} id={i}>{card.title}</div>
                    </div>
                    <div className='deckImage' key={keyName} id={i}>
                        {card.image ? <img src={card.image} key={keyName} id={i} alt=""></img> : null}
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
