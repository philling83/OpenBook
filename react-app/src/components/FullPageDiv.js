import React from 'react';
import { NavLink } from 'react-router-dom';
import TeacherHomePage from './TeacherHomePage';
import Banner from './Banner';
import SideBar from './SideBar'

const FullPageDiv = () => {
    return (
        <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar />
                <div class='mainDiv'>
                    <TeacherHomePage />
                </div>
            </div>
        </div>
    )
}

export default FullPageDiv
