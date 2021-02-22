import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

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
    const roomInfo = useSelector(state => state.classroom.room);
    const teacher = "HardCoded's class"
    const assignments = ['HardCoded 1/2/21', 'HardCoded 2/1/21']

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    // const displayAssignments = () => {
    //     return roomInfo.decks.map((deck) => {
    //         return <div key={deck.id}>{deck.name}</div>
    //     })
    // }


    return (
        <div>
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
                            <h1 className='editClassHeader'>{`${teacher}`}</h1>
                            <div className='closeButtonDiv .studentClose' onClick={toggleModal}>
                                <div className='closeInnerDiv'></div>
                                <i className='closeButton fas fa-window-close'></i>
                            </div>
                        </div>
                        <div className='assignmentHeaderDiv'>
                            <div className='assHeader'>You have {roomInfo.decks.length} assigned decks</div>
                        </div>
                        <div className='assignmentListDiv'>
                            {assignments.map((assignment, i) =>
                                <div className='assignmentRow' key={i.toString()}>
                                    <h1 className='assignmentList' key={i.toString()}>{assignment}</h1>
                                    <button className='unassignButton'>Unassign</button>
                                </div>
                            )};
                        </div>
                        {/* {displayAssignments()} */}
                    </div>
                : null}
            </Modal>
        </div>
    )
}

export default DisplayAssignmentsModal
