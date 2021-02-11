import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import './DisplayAssignmentsModal.css'

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const DisplayAssignmentsModal = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const roomInfo = useSelector(state => state.classroom.room)

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    const displayAssignments = () => {
        return roomInfo.decks.map((deck) => {
            return <div key={deck.id}>{deck.name}</div>
        })
    }


    return (
        <div>
            <div onClick={toggleModal} className="majorDiv assignmentDiv">Assignments</div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Your Assignments'
            >
                {roomInfo ?
                    <div className='assignment_modal__container'>
                        <button onClick={toggleModal}>Close</button>
                        {roomInfo.decks.length === 1 ?
                            <div>
                                You have {roomInfo.decks.length} assigned deck.
                            </div>
                        :
                            <div>
                                You have {roomInfo.decks.length} assigned decks.
                            </div>
                        }
                        {displayAssignments()}
                    </div>
                : null}
            </Modal>
        </div>
    )
}

export default DisplayAssignmentsModal
