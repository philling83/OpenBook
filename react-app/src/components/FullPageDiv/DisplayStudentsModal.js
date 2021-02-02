import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import * as classActions from '../../store/classrooms'

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

const DisplayStudentsModal = () => {

    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(false)
    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    const roomInfo = useSelector(state => state.classroom.room)

  

    
 

    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    const displayStudents = () => {
        return roomInfo.students.map(student => {
            return <div>{student.name}</div>
        })
    }


    return (
        <div>
            <button onClick={toggleModal}>Students</button>
            <Modal 
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Your Students'
            >

                <button onClick={toggleModal}>Close</button>
                {roomInfo ? displayStudents() : null}

            </Modal>
        </div>
    )
}

export default DisplayStudentsModal