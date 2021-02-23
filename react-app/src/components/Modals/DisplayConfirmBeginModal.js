import React, { useState } from 'react';
import Modal from 'react-modal'
import  { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import './DisplayConfirmAssignModal.css'

const customStyles = {
    overlay: {
        backgroundColor: 'none'
    },
    content: {
        position: 'absolute',
        top: '320px',
        left: '390px',
        height: '300px',
        width: '475px',
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
        zIndex: '4'
    }
}

const DisplayConfirmBeginModal = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [deckId, setDeckId] = useState("")
    // const currentUser = useSelector(state => state.session.user);
    const history = useHistory()

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    const beginCompletion = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)

        //HARD CODED
        // const deckId = e.target.id;
        const deckId = '1';
        setDeckId(deckId)
        history.push(`/student/viewDeck`)
    }

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Confirm Assign Deck'
                ariaHideApp={false}
            >
                <div className='confirmAssignDiv'>
                    <h1 className='confirmAssignText'>Once you begin an assignment you must complete it and only your first score will count. Proceed?</h1>
                    <div className='choiceButtonDiv'>
                        <div className='closeButtonDiv flipperButtonDiv' onClick={beginCompletion}>
                            <div className='closeInnerDiv'></div>
                            <div className='flipperButton backButton fas fa-arrow-circle-up'></div>
                        </div>
                        <div className='closeButtonDiv' onClick={toggleModal}>
                            <div className='closeInnerDiv'></div>
                            <i className='closeButton fas fa-window-close'></i>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DisplayConfirmBeginModal;
