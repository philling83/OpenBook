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
            <div class='fullPageDiv'>
                <Banner />
                <div class='bodyDiv'>
                    <SideBar />
                    <div class='mainDiv'>
                        {currentUser.teacher ? <TeacherHomePage />
                                             : <StudentHomePage />}
                    </div>
                </div>
            </div>
        )
    }
}


export default FullPageDiv
