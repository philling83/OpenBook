import React from 'react';
import { NavLink } from 'react-router-dom';

import YourDecks from './YourDecks.js';
import SearchBar from './SearchBar.js';
import MajorAction from './MajorAction.js';
import MinorAction from './MinorAction.js'

import './TeacherHomePage.css'

const TeacherHomePage = () => {
    return (
        <div class='teacherDiv'>
            <SearchBar />
            <MajorAction thirdDivDisplay='Students'/>
            <MinorAction />
            <YourDecks />
        </div>

    )
}

export default TeacherHomePage;
