import React from 'react'
import  { NavLink } from 'react-router-dom'

// import ControlPanel from '../CreateDeck/ControlPanel'

import './SideBar.css'

const SideBar = (props) => {
    return (
        <div className='sideBarDiv'>
            {props.goHome &&
                <NavLink to='/teachers/:teacherId' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Home</div>
                </NavLink>}
            {props.createClass &&
                <NavLink to='/teacher/createClass' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Create Class</div>
                </NavLink>}
            {props.createDeck &&
                <NavLink to='/teacher/createDeck' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Create Deck</div>
                </NavLink>}
            {props.createCard &&
                <NavLink to='/teacher/createCard' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Create Card</div>
                </NavLink>}
            {props.editDeck &&
                <NavLink to='/teacher/EditDeck' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Edit Deck</div>
                </NavLink>}
            {props.assignDeck &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Assign Deck</div>
                </NavLink>}
            {props.previewDeck &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Preview Deck</div>
                </NavLink>}
            {props.addCardToDeck &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Add Card to Deck</div>
                </NavLink>}
            {props.clearCard &&
                <NavLink to='/teacher/createCard' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Clear Card</div>
                </NavLink>}
            {props.editCard &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Edit Card</div>
                </NavLink>}
            {props.removeCard &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Remove Card</div>
                </NavLink>}
            {props.completeDeck &&
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Complete Deck</div>
                </NavLink>}
        </div>
    )
}

export default SideBar;
