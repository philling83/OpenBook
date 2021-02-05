import React, { useEffect } from 'react'

// import CheckOutDeck from '../Library/CheckoutDeck';
// import PublicDecks from '../Library/PublicDecks';
import YourCards from './YourCards'
import SearchBar from '../FullPageDiv/SearchBar.js';
import MinorAction from '../FullPageDiv/MinorAction.js';
import AddCardToDeck from './AddCardToDeck';
import * as cardActions from '../../store/cards'
import { useDispatch } from 'react-redux';

const CreateDeck = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cardActions.allCards())
    }, [])

    return (
        <div className='teacherDiv'>
            <SearchBar />
            <AddCardToDeck />
            <MinorAction createDeck={false} completeDeck={true} createCard={true}/>
            <YourCards />
            {/* <PublicCards /> */}
        </div>

    )
}

export default CreateDeck;
