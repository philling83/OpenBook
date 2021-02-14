import React, { useState } from 'react';
import Modal from 'react-modal'

import EditClass from '../CreateClass/EditClass'

import './DisplayEditClassModal'

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
        position: 'absolute',
        color: 'rgb(32, 60, 87)',
        borderRadius: '5px',
        padding: '0px',
        border: '8px solid rgb(32, 60, 87)',
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
                appElement={document.getElementById('app')}
                contentLabel='Edit Class'
            >
                <EditClass toggleModal={toggleModal}/>
            </Modal>
        </div>
    )
}

export default DisplayEditClassModal;
