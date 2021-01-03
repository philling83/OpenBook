import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';
import MinorAction from './MinorAction.js'

import './StudentHomePage.css'

const StudentHomePage = () => {
    return (
        <div class='studentDiv'>
            <SearchBar />
            <MajorAction thirdActionDisplay='Classmates'/>
            <MinorAction />
            <YourDecks />
        </div>

    )
}

export default StudentHomePage;