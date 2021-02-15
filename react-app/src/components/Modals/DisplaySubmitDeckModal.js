import React, { useState } from 'react';
import Modal from 'react-modal';

import DeckInfoCreate from '../CreateDeck/DeckInfoCreate'

import './DisplayStudentsModal.css'

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
        backgroundColor: 'rgba(165, 93, 94)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        color: 'rgb(236, 224, 224)',
        borderRadius: '5px',
        padding: '10px',
        border: '1px solid rgb(236, 224, 224)',
    }
}


const DisplaySubmitDeckModal = () => {
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
                contentLabel='Submit Deck'
                appElement={document.getElementById('app')}
            >
                <DeckInfoCreate toggleModal={toggleModal}/>
            </Modal>
        </div>
    )
}

export default DisplaySubmitDeckModal
