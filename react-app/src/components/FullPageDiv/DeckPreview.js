import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';
import MinorAction from './MinorAction.js'

import './TeacherHomePage.css'

const DeckPreview = () => {
    return (
        <div className='teacherDiv'>
            <SearchBar />
            <MajorAction preview={true} thirdActionDisplay='Students'/>
            <MinorAction createDeck={true} completeDeck={false} createCard={true}/>
            <YourDecks />
        </div>

    )
}

export default DeckPreview;
