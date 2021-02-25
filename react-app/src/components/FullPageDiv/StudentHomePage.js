import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';

import './StudentHomePage.css'

const StudentHomePage = () => {
    return (
        <div className='studentDiv'>
            <MajorAction />
            <SearchBar />
            <YourDecks />
        </div>

    )
}

export default StudentHomePage;
