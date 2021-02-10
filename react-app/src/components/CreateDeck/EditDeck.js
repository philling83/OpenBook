import React, { useEffect } from 'react'

import YourCards from './YourCards'
import SearchBar from '../FullPageDiv/SearchBar.js';
import MinorAction from '../FullPageDiv/MinorAction.js';
import AddCardToDeck from './AddCardToDeck';
import * as cardActions from '../../store/cards'
import { useDispatch, useSelector } from 'react-redux';
import DeckInfoEdit from './DeckInfoEdit';

const EditDeck = () => {

    let current_deck = useSelector(state => state.deck.deck)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cardActions.ClearCardToAdd())
        dispatch(cardActions.allCards())
        for (let card of current_deck.cards) {
            dispatch(cardActions.AddCardToAdd(card))
        }
    }, [])

    return (
        <div className='teacherDiv'>
            <SearchBar />
            <AddCardToDeck /> 
            <DeckInfoEdit />
            <MinorAction createDeck={false} completeDeck={true} createCard={true}/>
            <YourCards />
        </div>
    )
}

export default EditDeck