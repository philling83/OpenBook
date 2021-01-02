import React from 'react'

import ControlPanel from '../CreateDeck/ControlPanel'

import './SideBar.css'

const SideBar = () => {
    return (
        <div class='sideBarDiv'>
            <div class='sideDiv joinClassDiv'>
                <a class='joinText' href='/teacher/createClass'>Create Class</a>
            </div>
            <div class='sideDiv reportDiv'>Reports</div>
            <a class='sideDiv libraryDiv' href='/libraries'>Openbook Library</a>
            <div class='sideDiv'>
                <ControlPanel />
            </div>
        </div>
    )
}

export default SideBar;
