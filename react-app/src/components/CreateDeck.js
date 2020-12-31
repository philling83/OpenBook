import React from 'react'

import CheckOutDeck from './CheckoutDeck';
import PublicDecks from './PublicDecks';
import YourCards from './YourCards'
import SearchBar from './SearchBar.js';
import MinorAction from './MinorAction.js';
import AddCardToDeck from './AddCardToDeck';

const CreateDeck = () => {
    return (
        <div class='teacherDiv'>
            <SearchBar />
            <AddCardToDeck />
            <MinorAction />
            <YourCards />
            {/* <PublicCards /> */}
        </div>

    )
}

export default CreateDeck;
