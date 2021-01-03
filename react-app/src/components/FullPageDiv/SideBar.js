import React from 'react'

import ControlPanel from '../CreateDeck/ControlPanel'

import './SideBar.css'

const SideBar = (props) => {
    return (
        <div className='sideBarDiv'>
            {props.createClass &&
                <a className='sideDiv joinText' href='/teacher/createClass'>Create Class</a>}
            {!props.CreateClass &&
                <button className = 'sideDiv joinText'>Add Card to Deck</button>}
            <div class='sideDiv reportDiv'>Reports</div>
            <a class='sideDiv libraryDiv' href='/libraries'>Openbook Library</a>
            <div class='sideDiv'>
                <ControlPanel />
            </div>
        </div>
    )
}

export default SideBar;
