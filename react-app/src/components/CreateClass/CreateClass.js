import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as classActions from '../../store/classrooms'
import { NavLink } from 'react-router-dom'

import SearchBar from '../FullPageDiv/SearchBar'


import './CreateClass.css'
const CreateClass = () => {

    // const teacher_class_id = useSelector(state => state.session.user.classrooms_id) || null;
    const teacherId = useSelector(state => state.session.user.id);
    const [className, setClassName] = useState('')
    const [names, setNames] = useState([]);
    const [password, setPassword] = useState('')
    const [editMode, setEditMode] = useState(false)
    // const [loaded, setLoaded] = useState(false)
    // const [editMode, setEditMode] = useState(false)

    // const teacherId = 1

    const dispatch = useDispatch();

    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    dispatch(classActions.getRoom(teacher_class_id))
    let list_of_students
    let classroom_name

    // useEffect(() => {
    //     (async () => {
    //         if (teacher_class_id) {

    //             setEditMode(true)

    //             dispatch(classActions.getRoom(teacher_class_id))

    //             console.log('hit if sttement')
    //             let resStudents = await fetch(`/api/students/from_class/${teacher_class_id}`)
    //             let resStudentsJson = await resStudents.json()
    //             // console.log(resStudentsJson)

    //             if (resStudentsJson) {
    //                 let students = resStudentsJson['list_of_students']
    //                 let student_names = students.map((el) => {
    //                     return el.name
    //                 })
    //                 console.log('student names',student_names)
    //                 setNames(student_names)
    //             }

    //             let resClassroom = await fetch(`/api/classrooms/${teacher_class_id}`)

    //             let resClassroomJson = await resClassroom.json()
    //             // console.log(resClassroomJson)

    //             if (resClassroomJson){
    //                 setClassName(resClassroomJson['name'])
    //             }
    //             console.log(resStudentsJson['list_of_students'])
    //             console.log(resClassroomJson['name'])
    //         }


    //         return setLoaded(true)
    //     })()
    // },[])






    const updateClassName = (e) => {
        setClassName(e.target.value)
    }

    const updateNames = (e) => {
        let temp_name = [...names]
        temp_name[e.target.id] = e.target.value
        setNames(temp_name)
        // console.log(names)
    }

    const removeName = (e) => {
        e.preventDefault()
        const removeIndex = e.target.id

        setNames(names.splice(removeIndex, 1))
        // console.log(names)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const generateList = () => {
        return names.map((el, i) => (
            <label className='studentInputLabel'>
                    Student Name
                    <input className='studentInputField' id={i} type='text' onChange={updateNames} value={el || ''} placeholder='Charlie R.' />
                    <button className='myButton removeButton'onClick={removeName}>Remove</button>
            </label>

        ))
    }

    const addRow = (e) => {
        e.preventDefault()
        setNames([...names, ''])
        // console.log(names)
    }

    const handleSubmitCreate = async (e) => {
        e.preventDefault()

        const classroomData = {
            'name': className,
            'password': password
        }
        console.log('classsroom data', classroomData)

        const new_class = await dispatch(classActions.createRoom(teacherId, classroomData))
        // console.log(new_class)
        const classroomId = new_class.id

        const studentData = {
            'list_of_students': names,
            'classroom_id': classroomId
        }

        await fetch('/api/students/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(studentData),
        })
    }

    return (
<<<<<<< HEAD
        (<div>

            <h1>Create class</h1>
    
            <form className='student-creation'> 
                <label>
                    Class Name
                    <input type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
                </label>
                {generateList()}
                <button className='add-row' onClick={addRow}>Add Row</button>
                <label>
                    Secret password for class login 
                    <input type='text' onClick={updatePassword} placeholder='Super-Secret12345' />
                </label>
                <button onClick={handleSubmitCreate} >Create Your Class! (Warning: Overwrites current class)</button>
            
            </form>
=======
        (<div className='createClassDiv'>
            <SearchBar />
            {/* <MajorAction preview={true} /> */}
            <div class='classListDiv'>
                <div className='blankClass'>
                    <div className='infoDiv'>
                        <p className='className'>{className}</p>
                        <p className='password'>{password}</p>
                    </div>
                    <div className='lowerDiv'>
                        <div className='studentNameDiv'>
                        {names.map(name => (
                            <p className='studentName'>
                                {name}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='classButtonDiv'>
                <div className='completeDiv'>
                    <h2 className='warningText textDiv'>Warning: Overwrites current class</h2>
                    <button className='myButton' onClick={handleSubmitCreate} >Complete Class!</button>

                </div>
                <button className='add-row myButton' onClick={addRow}>Add Row</button>
            </div>
            <div className='inputClassDiv'>
                <form className='studentInputForm'>
                    <div className='studentLabelDiv'>
                        <label className='studentInputLabel'>
                            Class Name
                            <input className='studentInputField' type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
                        </label>
                        <label className='studentInputLabel'>
                            Password for class login
                            <input className='studentInputField' type='text' onClick={updatePassword} placeholder='Super-Secret12345' />
                        </label>
                    </div>
                    <div className='listDiv'>
                        {generateList()}

                    </div>
                </form>
            </div>


>>>>>>> bf4bb7e27b4a913806987be95f984db1690bf625
        </div>
        )
    )
}

export default CreateClass;


{/* <form className='student-creation'>
<label>
    Class Name
    <input type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
</label>
{generateList()}

<label>
    Secret password for class login
    <input type='text' onClick={updatePassword} placeholder='Super-Secret12345' />
</label>
<button onClick={handleSubmitCreate} >Create Your Class! (Warning: Overwrites current class)</button>}

</form> */}
