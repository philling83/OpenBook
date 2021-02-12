import React, { useState } from 'react';
import  { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DisplayEditClassModal from '../Modals/DisplayEditClassModal'

import './SideBar.css';

const SideBar = (props) => {
    const [editClassModalOpen, setEditClassModalOpen] = useState(false)
    const roomInfo = useSelector(state => state.classroom.room)

    const toggleEditClassModal = (e) => {
        e.preventDefault()
        setEditClassModalOpen(!editClassModalOpen)
    }

    return (
        <div className='sideBarDiv'>
            {editClassModalOpen &&
                <DisplayEditClassModal />}
            {props.goHome &&
                <NavLink to='/teachers/:teacherId' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>Home</div>
                </NavLink>}
            {props.createClass &&
                <NavLink to='/teacher/createClass' style={{textDecoration: 'none'}} >
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
            {props.editClass && roomInfo &&
                <div className='sideDiv joinText' onClick={toggleEditClassModal}>Edit Class</div>}
        </div>
    )
}

export default SideBar;
