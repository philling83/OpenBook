import React, { useEffect } from 'react'
import * as cardActions from '../../store/cards'
import { useDispatch } from 'react-redux';

import YourCards from './YourCards'
import SearchBar from '../FullPageDiv/SearchBar.js';
import AddCardToDeck from './AddCardToDeck';

const CreateDeck = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cardActions.allCards())
    }, [dispatch])

    return (
        <div className='teacherDiv'>
            <AddCardToDeck />
            <SearchBar searchCards={true}/>
            <YourCards />
        </div>

    )
}

export default CreateDeck;
