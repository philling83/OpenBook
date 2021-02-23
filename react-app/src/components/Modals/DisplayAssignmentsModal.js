import React, {  useState } from 'react';
import Modal from 'react-modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import * as deckActions from "../../store/decks";

import DisplayConfirmBeginModal from './DisplayConfirmBeginModal'

import './DisplayAssignmentsModal.css'

const customStyles = {
    overlay: {
        backgroundColor: 'none'
    },
    content: {
        position: 'absolute',
        top: '240px',
        left: '120px',
        height: '500px',
        width: '800px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        backgroundColor: 'rgb(248, 245, 245)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(32, 60, 87)',
        borderRadius: '5px',
        padding: '0px',
        border: '8px solid rgb(32, 60, 87)',
    }
}

const DisplayAssignmentsModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [confirmBeginOpen, setConfirmBeginOpen] = useState(false)
    // const [deckId, setDeckId] = useState("")
    // const [loaded, setLoaded] = useState(false);

    // let history = useHistory()
    // const dispatch = useDispatch();

    const roomInfo = useSelector(state => state.classroom.room);
    const sessionRole = useSelector(state => state.session.user.teacher);

    let assignmentText = sessionRole ? 'assigned decks' : 'assignments due'

    //HARD CODED
    const assignments = ['HardCoded 1/2/21', 'HardCoded 2/1/21']

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    const toggleConfirmBeginModal = (e) => {
        e.preventDefault()
        setConfirmBeginOpen(!confirmBeginOpen)
    }

    const handleViewDeck = () => {
        history.push(`/teacher/viewDeck`)
    }

    // const assignDeckId = (e) => {
    //     const deckId = e.target.id;
    //     return setDeckId(1);
    // }

    // const displayAssignments = () => {
    //     return roomInfo.decks.map((deck) => {
    //         return <div key={deck.id}>{deck.name}</div>
    //     })
    // }


    return (
        <div>
            {confirmBeginOpen &&
                <DisplayConfirmBeginModal />}

            <div onClick={toggleModal} className="majorDiv assignmentDiv">Assignments</div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Your Assignments'
                ariaHideApp={false}
            >
                {roomInfo ?
                    <div className='studentModalDiv'>

                        <div className='studentUpperDiv'>
                            <h1 className='editClassHeader'>{`${roomInfo.name}`}</h1>
                            <div className='closeButtonDiv .studentClose' onClick={toggleModal}>
                                <div className='closeInnerDiv'></div>
                                <i className='closeButton fas fa-window-close'></i>
                            </div>
                        </div>

                        <div className='assignmentHeaderDiv'>
                            <div className='assHeader'>You have {assignments.length} {assignmentText}:</div>
                        </div>

                        <div className='assignmentListDiv'>
                            {assignments.map((assignment, i) =>
                                <div className='assignmentRow' key={i.toString()}>

                                    {sessionRole &&
                                        <h1 className='assignmentList' id={assignmentId} key={i.toString()} onClick={(e) => {
                                            // assignDeckId(e)
                                            toggleModal(e)
                                            handleViewDeck(e)
                                        }}>{assignment}</h1>}
                                    {!sessionRole &&
                                        <h1 className='assignmentList' id={assignmentId} key={i.toString()} onClick={(e) => {
                                            // assignDeckId(e)
                                            toggleModal(e)
                                            toggleConfirmBeginModal(e)
                                        }}>{assignment}</h1>}
                                    {sessionRole &&
                                        <button className='unassignButton'>Unassign</button>}

                                {/* {displayAssignments()} */}
                                </div>
                            )}
                        </div>
                        <div className='instructionText'>Click an assignment to view</div>
                    </div>
                : null}
            </Modal>
        </div>
    )
}

export default DisplayAssignmentsModal
