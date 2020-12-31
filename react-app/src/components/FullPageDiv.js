import React from 'react';
import { useSelector } from 'react-redux';

import TeacherHomePage from './TeacherHomePage';
import StudentHomePage from './StudentHomePage';
import Banner from './Banner';
import SideBar from './SideBar';
import Library from './Library';
import CreateDeck from './CreateDeck'

const FullPageDiv = () => {
    const currentUser = useSelector(state => state.session.user);

    return (
        <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar />
                <div class='mainDiv'>
                    <TeacherHomePage />
                    {/* {currentUser.teacher ? <TeacherHomePage />
                                        : <StudentHomePage />} */}
                    {/* <Library /> */}
                    {/* <CreateDeck /> */}
                </div>
            </div>
        </div>
    )
}

export default FullPageDiv
