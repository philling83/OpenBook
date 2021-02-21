import React, { useState, useEffect } from 'react';
import  { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";

import DisplayEditClassModal from '../Modals/DisplayEditClassModal'
import DisplaySubmitDeckModal from '../Modals/DisplaySubmitDeckModal'
import DisplayConfirmAssignModal from '../Modals/DisplayConfirmAssignModal'

import './SideBar.css';

const SideBar = (props) => {
    const dispatch = useDispatch()
    const [editClassModalOpen, setEditClassModalOpen] = useState(false)
    const [submitDeckModalOpen, setSubmitDeckModalOpen] = useState(false)
    const [confirmAssignModalOpen, setConfirmAssignOpen] = useState(false)
    const deck = useSelector((state) => state.deck.deck);
    const roomInfo = useSelector(state => state.classroom.room)
    const currentUser = useSelector(state => state.session.user);
    const user = currentUser.username

    useEffect(() => {}, [deck, deck.id]);

    const toggleEditClassModal = (e) => {
        e.preventDefault()
        setEditClassModalOpen(!editClassModalOpen)
    }

    const toggleSubmitDeckModal = (e) => {
        e.preventDefault()
        setSubmitDeckModalOpen(!submitDeckModalOpen)
    }

    const toggleConfirmAssignModal = (e) => {
        e.preventDefault()
        setConfirmAssignOpen(!confirmAssignModalOpen)
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
            {confirmAssignModalOpen &&
                <DisplayConfirmAssignModal />}

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

            {props.completeDeck &&
                <div className='sideDiv joinText' onClick={toggleSubmitDeckModal}>
                    Complete Deck</div>}
            {props.editClass && roomInfo &&
                <div className='sideDiv joinText' onClick={toggleEditClassModal}>
                    Edit Class</div>}

            {deck.id &&
                <div className='sideDiv joinText' onClick={toggleConfirmAssignModal}>
                    Assign Deck</div>
            }
            {deck.id && !props.viewDeck &&
                <NavLink to='/teacher/viewDeck' style={{textDecoration: 'none'}}>
                    <div className='sideDiv joinText'>View Deck</div>
                </NavLink>
            }
            <div className='sideDiv joinText bottomButton' onClick={onLogout}>
                <div>{user}</div>
                <div>Log Out</div>
            </div>
            {/* {props.viewDeck &&
                <div className='sideDiv joinText' onClick={toggleConfirmAssignModal}>
                Assign Deck</div>
            } */}
        </div>
    )
}

export default SideBar;
