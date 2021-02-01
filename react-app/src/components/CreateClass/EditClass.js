import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as classActions from '../../store/classrooms'


const EditClass = () => {
    const dispatch = useDispatch();

    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    // dispatch(classActions.getRoom(teacher_class_id))

    const teacherId = useSelector(state => state.session.user.id);
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
    },[])

    
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

        setStudentState(new_list)
        
    }

    const deleteCurrentStudent = (e) => {
        e.preventDefault()
        const new_list = studentState.filter(el => {
            if (el.id !== Number(e.target.id)) {
                return el
            } else {
                setDeletedStudents([...deletedStudents, el])
            }
        })

        setStudentState(new_list)
    }

    const generateNewStudentsList = () => {
        if (newStudents === []) {
            return null
        }
        return newStudents.map((el,i) => (
            <label className='studentInputLabel'>
                New Student Name
                <input className='studentInputField' id={i} type='text' onChange={updateNewStudent} value={el.name} />
                <button className='myButton removeButton' id={i} onClick={deleteNewStudent}>Remove</button>
            </label>
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
        })

        setNewStudents(new_list)
        console.log(new_list)
    }

    const addRow = (e) => {
        e.preventDefault()
        setNewStudents([...newStudents, ''])
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmitEdit = () => {

    }


    return (
        loaded && (<div>

            <h1>Create class</h1>
    
            <form className='student-creation'> 
                <label>
                    Class Name
                    <input type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
                </label>
                {generateCurrentStudentsList()}
                {generateNewStudentsList()}
                <button className='add-row' onClick={addRow}>Add Row</button>
                <label>
                    Secret password for class login 
                    <input type='text' onClick={updatePassword} placeholder='Must change me' />
                </label>
                
                <button onClick={handleSubmitEdit}>Edit Your Class!</button>
            
            </form>
        </div>
        )
    )

    // return <div>Test</div>
}

export default EditClass