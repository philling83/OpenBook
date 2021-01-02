import React from 'react'

// import CheckOutDeck from '../Library/CheckoutDeck';
// import PublicDecks from '../Library/PublicDecks';
import YourCards from './YourCards'
import SearchBar from '../FullPageDiv/SearchBar.js';
import MinorAction from '../FullPageDiv/MinorAction.js';
import AddCardToDeck from './AddCardToDeck';

const CreateDeck = () => {
    return (
        <div className='teacherDiv'>
            <SearchBar />
            <AddCardToDeck />
            <MinorAction />
            <YourCards />
            {/* <PublicCards /> */}
        </div>

    )
}

export default CreateDeck;
