import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

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

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    const displayAssignments = () => {

    }


    return (
        <div>
            <div onClick={toggleModal} className="majorDiv assignmentDiv">Current Assignments</div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Your Assignments'
            >
            </Modal>
        </div>
    )
}

export default DisplayAssignmentsModal
