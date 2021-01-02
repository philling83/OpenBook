import React from 'react'

import ControlPanel from '../CreateDeck/ControlPanel'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sideBarDiv'>
            <div className='sideDiv joinClassDiv'>
                <a className='joinText' href='/teacher/createClass'>Create Class</a>
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
