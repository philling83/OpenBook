import React, { useState } from 'react';
import Modal from 'react-modal'

import EditClass from '../CreateClass/EditClass'

import './DisplayEditClassModal'

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

const DisplayEditClassModal = () => {
    const [modalOpen, setModalOpen] = useState(true)

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                // contentLabel='Your Students'
            >
                <EditClass />
            </Modal>
        </div>
    )
}

export default DisplayEditClassModal;
