import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';
import MinorAction from './MinorAction.js'

import './StudentHomePage.css'

const StudentHomePage = () => {
    return (
        <div className='studentDiv'>
            <SearchBar />
            <MajorAction preview={false} thirdActionDisplay='Classmates'/>
            <MinorAction />
            <YourDecks />
        </div>

    )
}

export default StudentHomePage;
