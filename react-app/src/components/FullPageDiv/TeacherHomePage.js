import React from 'react';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';

import './TeacherHomePage.css'

const TeacherHomePage = () => {
    return (
        <div className='teacherDiv'>
            <MajorAction preview={false} />
            <SearchBar />
            <YourDecks />
        </div>

    )
}

export default TeacherHomePage;
