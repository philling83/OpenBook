import React, { useState } from 'react';
import  { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"

import DisplayEditClassModal from '../Modals/DisplayEditClassModal'
import DisplaySubmitDeckModal from '../Modals/DisplaySubmitDeckModal'

import './SideBar.css';

const SideBar = (props) => {
    const dispatch = useDispatch()
    const [editClassModalOpen, setEditClassModalOpen] = useState(false)
    const [submitDeckModalOpen, setSubmitDeckModalOpen] = useState(false)
    const roomInfo = useSelector(state => state.classroom.room)
    const currentUser = useSelector(state => state.session.user);
    const user = currentUser.username

    const toggleEditClassModal = (e) => {
        e.preventDefault()
        setEditClassModalOpen(!editClassModalOpen)
    }

    const toggleSubmitDeckModal = (e) => {
        e.preventDefault()
        setSubmitDeckModalOpen(!submitDeckModalOpen)
    }

    const onLogout = async (e) => {
        return dispatch(
          sessionActions.logout()
        )
    };

    return (
        <div className='sideBarDiv'>
            {editClassModalOpen &&
                <DisplayEditClassModal />}
            {submitDeckModalOpen &&
                <DisplaySubmitDeckModal />}
            {props.goHome &&
                <NavLink to={`/teachers/${currentUser.id}`} style={{textDecoration: 'none'}}>
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
                <div className='sideDiv joinText' onClick={toggleSubmitDeckModal}>
                    Complete Deck</div>}
            {props.editClass && roomInfo &&
                <div className='sideDiv joinText' onClick={toggleEditClassModal}>
                    Edit Class</div>}
            <div className='sideDiv joinText bottomButton' onClick={onLogout}>
                <div>{user}</div>
                <div>Log Out</div>
            </div>
        </div>
    )
}

export default SideBar;
