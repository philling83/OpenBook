import React from 'react'

import CheckOutDeck from './CheckoutDeck';
import PublicDecks from './PublicDecks';
import SearchBar from './SearchBar.js';
import MinorAction from './MinorAction.js'

const Library = () => {
    return (
        <div class='teacherDiv'>
            <SearchBar />
            <CheckOutDeck />
            <MinorAction />
            <PublicDecks />
        </div>

    )
}

export default Library;
