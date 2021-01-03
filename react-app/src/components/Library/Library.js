import React from 'react'

import CheckOutDeck from './CheckoutDeck';
import PublicDecks from './PublicDecks';
import SearchBar from '../FullPageDiv/SearchBar.js';
import MinorAction from '../FullPageDiv/MinorAction.js'

const Library = () => {
    return (
        <div className='teacherDiv'>
            <SearchBar />
            <CheckOutDeck />
            <MinorAction />
            <PublicDecks />
        </div>

    )
}

export default Library;
