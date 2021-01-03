import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TeacherHomePage from './TeacherHomePage';
import StudentHomePage from './StudentHomePage';
import Banner from './Banner';
import SideBar from './SideBar';

import './FullPageDiv.css'


const FullPageDiv = () => {
    const currentUser = useSelector(state => state.session.user);
    if (!currentUser) {
        return <Redirect to="/"/>
    } else {
        return (
            <div className='fullPageDiv'>
                <Banner />
                <div className='bodyDiv'>
                    <SideBar addToLibrary={false} addCardToDeck={false} createClass={true}/>
                    <div className='mainDiv'>
                        {currentUser.teacher ? <TeacherHomePage />
                                             : <StudentHomePage />}
                    </div>
                </div>
            </div>
        )
    }
}


export default FullPageDiv
