import React, { useState } from 'react';
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
        if (!e.target.id) return
        dispatch(cardActions.RemoveCardToAdd(cards[e.target.id].id))
        setCardsToAdd(cardsToAdd.filter(card => card.id !== cards[e.target.id].id))
    }

    const displayCards = () => {
        return cardsToAdd.map((card, i) => {
            return (
                <div key={i.toString()} className="cardDiv" id={i} onClick={removeCard}>
                    <div className="previewQuestionText" id={i}>{card.title}</div>
                    <div className="cardHolder" id={i}>
                        <div className='choicesAnswerDiv' id={i}>
                            <div className="previewChoicesText" id={i}>
                                {card.possible_answers.map((choice, ind) => (
                                    <li className="previewChoice" key={choice.concat(ind)} id={ind}>
                                        {choice}
                                    </li>
                                ))}
                            </div>
                            <div className="previewAnswerText">Answer: {card.answer}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='majorCardDiv'>
            {/* <div className='deckPreviewDiv addCardDiv'> */}
                <div className='addCardText'>Add Cards to Your Deck</div>
                <div className='deckBuildView'>
                    {displayCards()}
                </div>
            </div>
        // </div>
    )
}
export default AddCardToDeck;
