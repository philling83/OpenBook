import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

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

const DisplayStudentsModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    // const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    const roomInfo = useSelector(state => state.classroom.room)
    const teacher = "HARD CODE's class"
    const students = ['HardCoded','HardCoded', 'HardCoded', 'HardCoded', 'HardCoded', 'HardCoded', 'HardCoded', 'HardCoded']
    const assignments = 'HardCoded 2/1/21, HardCoded 3/3/21';


    const toggleModal = (e) => {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }

    // const displayStudents = () => {
    //     return roomInfo.students.map((student, i) => {
    //         return <div key={i}>{student.name}</div>
    //     })
    // }


    return (
        <div>
            <div onClick={toggleModal} className="majorDiv videoDiv">Students</div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel='Your Students'
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
                        <div className='headersDiv'>
                            <div className='studentListHeader'>You have {roomInfo.students.length} students</div>
                            <div className='studentListHeader righthandHeader'>Assignments Due</div>
                        </div>
                        <div className='studentsAndAssignments'>
                            <div className='studentModalList'>
                                {students.map((student, i) =>
                                    <h1 className='hardCode' key={i.toString()}>{student}</h1>
                                )};
                                {/* {displayStudents()} */}
                            </div>
                            <div className='studentModalList rightHandList'>
                                {students.map((student, i) =>
                                    <h1 className='hardCode' key={i.toString()} id={student}>{assignments}</h1>
                                )};
                            </div>
                        </div>
                    </div>
                : null}

            </Modal>
        </div>
    )
}

export default DisplayStudentsModal
