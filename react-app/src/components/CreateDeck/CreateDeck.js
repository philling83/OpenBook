import React, { useEffect } from 'react'
import * as cardActions from '../../store/cards'
import { useDispatch } from 'react-redux';

import YourCards from './YourCards'
import SearchBar from '../FullPageDiv/SearchBar.js';
import AddCardToDeck from './AddCardToDeck';
// import DeckInfoCreate from './DeckInfoCreate'

const CreateDeck = () => {
    console.log('createDeck')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cardActions.allCards())
    }, [dispatch])

    return (
        <div className='teacherDiv'>
            <AddCardToDeck />
            {/* <DeckInfoCreate /> */}
            <SearchBar />
            <YourCards />
        </div>

    )
}

export default CreateDeck;
