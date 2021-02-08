import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import './AddCardToDeck.css';

import * as cardActions from '../../store/cards'

const AddCardToDeck = () => {
    let cards = useSelector(state => state.cards.cards_to_add)
    const [cardsToAdd, setCardsToAdd] = useState([...cards])
    const dispatch = useDispatch()

    let store = useStore()

    store.subscribe(()=> {
        setCardsToAdd([...cards])
    })

    const removeCard = (e) => {
        dispatch(cardActions.RemoveCardToAdd(cards[e.target.id].id))
        setCardsToAdd(cardsToAdd.filter(card => card.id !== cards[e.target.id].id))
        
    }
   

    const displayCards = () => {
        return cardsToAdd.map((card, i) => {
            return (
                <div className='addedCards' id={i} onClick={removeCard}>
                    {console.log('hit display cards')}
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
