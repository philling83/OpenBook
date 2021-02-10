import React from 'react'
import  { NavLink } from 'react-router-dom'

// import ControlPanel from '../CreateDeck/ControlPanel'

import './SideBar.css'

const SideBar = (props) => {
    return (
        <div className='sideBarDiv'>
            {props.createClass &&
                <NavLink to='/teacher/createClass' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Create Class</div>
                </NavLink>}
            {props.addCardToDeck &&
                <NavLink to='/CreateDeck' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Add Card to Deck</div>
                </NavLink>}
            {props.addToLibrary &&
                <NavLink to='/teachers/:teacherId' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Add To My Library</div>
                </NavLink>}
            <div className='sideDiv reportDiv'>Reports</div>
            <NavLink to='' style={{textDecoration: 'none'}}>
                <div className='sideDiv libraryDiv'>Openbook Library</div>
            </NavLink>
            {/* <div class='sideDiv'>
                <ControlPanel />
            </div> */}
        </div>
    )
}

export default SideBar;
