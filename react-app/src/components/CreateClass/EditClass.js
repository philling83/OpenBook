import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as classActions from '../../store/classrooms'

import './EditClass.css'

const EditClass = (props) => {
    const dispatch = useDispatch();
    let history = useHistory()

    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)

    // const teacherId = useSelector(state => state.session.user.id);
    let student_info = useSelector(state => state.classroom.room.students)
    let classroom_info = useSelector(state => state.classroom.room)


    const [studentState, setStudentState] = useState(student_info)
    const [newStudents, setNewStudents] = useState([])
    const [deletedStudents, setDeletedStudents] = useState([])
    const [password, setPassword] = useState('')
    const [className, setClassName] = useState(classroom_info.name)
    const [loaded, setLoaded] = useState(false)


    useEffect(()=> {
        dispatch(classActions.getRoom(teacher_class_id))
        setLoaded(true)
    }, [dispatch, teacher_class_id])


    const updateClassName = (e) => {
        setClassName(e.target.value)
    }

    const generateCurrentStudentsList = () => {
        return studentState.map((el) => (
            <label className='studentInputLabel' id={el.id}>
                Student Name
                <input className='studentInputField' id={el.id} type='text' onChange={updateCurrentStudents} value={el.name} />
                <button className='myButton removeButton' id={el.id} onClick={deleteCurrentStudent}>Remove</button>
            </label>
        ))
    }

    const updateCurrentStudents = (e) => {
        let new_list = studentState.map(el => {

            if (el.id === Number(e.target.id)) {
                el.name = e.target.value
                return el
            } else {
                return el
            }
        })

        return setStudentState(new_list)

    }

    const deleteCurrentStudent = (e) => {
        e.preventDefault()
        const new_list = studentState.filter(el => {
            if (el.id !== Number(e.target.id)) {
                return el
            } else {
                return setDeletedStudents([...deletedStudents, el])
            }
        })

        return setStudentState(new_list)
    }

    const generateNewStudentsList = () => {
        if (newStudents === []) {
            return null
        }
        return newStudents.map((el,i) => (
            // <label className='editClassLabel'>
            //     New Student Name]
                <div className='addStudentRow'>
                    <button className='removeStudentButton' id={i} onClick={deleteNewStudent}>Remove</button>
                    <input className='editClassField' placeholder='Enter Student Name' id={i} type='text' onChange={updateNewStudent} value={el.name} />
                </div>
            // </label>
        ))
    }

    const updateNewStudent = (e) => {
        const target_id = e.target.id
        let new_list = newStudents.map((el,i) => {

            if (i === Number(target_id)) {
                el = e.target.value
                return el
            } else {
                return el
            }
        })

        setNewStudents(new_list)
    }

    const deleteNewStudent = (e) => {
        e.preventDefault()
        const target_id = e.target.id
        const new_list = newStudents.filter((el,i) => {
            if (i !== Number(target_id)) {
                return el
            }
            return el
        })

        // console.log(new_list)
        return setNewStudents(new_list)
    }

    const addRow = (e) => {
        e.preventDefault()
        setNewStudents([...newStudents, ''])
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmitEdit = async (e) => {
        e.preventDefault()
        console.log('edit submit')
        //Edit classroom info
        const classData = {
            'name': className,
            'password': password
        }
        await dispatch(classActions.editRoom(classroom_info.id, classData))

        //Edit student data
        let edited_students = studentState.filter(el => {
            if (!(el in student_info)) {
                return el
            }
            return el
        })

        await dispatch(classActions.editStudents(classroom_info.id, edited_students))

        //Add new students
        await dispatch(classActions.createStudents(classroom_info.id, newStudents))

        //Delete removed students
        await dispatch(classActions.deleteStudents(deletedStudents))

        history.push('/teachers/:id')
    }


    return (
        loaded && (
            <div className='editClassDiv'>
                <div className='upperEditClassDiv'>
                    <h1 className='editClassHeader'>Edit your class ~</h1>
                    <div className='closeButtonDiv .editClose' onClick={props.toggleModal}>
                        <div className='closeInnerDiv'></div>
                        <i className='closeButton fas fa-window-close'></i>
                    </div>
                </div>
                <form className='editClassForm'>
                    <div className='editDetailDiv'>
                        <h1 className='infoLabel'>Class Name ~</h1>
                        <input className='infoInput' placeholder="(e.g. Mary's Class)" onChange={updateClassName}/>
                    </div>
                    <div className='editDetailDiv'>
                        <h1 className='infoLabel'>Password for class login ~</h1>
                        <input className='infoInput' placeholder='(e.g. 4321)' onChange={updatePassword} />
                    </div>
                    <div className='scrollDiv'>
                        {generateCurrentStudentsList()}
                        {generateNewStudentsList()}
                    </div>
                    <button className='addStudentButton' onClick={addRow}>Add Student</button>
                    <button className='editClassSubmit' onClick={handleSubmitEdit}>Submit Changes</button>
                </form>
            </div>
        )
    )

}

export default EditClass
